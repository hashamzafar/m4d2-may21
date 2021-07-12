import { Button, ListGroup } from 'react-bootstrap'
import AddComment from './AddComment'

const deleteComment = async (asin) => {
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlMzVhM2NlYWY0ODAwMTVjOTE4NjMiLCJpYXQiOjE2MjYxMDQ2MTAsImV4cCI6MTYyNzMxNDIxMH0.E8E1HLyIVw_3Kk7cbYeAdvOdhonPKfIrGh_qLvfy8Zg"            }
        })
        if (response.ok) {
            alert('comment deleted!')
        } else {
            alert('comment NOT deleted!')
        }
    } catch (error) {
        alert('comment NOT deleted!')
    }
}

const SingleComment = ({ comment }) => (
    <ListGroup.Item>
        {comment.comment}
        <AddComment />
        <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>D</Button>
    </ListGroup.Item>
)

export default SingleComment