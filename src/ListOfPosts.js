import SinglePost from './SinglePost';

const ListOfPosts = () => {

  // Imagine this is an array of user posts that were retrieved from a database:
  const arrayOfPosts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <ul>

      {
        // Note that here we're not actually using the contents of the array, so the parameter in .map()'s callback is simply named `x`.
        // We use the second parameter, `i`, to get the index of the array item and pass that to the `key` prop to stop React's warning about lists:
        arrayOfPosts.map( (x, i) => {
          return (
            <li key={i}>
              <SinglePost />
            </li>
          )
        })
      }
    </ul>
  )
}

export default ListOfPosts;