import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import AllBeers from "./pages/AllBeers"
import RandomBeer from "./pages/RandomBeer"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/all",
        element: <AllBeers/>
      },
      {
        path: "/:id",
        element: <RandomBeer/>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
