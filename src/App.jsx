import { useState } from 'react';
import './App.css';
import Home from './components/Home';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First Post',
      content: 'This is the content of First Post',
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'This is the content of Second Post',
    },
  ]);

  return (
    <div className='App'>
      <header>
        <h1>React Blog App</h1>
      </header>
      <main>
        <Home posts={posts} />
      </main>
    </div>
  );
};

export default App;
