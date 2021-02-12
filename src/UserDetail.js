import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router";
import {Table,Button} from "antd";

const UserDetail = (props) => {
    const history = useHistory();

    const [userdetail, setUserDetail] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        gender: "",
    });
    const [data, setData] = useState([])

    const [edittableIndex, setEdittableIndex] = useState(null);

    useEffect(() => {
        let d = [];
        if (JSON.parse(localStorage.getItem("list")) !== null) {
            d = JSON.parse(localStorage.getItem("list"));
        }
        setData(d);
    }, [])

    const onDelete = (index) => {
        setData(data.filter((value, i) => i !== index))
        localStorage.setItem('list', JSON.stringify(data));
    }
    const onEdit = (index) => {
        props.history.push(`/editUserDetails/${index}`)
        setUserDetail(data[index])
        setData(data)
        setEdittableIndex(index)
        setUserDetail({
            details: data[index], EdittableIndex: index
        })
    }
    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Action',
            dataIndex: '',
            render: (text, record, rowIndex) => (
                <>
                <button className="ant-btn-primary" onClick={() => {
                    onEdit(rowIndex)
                }}>Edit</button>{" "}
                <button className = "ant-btn-danger" onClick = {() =>{ onDelete(rowIndex)} }> Delete </button>
                </>
        )
    },
    ]
    ;

    return (

        <div className="container">
            <Table dataSource={data} columns={columns} />
            {/*<div className="row table-responsive">*/}
            {/*   <table className="table">*/}
            {/*         <thead>*/}
            {/*         <tr>*/}
            {/*             <th>First Name</th>*/}
            {/*             <th>Last Name</th>*/}
            {/*             <th>email</th>*/}
            {/*             <th>address</th>*/}
            {/*             <th>gender</th>*/}
            {/*             <th>password</th>*/}
            {/*             <th>Action</th>*/}
            {/*         </tr>*/}
            {/*         </thead>*/}
            {/*         <tbody>*/}
            {/*         {*/}
            {/*             data.map((value, index) => (*/}
            {/*                 <tr key={index}>*/}
            {/*                     <td>{value.firstName}</td>*/}
            {/*                     <td>{value.lastName}</td>*/}
            {/*                     <td>{value.email}</td>*/}
            {/*                     <td>{value.address}</td>*/}
            {/*                     <td>{value.gender}</td>*/}
            {/*                     <td>{value.password}</td>*/}
            {/*                     <td>*/}
            {/*                         <button className="btn-success" onClick={() => { onEdit(index) }}>Edit</button> {' '}*/}
            {/*                         <button className="btn-danger"onClick={() => { onDelete(index) }}>Delete</button>*/}
            {/*                     </td>*/}

            {/*                 </tr>*/}

            {/*             ))*/}
            {/*         }*/}
            {/*         </tbody>*/}
            {/*     </table>*/}
            {/* </div>*/}
        </div>
    );
}

export default UserDetail;