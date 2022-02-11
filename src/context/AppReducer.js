const AppReducer = (state, action) => {
    switch (action.type) {
        case "REMOVE_USER":
            return {
                users: state.users.filter((user) => {
                    return user.id !== action.payload;
                }),
            };
        case "ADD_USER":
            return {
                users: [action.payload, ...state.users],
            };
        case "EDIT_USER":
            // 選定的 user
            const updateUser = action.payload;
            // 更新後的所有 user
            const updateUsers = state.users.map((user) => {
                if (user.id === updateUser.id) {
                    return updateUser;
                }
                return user;
            });
            return {
                users: updateUsers,
            };
        default:
            return state;
    }
};

export default AppReducer;
