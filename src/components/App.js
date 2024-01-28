import video from "../data/video.js";
import LikeButtons from "./LikeButtons.js"
import Comments from "./Comments.js"


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>React Today and Tomorrow and 90% Cleaner React With Hooks</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <LikeButtons video={video}/>
      <Comments video={video} />
    </div>
  );
}

export default App;
