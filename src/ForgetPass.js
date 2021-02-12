import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, message, Row} from "antd";

const ForgetPass = (props) => {

    const [forgetPassword, SetforgetPassword] = useState({
        Forgetpassword: "", EnterANewpassword: "", Confirmpassword: ""
    })
    const [list, setlist] = useState("");

    useEffect(() => {
        let data = [];
        if (JSON.parse(localStorage.getItem("list")) !== null) {
            data = JSON.parse(localStorage.getItem("list"));
        }
        setlist(data);
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        SetforgetPassword({...forgetPassword, [name]: value});
    }
    const handleSubmit = (e) => {
        const findLofinUser = list.find(user => user.password === forgetPassword.Forgetpassword);
     const index = list.indexOf(findLofinUser);
        if (findLofinUser && findLofinUser.password) {
            findLofinUser.password = forgetPassword.EnterANewpassword;
            list[index] = findLofinUser;
            localStorage.setItem("list", JSON.stringify(list));
            message.success('You Successfully Change Password');
            props.history.push(`/Login`)
        } else {
            message.error('in valid password')
        }
    }
        return (
            <div>
                <Row style={{marginTop: 200}}>
                    <Col span={8}/>
                    <Col span={4}>
                        <form>
                            <Form.Item>
                                <Input.Password placeholder="Forget PassWord" name="Forgetpassword"
                                                value={forgetPassword.Forgetpassword || ""} onChange={handleChange}/>
                            </Form.Item>
                            <Form.Item>
                                <Input.Password placeholder="Enter A New PassWord" name="EnterANewpassword"
                                                value={forgetPassword.EnterANewpassword || ""} onChange={handleChange}/>
                            </Form.Item>
                            <Form.Item>
                                <Input.Password placeholder="Confirm PassWord" name="Confirmpassword"
                                                value={forgetPassword.Confirmpassword || ""} onChange={handleChange}/>
                            </Form.Item>
                            <Button className="ant-btn-primary" onClick={handleSubmit}>
                                Confirmpassword
                            </Button>
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }


export default ForgetPass ;