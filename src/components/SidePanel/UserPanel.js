import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react'
class UserPanel extends React.Component{
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
                </Grid.Column> 


            </Grid>
        )
    }
}

export default UserPanel;