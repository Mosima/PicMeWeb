import React, {Component, Image} from 'react';
import { Button,Form,FormGroup, Label,Input, Container,Row,Col} from 'reactstrap';
import backLogin from '../images/back.jpg';

var sectionStyle = {
    width: "100%",
    height: "400",
    backgroundImage: "url(" + { backLogin } + ")"
  };

class Login extends Component {
constructor(props){
    super(props);
}
render(){
    return (
        <section style={ sectionStyle }>
        <div  style={{marginTop:50}}>
        <Container>
        <Row>
        <Col md={4}></Col>
         <Col md={4}>
       
        	<h1>Login To Account</h1>
            <Form  method="POST" action="/api/user/login">
            <FormGroup>
                <Label for="emailField">E-mail</Label>
                <Input type="email" onChange={(e)=>{this.setState({email: e.target.value})}} name="email" id="emailField" placeholder="someone@example.com" required={true}/>
            </FormGroup>
            <FormGroup>
                    <Label for="passwordField">Password</Label>
                    <Input type="password" name="password" onChange={(e)=>{this.setState({password: e.target.value})}} id="passwordField" placeholder="your password here" max={8} required={true}/>
            </FormGroup>
            <FormGroup>
                <div className="float-right">
                <Button type="submit" outline color="primary" size="sm"  >LOGIN</Button>
                </div>
            </FormGroup>

            <FormGroup>
            <text style={{fontSize:14}}>Don't Have Account? <a style={{color:"blue"}}>Register</a></text>
            </FormGroup>
     </Form>
     </Col>
     <Col md={4}></Col>
        </Row>
        </Container>
    
       </div>
       </section>
        )
    }

}



export default  (Login);