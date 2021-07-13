import { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap'



const AddComment = (props) => {
    const [comment, setComment] = useState('')
    const [rate, setRate] = useState('1')
    // const [elementId, setElementId] = useState(props.asin)   elementId: 

    // state = {
    //     comment: {
    //       
    //     }
    // }


    const myFetch = async (e) => {

        // if(e) e.preventDefault() 
        e?.preventDefault()

        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(comment),
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlMzVhM2NlYWY0ODAwMTVjOTE4NjMiLCJpYXQiOjE2MjYxMDQ2MTAsImV4cCI6MTYyNzMxNDIxMH0.E8E1HLyIVw_3Kk7cbYeAdvOdhonPKfIrGh_qLvfy8Zg"
                }
            })
            if (response.ok) {
                // the comment has been sent succesfully!!
                alert('Comment was sent!')
            } else {
                console.log('error')
                alert('something went wrong')
            }
        } catch (error) {
            console.log('error')
        }
    }


    return (
        <div>
            <Form onSubmit={myFetch}>
                <Form.Group>
                    <Form.Label>Comment text</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add comment here"
                        value={comment}
                        onChange={e => setComment({
                            comment: {
                                // comment,
                                comment: e.target.value
                            }
                        })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control as="select" value={rate}
                        onChange={e => setComment({
                            comment: {
                                // rate,
                                rate: e.target.value
                            }
                        })}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Submit
                </Button>
                <Button variant="danger" type="submit">
                    Delete
                </Button>
            </Form>
        </div>
    )


}

export default AddComment