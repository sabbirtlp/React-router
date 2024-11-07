import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Services from './component/Services/Services.jsx'
import Contact from './component/Contact/Contact.jsx'
import Users from './component/Users/Users.jsx'
import Error from './component/Error/Error.jsx'
import UserDetails from './component/UserDetails/UserDetails.jsx'
import Posts from './component/Posts/Posts.jsx'
import SinglePost from './component/SinglePost/SinglePost.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement:<Error></Error>,
    children: [
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path:'/users',
        loader:()=>
          fetch('https://jsonplaceholder.typicode.com/users')
        ,
        element:<Users/>,
      },
      {
        path:'/user/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/posts/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<SinglePost></SinglePost>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
