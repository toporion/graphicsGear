import {createBrowserRouter} from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:"register",
          element:<Register/>
        }
      ]
    },
  ]);

  export default router;