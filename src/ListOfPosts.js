import SinglePost from './SinglePost';

const ListOfPosts = () => {

  const arrayOfPosts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <ul>

      {
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