import React from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import { connect} from 'react-redux';
import { setCurrentChannel, setPrivateChannel} from '../../actions';

class Starred extends React.Component {

    state = {
        activeChannel:'',
        starrChannels: []
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