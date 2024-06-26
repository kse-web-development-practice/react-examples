import React from 'react'
import ReactDOM from 'react-dom/client'
import { Lecture7 } from './demo-lecture-7'
import { Lecture8 } from './demo-lecture-8'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <div>
          <h2>Demo</h2>
          <br />
          <Link to={'/7'}>To Lecture 7</Link> | <Link to={'/8'}>To Lecture 8</Link>
        </div>
      )
    },
    {
      path: '/7',
      element: <Lecture7 />
    },
    {
      path: '/8',
      element: <Lecture8 />
    }
  ],
  {
    // eslint-disable-next-line no-undef
    basename: process.env.BASE_URL ? process.env.BASE_URL : '/'
  }
)

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
