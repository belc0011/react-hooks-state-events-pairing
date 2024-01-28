import React, {useState} from "react"

function Comments({video}) {
    console.log(video.comments.length)
    const [showComments, setShowComments] = useState(video.comments)

    function handleClick(event) {
        if (showComments.length>0) setShowComments([])
        else setShowComments(video.comments)
    }
    return(
        <div>
            <button onClick={handleClick}>{(showComments.length>0)?"Hide Comments":"Show Comments"}</button>
            <h2>{video.comments.length} Comments</h2>
                {showComments.map((comment) => {
                    return (
                    <div key={comment.id}>
                        <h3>{comment.user}</h3>
                        <p>{comment.comment}</p>
                    </div>
                    )
                })}
        </div>
    )
}

export default Comments