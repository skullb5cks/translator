const userInfo = (state = [], action) => {
    const {
        type, name, email
    } = action;

    switch (type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    name,
                    email
                }
            ];
        default:
            return state;
    }
}

export default userInfo;