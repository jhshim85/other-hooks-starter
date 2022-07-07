import HighlightPost from './HighlightPost';
import PostHistory from './PostHistory';

const FullFeed = () => {
  return (
    <div className="feed">
      <HighlightPost />
      <PostHistory />
    </div>
  )
}

export default FullFeed;