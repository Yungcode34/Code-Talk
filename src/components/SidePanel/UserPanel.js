import React from 'react';
import { Grid, Header, Icon, Dropdown } from 'semantic-ui-react'
class UserPanel extends React.Component{
dropdownOptions = () =>[
        {
            key:'user',
            text:<span>signed in as <strong>user</strong></span>,
            disabled: true
        },
        {
            key:'avatar',
            text: <span>Chnage avatar</span>
        },
        {
            key:'signput',
            text: <span>Sign out</span>
        }
    ]

    render(){
        return (
            <Grid style={{ background:'#4c3c4c'}}>
                <Grid.Column>
                    <Grid.Row style={{ padding: '1.2em', margin:0 }}>
                        {/*app header*/}
                        <Header inverted floated="left" as="h2">
                            <Icon name="code"/>
                            <Header.Content>Code Talk</Header.Content>
                        </Header>
                    </Grid.Row>   

                    <Header style={{ padding: '0.25em' }} as="h4" inverted>
                        <Dropdown trigger={
                                <span>user</span>
                        } options={this.dropdownOptions()} />
                    </Header> 
                </Grid.Column> 
            </Grid>
        )
    }
}

export default UserPanel;