const Home = ({ posts }) => {
  return (
    <div>
      <h2>Welcome to the Blog</h2>
      <ul>
        {posts.map((post) => (
          <li>
            <strong>{post.title}</strong>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
