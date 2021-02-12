import React, { useState, useEffect } from "react";
import { Row,Col, Card } from 'antd';

const Signup1 = (props) => {
    const [userDetail, setUserDetail] = useState({
        firstName: "",
        lastName: "",
        address: "",
        gender: "",
        email:"",
        password:"",
    });
    const [list, setList] = useState([]);
    const [edittableindex, setEdittableIndex] = useState(null);
    const [error, setError] = useState({
        firstName:" ",lastName:" "
    });

    useEffect(() => {
        let Data = [];
        if (JSON.parse(localStorage.getItem("list")) !== null) {
            Data = JSON.parse(localStorage.getItem("list"));
        }
        setList(Data);
        if (props.match.params.id){
            setEdittableIndex(props.match.params.id);
            const findId = Data[parseInt(props.match.params.id)]
            setUserDetail(findId);
        }
    }, [])

    const validation = () => {
        let iserror = false;
        const error1 = {};
        if (userDetail.firstName === "") {
            error1.firstName = "First Name should be written";
            iserror = true;
        }
        if (userDetail.lastName === "") {
            error1.lastName = "Last Name should be written";
            iserror = true;
        }

        if (userDetail.gender === "") {
            error1.gender = "Any one Gender to be selected";
            iserror = true;
        }
        if (userDetail.address === "") {
            error1.address = "address should be written";
            iserror = true;
        }
        if (userDetail.email === "") {
            error1.email = "email should be written";
            iserror = true;
        }
        if (userDetail.password === "") {
            error1.password = "password should be written";
            iserror = true;
        }
        setError(error1)
        return iserror;
    };

    const handleChange = e => {
        const {name, value} = e.target;

        if (name === "gender") {
            setUserDetail({...userDetail, [name]: value})
        } else {
            setUserDetail({...userDetail, [name]: value})
        }
    }

    const submitValue = () => {debugger
        const x = validation();
        if (!x){
            list.push(userDetail)
            setList(list)
            setUserDetail({});
            localStorage.setItem("list", JSON.stringify(list));
            props.history.push(`/Login`)
         }

        setEdittableIndex(null)
    }

    return (
        <div className="col-md-6">
            <Row style={{marginTop: 100}}>
                <Col span={8}/>
                <Col span={12}>
                    <Card>
                        <h2 style={{textAlign: "center"}}>Registration Form</h2><br/>
            <b>FIRST NAME</b> : <input type="text" className="input-group" name="firstName"
                                       value={userDetail.firstName || ''}
                                       onChange={handleChange}/><span
            style={{color: "blue"}}>{error.firstName}</span><br/><br/>

            <b>LAST NAME</b> : <input type="text" className="input-group" name="lastName"
                                      value={userDetail.lastName || ''}
                                      onChange={handleChange}/><span
            style={{color: "blue"}}>{error.lastName}</span><br/><br/>
            <b>email</b> : <input type="email" className="input-group" name="email"
                                      value={userDetail.email || ''}
                                      onChange={handleChange}/><span
            style={{color: "red"}}>{error.email}</span><br/><br/>

            <b>GENDER</b> :
            <input type="radio" className="input-group" name="gender" checked={userDetail.gender === "male"}
                   onChange={handleChange} value="male"/>Male{' '}
            <input type="radio" className="input-group" name="gender" checked={userDetail.gender === "female"}
                   onChange={handleChange} value="female"/>Female{' '}
            <input type="radio" className="input-group" name="gender" checked={userDetail.gender === "other"}
                   onChange={handleChange} value="other"/>Other<span
            style={{color: "green"}}>{error.gender}</span><br/><br/>

            <b>ADDRESS</b> : <input type="text" className="input-group" name="address"
                                    value={userDetail.address || ''}
                                    onChange={handleChange}/><span style={{color: "brown"}}>{error.address}</span><br/><br/>
            <b>PASSWORD</b> : <input placeholder="Enter Your PassWord" name="password"
                                     value={userDetail.password || ''}onChange={handleChange} />
            <span className="text-group" style={{color: "red"}}>{error.password }</span><br/><br/>
        <button className="ant-btn-primary" onClick={submitValue}>Submit</button>
                    </Card>
                </Col>
                <col span={8}/>
            </Row>
        </div>

    )

};

export default Signup1;