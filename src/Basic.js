import React, { useState, useEffect } from "react";
import "./App.css";

const UserTable = (props) => (
    <table className="tableStyle">
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button
                                onClick={() => {
                                    props.editRow(user);
                                }}
                            >
                                Edit
                            </button>
                            <button onClick={() => props.deleteUser(user.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
        </tbody>
    </table>
);

const AddUserForm = (props) => {
    const initialFormState = { id: null, name: "", username: "" };
    const [user, setUser] = useState(initialFormState);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!user.name || !user.username) return;
                props.addUser(user);
                setUser(initialFormState);
            }}
        >
            <label>Name</label>
            <input
                autoComplete="Off"
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
            />
            <label>Username</label>
            <input
                autoComplete="Off"
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
            />
            <button>Add new user</button>
        </form>
    );
};

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                props.updateUser(user.id, user);
            }}
        >
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
            />
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
            />
            <button>Update user</button>
            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button"
            >
                Cancel
            </button>
        </form>
    );
};

function App() {
    const usersData = [
        { id: 1, name: "Tania", username: "floppydiskette" },
        { id: 2, name: "Craig", username: "siliconeidolon" },
        { id: 3, name: "Ben", username: "benisphere" },
    ];

    const [users, setUsers] = useState(usersData);

    const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user]);
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const [editing, setEditing] = useState(false);
    const initialFormState = { id: null, name: "", username: "" };
    const [currentUser, setCurrentUser] = useState(initialFormState);
    const editRow = (user) => {
        setEditing(true);

        setCurrentUser({
            id: user.id,
            name: user.name,
            username: user.username,
        });
    };
    const updateUser = (id, updatedUser) => {
        setEditing(false);
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    };
    return (
        <div className="App">
            <h1>React CRUD!</h1>
            <div>
                <div>
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUserForm
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                        <div>
                            <h2>Add user</h2>
                            <AddUserForm addUser={addUser} />
                        </div>
                    )}
                </div>

                <div>
                    <h2>View users</h2>
                    <UserTable
                        users={users}
                        deleteUser={deleteUser}
                        editRow={editRow}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [user, setUser] = useState([{ name: "a", age: 18, id: 0 }]);
    const addUser = () => {
        let newU = { name: "b", age: 20, id: user.length + 1 };
        setUser([...user, newU]);
    };
    const delUser = (id) => {
        setUser(user.filter((u) => u.id !== id));
    };
    useEffect(() => {
        // console.log(user);
    }, [user]);
    return (
        <div className="App">
            {/* <h1>Simplest create/delect</h1> */}
            {/* <button onClick={addUser}>add</button>
            {user.map((r) => (
                <div key={r.id}>
                    <p>{r.name}</p>
                    <button
                        onClick={() => {
                            delUser(r.id);
                        }}
                    >
                        del
                    </button>
                </div>
            ))} */}
            <Basic />
        </div>
    );
}
// const changePat = (field) => (e) => {
//     let val = _.cloneDeep(patInfor);
//     val = { ...val, [field]: e.target.value };
//     setPatInfor(val);
// }
const Basic = () => {
    const initU = { name: "0", id: 0, age: null };
    const [newUser, setNewUser] = useState({ name: "", id: 0, age: null });
    const [currentU, setCurrentU] = useState([initU]);
    const handleChangeUser = (e) => {
        const { value } = e.target;
        let newU = { name: value, age: 20, id: currentU.length + 1 };
        setNewUser(newU);
    };
    const addU = (newU) => {
        setCurrentU([...currentU, newU]);
    };
    useEffect(() => {
        console.log(currentU);
        // console.log(newUser);
    }, [currentU, newUser]);
    const delectU = (id) => {
        setCurrentU(currentU.filter((u) => u.id !== id));
    };

    const [isEdit, setIsEdit] = useState(false);
    const editU = (id) => {
        setIsEdit(true);
        setSelectedU(currentU.find((user) => user.id === id));
        console.log(id);
    };
    const [selectedU, setSelectedU] = useState({});
    const updateU = () => {
        let changeU = currentU.map((c) => {
            if (c.id === selectedU.id) {
                return selectedU;
            } else {
                return c;
            }
        });
        console.log(changeU);
        setCurrentU(changeU);
        setIsEdit(false);
    };
    const onChange = (e) => {
        setSelectedU({ ...selectedU, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <h1>Basic create/delect</h1>

            {isEdit ? (
                <>
                    <input
                        type="text"
                        name="name"
                        value={selectedU.name}
                        onChange={onChange}
                        placeholder="Enter name"
                    />
                    <button onClick={updateU}>OK</button>
                </>
            ) : (
                <>
                    <input value={newUser.name} onChange={handleChangeUser} />
                    <button
                        onClick={() => {
                            addU(newUser);
                        }}
                    >
                        add
                    </button>
                </>
            )}
            <br />
            <br />
            {currentU.map((r) => (
                <div key={r.id}>
                    {r.name}
                    <button
                        onClick={() => {
                            editU(r.id);
                        }}
                    >
                        edit
                    </button>
                    <button
                        onClick={() => {
                            delectU(r.id);
                        }}
                    >
                        del
                    </button>
                </div>
            ))}
        </div>
    );
};

export default App;
