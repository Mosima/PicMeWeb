import React, { Component } from 'react';
import { Button,Form,FormGroup, Label,Input, Container,Row,Col} from 'reactstrap';

class Register extends Component {
    render(){
        return (
            <div  style={{marginTop:50}}>
            <Container>
            <Row>
            <Col md={4}></Col>
             <Col md={4}>
           
                <h1>Register Account </h1>
                <Form  method="POST" action="/api/user/login">
                <FormGroup>
                    <Label for="nameField">First Name</Label>
                    <Input type="text" name="nameField" id="nameField" placeholder="Name" required={true}/>
                </FormGroup>
                <FormGroup>
                    <Label for="surnameField">Last name</Label>
                    <Input type="text" name="surnameField" id="surnameField" placeholder="Surname" required={true}/>
                </FormGroup>
                <FormGroup>
                    <Label for="address">Address</Label>
                    <Input type="address" name="address" id="address" placeholder="address" required={true}/>
                </FormGroup>
                <FormGroup>
                    <Label for="emailField">E-mail</Label>
                    <Input type="email" name="email" id="emailField" placeholder="someone@example.com" required={true}/>
                </FormGroup>

                <FormGroup>
                        <Label for="passwordField">Password</Label>
                        <Input type="password" name="password" id="passwordField" placeholder="your password here" max={8} required={true}/>
                </FormGroup>
                <FormGroup>
                    <div className="float-right">
                    <Button type="submit" outline color="primary" size="sm"  >Register</Button>
                    </div>
                </FormGroup>
                <FormGroup>
                    <text style={{fontSize:14}}>Have account? <a style={{color:"blue"}}>Login</a></text>
                </FormGroup>
         </Form>
         </Col>
         <Col md={4}></Col>
            </Row>
            </Container>
        
           </div>
            )
        }
}

export default Register;