import React from "react"
import ReactDOM from "react-dom/client"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


// Routes
import App from "./routes/App.jsx"
import AdminXKT from "./routes/admin-routes/AdminXKT.jsx"
import BlogUpload from "./routes/admin-routes/BlogUpload.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/admin-xkt",
    element: <AdminXKT />,
    children: [
      {
        path: "/admin-xkt/blog-upload",
        element: <BlogUpload />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
