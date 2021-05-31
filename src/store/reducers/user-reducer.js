export const SET_REPOS = 'SET_REPOS';

const initialState = {
    repos: ['none']
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                repos: action.payload
            }
        default:
            return state
    }
}

export const setRepos = (repos) => {
    return {
        type: SET_REPOS,
        payload: repos
    }
}

export default userReducer;