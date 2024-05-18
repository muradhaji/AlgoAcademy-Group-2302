import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Home from './Home';
import Posts from './Posts';
import Users from './Users';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostDetails from './PostDetails';
import UserDetails from './UserDetails';
import MyContext from './context/MyContext.js';
import LocalPosts from './LocalPosts.js';
import LocalPostsCreate from './LocalPostsCreate.js';

function App() {
  let [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  let [posts, setPosts] = useState([]);
  let [postsLoading, setPostsLoading] = useState(false);

  let [localUsers, setLocalUsers] = useState([]);
  let [localUsersLoading, setLocalUsersLoading] = useState([]);

  function toggleMenu() {
    setIsMenuCollapsed(!isMenuCollapsed);
  }

  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{
          posts,
          setPosts,
          postsLoading,
          setPostsLoading,
          collapsed: isMenuCollapsed,
          toggleFunc: toggleMenu,
          localUsers,
          setLocalUsers,
          localUsersLoading,
          setLocalUsersLoading,
        }}
      >
        <div className='App'>
          <Header></Header>
          <main className='container'>
            <Aside></Aside>
            <div className='routeHolder'>
              <Routes>
                <Route path='/' element={<Home x={isMenuCollapsed} />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/posts/:id' element={<PostDetails />} />
                <Route path='/users' element={<Users />} />
                <Route path='/users/:id' element={<UserDetails />} />
                <Route path='/localposts' element={<LocalPosts />} />
                <Route
                  path='/localposts/create'
                  element={<LocalPostsCreate />}
                />
                <Route path='*' element={<div>404, Page not found :(</div>} />
              </Routes>
            </div>
          </main>
          <Footer></Footer>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
