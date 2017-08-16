import uuid from 'uuid';

const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

function thumbUpComment(id, voteUp) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        vote: voteUp
    }
}

function thumbDownComment(id, voteDown) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        vote: voteDown
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (id, text) => dispatch(editComment(id, text));
const boundThumbUpComment = (id, text) => dispatch(thumbUpComment(id, voteUp));
const boundThumbDownComment = (id, text) => dispatch(thumbDownComment(id, voteDown));

// nie wiem jak ma wyglądać system oceniania ale w przypadku kiedy bedzie to 
// wynik liczbowy, a kciuk w góre/dół jest równoznaczny z +1/-1 to można 
// uwspólnić kreatory akcji dla oddawania głosu:

function voteComment(id, vote) {
    return {
        type: vote > 0 ? THUMB_UP_COMMENT : THUMB_DOWN_COMMENT,
        id,
        vote
    }
}