import React from 'react';
import { Grid, Header, Icon, Dropdown, Image , Modal, Input} from 'semantic-ui-react';
import firebase from '../../firebase';
class UserPanel extends React.Component{

    state = {
        user: this.props.currentUser
    }


    openModal = () => this.setState({modal:true})

    closeModal = () => this.setState({modal:false})

dropdownOptions = () =>[
        {
            key:'user',
            text:<span>signed in as <strong>{this.state.user.displayName}</strong></span>,
            disabled: true
        },
        {
            key:'avatar',
            text: <span onClick={this.openModal}> Chnage avatar</span>
        },
        {
            key:'signput',
            text: <span onClick={this.handleSignout} >Sign out</span>
        }
    ]

handleSignout = () =>{
    firebase
    .auth()
    .signOut()
    .then(() => console.log('signed out'));
}

    render(){

        const { user, modal } = this.state;
        const {primaryColor} = this.props

        return (
            <Grid style={{ background: primaryColor}}>
                <Grid.Column>
                    <Grid.Row style={{ padding: '1.2em', margin:0 }}>
                        {/*app header*/}
                        <Header inverted floated="left" as="h2">
                            <Icon name="code"/>
                            <Header.Content>Code Talk</Header.Content>
                        </Header>
                        {/* user dropdown*/}
                        <Header style={{ padding: '0.25em' }} as="h4" inverted>
                        <Dropdown trigger={
                                <span>
                                    <Image src={user.photoURL} spaced="right" avatar/>
                                    {user.displayName}
                                </span>
                        } options={this.dropdownOptions()} />
                    </Header>
                    </Grid.Row>    

                    <Modal basic open={modal} onClose={this.closeModal}>
                        <Modal.Header>
                            CHnage avatar
                        </Modal.Header>
                        <Modal.Content>
                            <Input
                            fluid
                            type="file"
                            label="New Avatar"
                            name="previewImage"
                            />
                            <Grid centered stackable columns={2}>
                                <Grid.Row centered>
                                    <Grid.Column className="ui centered aligned grid">
                                        
                                    </Grid.Column>
                                    <Grid.Column>
                                        
                                        </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Modal.Content>
                    </Modal>
                </Grid.Column> 
            </Grid>
        );
    }
}

export default UserPanel;