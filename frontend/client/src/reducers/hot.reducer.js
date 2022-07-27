import { GET_HOT_POSTS } from "../actions/post.actions";

const initialState = {};

export default function hotReducer(state = initialState, action){
    switch(action.type){
        case GET_HOT_POSTS :
            return action.payload;
        default : return state
    }
}