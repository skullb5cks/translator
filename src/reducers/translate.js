const initialState = {
    history: [
        {}
    ]
};

const translate = (state = initialState, action) => {
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

export default translate;