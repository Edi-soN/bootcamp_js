import {connect} from 'react-redux';
import Comment from './Comment';
import {removeComment, thumbUpComment, thumbDownComment} from './actions'

const mapDispatchToProps = dispatch => ({
    removeComment: (id) => dispatch(removeComment(id)),
    thumbUpComment: (id) => dispatch(thumbUpComment(id)),
    thumbDownComment: (id) => dispatch(thumbDownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);