import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state];
        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return state.comments.map(comment => { if(comment.id === action.id) comment.text = action.text });
                // Solution 2 - in case when no index is found, -1 is returned and array[-1] equals undefined
                // state.comments[state.comments.findIndex(comment => comment.id === action.id)].text = action.text
        case THUMB_UP_COMMENT:
            return state.comments.map(comment => { if(comment.id === action.id) ++comment.votes }); // Assuming that votes is a number and thumb up/down is +1/-1
        case THUMB_DOWN_COMMENT:
            return state.comments.map(comment => { if(comment.id === action.id) --comment.votes });
        default:
            return state;
    }
}