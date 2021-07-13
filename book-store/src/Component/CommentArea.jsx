import { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import WarningSign from './WarningSign'

const CommentArea = () => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)


    // state = {
    //     comments: [], // comments will go here
    //     isLoading: true,
    //     isError: false
    // }
    useEffect(() => {
        const myFetch = async (props) => {
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlMzVhM2NlYWY0ODAwMTVjOTE4NjMiLCJpYXQiOjE2MjYxMDQ2MTAsImV4cCI6MTYyNzMxNDIxMH0.E8E1HLyIVw_3Kk7cbYeAdvOdhonPKfIrGh_qLvfy8Zg"
                    }
                })
                console.log(response)
                if (response.ok) {
                    let comments = await response.json()
                    setComments({ comments: comments, isLoading: false, isError: false })
                } else {
                    console.log('error')
                    setIsLoading({ isLoading: false, isError: true })
                }
            } catch (error) {
                console.log(error)
                setIsError({ isLoading: false, isError: true })
            }
        }
        myFetch()
    })

    return (
        <div>
            {isLoading && <Loading />}
            {isError && <WarningSign />}
            <AddComment />
            <CommentList commentsToShow={comments} />
        </div>
    )

}

export default CommentArea

