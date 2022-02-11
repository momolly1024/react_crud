import React, { useState, useContext } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
function AddUser() {
    const { addUser } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name: name,
        };
        addUser(newUser);
        navigate("/");
    };
    const onChange = (e) => {
        setName(e.target.value);
    };
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input
                    type="text"
                    value={name}
                    onChange={onChange}
                    placeholder="Enter name"
                ></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className="btn btn-danger ml-2">
                Cancel
            </Link>
        </Form>
    );
}

export default AddUser;
