export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQCScjssDshAezWFxHGY1_LrfHdeOuMWBTQ6Mo28M_EjI88gZ-wagysBq5vF-la2oRGSi1GxvFkHnpjfuyUva_mfT4ppNGZGAHDqUerpIIfA_CkMxCpnb2HF2gXcTwXPF4KkSLx8HXB-IAROnjPAl4rXWFvKrYXHTU6aV3MAbnq533ql73sUMme6",
}

const reducer = (state, action) => {
console.log(action);

switch(action.type) {
    case "SET_USER":
    return {
        ...state,
        user: action.user
    }

    case "SET_TOKEN":
        return {
            ...state,
            token: action.token,
        }

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }

    default: 
        return state;
}
}

export default reducer;