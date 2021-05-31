import axios from "axios";
import {setRepos} from "./reducers/user-reducer";


export const getRepos = () => async (dispatch) => {
    const response = await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars`)
    dispatch(setRepos(response.data.items))
}