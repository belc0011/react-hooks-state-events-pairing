import React, {useState} from "react"

function LikeButtons({video}) {
    const [numUpvotes, setNumUpvotes] = useState(video.upvotes)
    const [numDownvotes, setNumDownvotes] = useState(video.downvotes)
    function handleUpvotes(event) {
        setNumUpvotes(numUpvotes + 1)
    }
    function handleDownvotes(event) {
        setNumDownvotes(numDownvotes - 1)
    }
    return (
        <div>
            <button onClick={handleUpvotes}>{numUpvotes} 👍</button>
            <button onClick={handleDownvotes}>{numDownvotes} 👎</button>
        </div>
    )
}

export default LikeButtons