import React, { useState,useEffect } from "react";
 // import Form from "react-bootstrap/Form";
  // import Button from "react-bootstrap/Button";
import { message } from 'antd';
import { Row,Col, Card, Form, Input, Button,Checkbox } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const Login = (props) => {

     const [list, setlist]= useState("");
    const [login,setlogin] = useState({
        email:"",password:""
    });

    useEffect(() => {
        let data = [];
        if (JSON.parse(localStorage.getItem("list")) !== null) {
            data = JSON.parse(localStorage.getItem("list"));
        }
        setlist(data);
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setlogin({...login, [name]: value});
    }

    const handleSubmit  = (e) =>{
        const findLofinUser = list.find(user => user.email === login.email && user.password === login.password);
        if (findLofinUser && findLofinUser.email && findLofinUser.password) {
            message.success('You Successfully Log In');
            localStorage.setItem("isActive", findLofinUser.email)
            props.history.push(`/UserDetails`)
        } else {
            message.error('Enter Valid Details')
        }
}
    const ForgetPass = (e) =>{
        props.history.push('/ForgetPass')
    }
    const Signup = (e) =>{
        props.history.push('/Signup1')
    }
    return (

        <div className="Login">
            <Row style={{marginTop: 200}}>
                <Col span={8}/>
                    <Col span={6}>
            <Card className='login-card-first' bordered={true}>
                <h1 className="h1-login">Log In</h1>
                <Form>
                    <Form.Item>
                        <Input placeholder="Enter Your EmailId" name="email" value={login.email || ""}
                               onChange={handleChange}/>
                    </Form.Item>

                    <Form.Item>
                        <Input.Password placeholder="Enter Your PassWord" name="password"
                                        value={login.password || ""} onChange={handleChange}/>
                    </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                        <a onclassName="login-form-forgot" onClick={ForgetPass} href="">
                            Forgot password
                        </a>
                </Form.Item>
                        <Button className="ant-btn-primary" onClick={handleSubmit}>
                            Login
                        </Button>
                </Form>
            </Card>
                </Col>
                <Col span={4}>
                    <Card className="card_case">
                        <h1 className="login-card-h2">Sign up</h1>
                        <Avatar size={64} icon={<UserOutlined />} /> <br/><br/>
                        <button  onClick={Signup} className="ant-btn-dangerous"
                                type="button">Register
                        </button>
                    </Card>
                </Col>
                <Col span={8}/>
            </Row>

            {/*<h1 className="Login">Login</h1>*/}
            {/*<Form onSubmit={handleSubmit}>*/}
            {/*    <Form.Group size="lg" controlId="email">*/}
            {/*       <Form.Label>Email</Form.Label>*/}
            {/*       <Form.Control*/}
            {/*            autoFocus*/}
            {/*            type="email"*/}
            {/*            value={email}*/}
            {/*            onChange={(e) => setEmail(e.target.value)}*/}
            {/*        />*/}
            {/*    </Form.Group>*/}
            {/*    <Form.Group size="lg" controlId="password">*/}
            {/*        <Form.Label>Password</Form.Label>*/}
            {/*        <Form.Control*/}
            {/*            type="password"*/}
            {/*            value={password}*/}
            {/*            onChange={(e) => setPassword(e.target.value)}*/}
            {/*        />*/}
            {/*    </Form.Group>*/}
            {/*    <Button block size="lg" type="submit" disabled={!validateForm()}>*/}
            {/*        Login*/}
            {/*    </Button>*/}
            {/*</Form>*/}
        </div>

    );
}

export default Login;