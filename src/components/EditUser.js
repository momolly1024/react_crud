import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

function EditUser() {
    const { users, editUser } = useContext(GlobalContext);
    const navigate = useNavigate();

    const { id } = useParams();
    const [selectedUser, setSelectedUser] = useState({
        id: "",
        name: "",
    });

    useEffect(() => {
        const userId = id;
        const selectedUser = users.find((user) => user.id === userId);
        setSelectedUser(selectedUser);
    }, [id, users]);
    const onSubmit = () => {
        editUser(selectedUser);
        navigate("/");
    };
    const onChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
    };
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input
                    type="text"
                    name="name"
                    value={selectedUser.name}
                    onChange={onChange}
                    placeholder="Enter name"
                ></Input>
            </FormGroup>
            <Button type="submit">Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2">
                Cancel
            </Link>
        </Form>
    );
}

export default EditUser;
