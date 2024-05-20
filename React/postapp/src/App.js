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
import MyContext from './context/MyContext';
import LocalPosts from './LocalPosts';
import LocalPostDetails from './LocalPostDetails';
import LocalPostsCreate from './LocalPostsCreate';
import LocalPostsEdit from './LocalPostsEdit';
import LocalUsers from './LocalUsers';
import LocalUsersDetails from './LocalUsersDetails';
import LocalUsersEdit from './LocalUsersEdit';
import LocalUsersCreate from './LocalUsersCreate';

function App() {
  let [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  let [posts, setPosts] = useState([]);
  let [postsLoading, setPostsLoading] = useState(false);

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
                <Route path='/localposts/:id' element={<LocalPostDetails />} />
                <Route
                  path='/localposts/create'
                  element={<LocalPostsCreate />}
                />
                <Route
                  path='/localposts/edit/:id'
                  element={<LocalPostsEdit />}
                />
                <Route path='/localusers' element={<LocalUsers />} />
                <Route path='/localusers/:id' element={<LocalUsersDetails />} />
                <Route
                  path='/localusers/create'
                  element={<LocalUsersCreate />}
                />
                <Route path='/localusers/edit/:id' element={<LocalUsersEdit />} />
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
