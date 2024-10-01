import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import CarDetails from "./pages/CarDetails"
import CarList from "./pages/CarList"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <CarList/>
      },
      {
        path: "/:id",
        element: <CarDetails/>
      },
    ]
  }
])


function App() {

  return <RouterProvider router={router} />
}

export default App
