import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';
import UserDetail from './Components/UserDetail/UserDetail.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetail from './Components/PostDetail/PostDetail.jsx';

const fetchUsers2 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path:"/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path:"about", Component: About},
      {path:"projects", Component: Projects},
      {path:"blogs", Component: Blogs},
      {path:"contact", Component: Contact},
      {
        path:"users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback={<h2>Loading....</h2>}>
          <Users2 fetchUsers2={fetchUsers2}></Users2>
        </Suspense>
      },
      {
        path:'users/:userId',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetail
      },
      {
        path:'posts',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path:'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetail
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
