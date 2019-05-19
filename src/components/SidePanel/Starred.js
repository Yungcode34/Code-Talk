import React from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import firebase from '../../firebase';
import { connect} from 'react-redux';
import { setCurrentChannel, setPrivateChannel} from '../../actions';

class Starred extends React.Component {

    state = {
        user: this.props.currentUser,
        userRef: firebase.database().ref('users'),
        activeChannel:'',
        starrChannels: []
    }

    componentDidMount(){
        if(this.state.user){
            this.addListeners(this.state.user.uid);
        }
    }


    componentWillUnmount(){
        this.removeListener();
    }

    removeListener = () => {
        this.state.userRef.child(`${this.state.user.uid}/starred`).off();
    }

    addListeners = userId =>{
        this.state.userRef
        .child(userId)
        .child('starred')
        .on('child_added', snap =>{
            const starrChannel = {id: snap.key, ...snap.val()};
            this.setState({
                starrChannels: [...this.state.starrChannels, starrChannel]
            });
        });
        this.state.userRef
        .child(userId)
        .child('starred')
        .on('child_removed', snap=>{
            const channelToRemove ={id: snap.key, ...snap.val()}
            const filteredChannels = this.state.starrChannels.filter(channel =>{
                return channel.id !== channelToRemove.id;
            })
            this.setState({starrChannels: filteredChannels});
        })

    }

    changeChannel = channel => {
        this.setActiveChannel(channel);
        this.props.setCurrentChannel(channel);
        this.props.setPrivateChannel(false);
    }

    setActiveChannel = channel => {
        this.setState({ activeChannel: channel.id });
    }

    displayChannels = starrChannels =>(
        starrChannels.length > 0 && starrChannels.map(channel =>(
            <Menu.Item
            key={channel.id}
            onClick={() => this.changeChannel(channel)}
            name={channel.name}
            style={{opacity: 0.7}}
            active={channel.id === this.state.activeChannel}
            >

                # {channel.name}
            </Menu.Item>
        ))
    )
    
    render(){

        const { starrChannels } = this.state;
        return (
            <Menu.Menu className="menu">
                <Menu.Item>
                    <span>
                        <Icon name="exchange"/> STARRED
                    </span>{" "}
                    ({ starrChannels.length }) 
                </Menu.Item>
                {this.displayChannels(starrChannels)}
            </Menu.Menu>
        )
    }
}

export default connect(null, {setCurrentChannel, setPrivateChannel})(Starred);