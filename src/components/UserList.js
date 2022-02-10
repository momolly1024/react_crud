import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

function UserList() {
    return (
        <ListGroup className="mt-4">
            <ListGroupItem className="d-flex">
                <strong>User One</strong>
                <div style={{ marginLeft: "auto" }}>
                    <Link className="btn btn-warning" to="/edit/1">
                        Edit
                    </Link>
                    <Button color="danger" style={{ marginLeft: "10px" }}>
                        Delect
                    </Button>
                </div>
            </ListGroupItem>

            <ListGroupItem className="d-flex">
                <strong>User two</strong>
                <div style={{ marginLeft: "auto" }}>
                    <Link className="btn btn-warning" to="/edit/1">
                        Edit
                    </Link>
                    <Button color="danger" style={{ marginLeft: "10px" }}>
                        Delect
                    </Button>
                </div>
            </ListGroupItem>
        </ListGroup>
    );
}

export default UserList;
