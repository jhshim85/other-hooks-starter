import ListOfPosts from './ListOfPosts';

const PostHistory = () => {
  return (
    <section className="history">
      <h3>All the Other Dumb Stuff You've Said</h3>

      <nav className="historyNav">
        <p>Select order to view posts:</p>
        <ul>
          <li>Chronologically</li>
          <li>Emotionally</li>
          <li>Nonsensically</li>
        </ul>
      </nav>

      <ListOfPosts />
    </section>
  )
}

export default PostHistory;