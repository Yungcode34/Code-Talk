import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
class Register extends React.Component {
    state ={

    }
    
    handleChnage = () =>{}

    render(){
        return(
            <Grid textAlign="center" verticleAlign="middle" className="app">
                <Grid.Column style={{maxWidth: 458}}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <Icon name="code" color="orange"/>
                        Register for Code talk
                    </Header>
                    <Form size="large">
                        <Segment stacked>
                            <Form.Input fluid name="username" icon="user" iconPosition="left"
                            placeholder="Username" onChange={this.handleChnage} type="text"/>

                            <Form.Input fluid name="emai" icon="mail" iconPosition="left"
                            placeholder="Email adress" onChange={this.handleChnage} type="email"/>

                            <Form.Input fluid name="password" icon="lock" iconPosition="left"
                            placeholder="Password" onChange={this.handleChnage} type="password"/>

                            <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left"
                            placeholder="Password Confirmation" onChange={this.handleChnage} type="text"/>

                            <Button color="orange" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>
                    <Message>Already signed up? <Link to="/login">Login!</Link></Message>
                </Grid.Column>
            </Grid>

        )
    }
}

export default  Register;