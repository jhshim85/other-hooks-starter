import SinglePost from './SinglePost';

const HighlightPost = () => {
  return (
    <section className="highlight">
      <h3>Your Most Up-Voted Post</h3>
      <SinglePost />
    </section>
  )
}

export default HighlightPost;