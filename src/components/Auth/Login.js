import React from 'react';
import firebase from '../../firebase';
import { Grid, Form, Segment, Button, Header, Message, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
        email:"",
        password:"",
        errors: [],
        loading:false,
    };



    displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p> )
    
    handleChnage = event =>{
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = event => {
        event.preventDefault();
        if(this.isFormValid()){
            this.setState({ errors:[], loading: true })
      }
    }


    handleInputError = (errors, inputName) =>{
      return errors.some(error => error.message.toLowerCase().includes(inputName)) ? 'error':""
    }

    render(){
        const { email, password, errors, loading } = this.state;
        return(
            <Grid textAlign="center" verticlealign="middle" className="app">
                <Grid.Column style={{maxWidth: 458}}>
                    <Header as="h1" icon color="violet" textAlign="center">
                        <Icon name="code branch" color="violet"/>
                        Login into Code talk
                    </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>

                            <Form.Input fluid name="email" icon="mail" iconPosition="left"
                            placeholder="Email adress" onChange={this.handleChnage} value={email} className={this.handleInputError(errors, 'email')} type="email"/>

                            <Form.Input fluid name="password" icon="lock" iconPosition="left"
                            placeholder="Password" onChange={this.handleChnage} value={password} className={this.handleInputError(errors, 'password')} type="password"/>

                            <Button disabled={loading} className={loading ? 'loading': ''} color="violet" fluid size="large">Submit</Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                        <h3>Error</h3>
                        {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Message>Don't have an account? <Link to="/register">Register!</Link></Message>
                </Grid.Column>
            </Grid>

        )
    }
}

export default  Login;