import { createBrowserRouter, } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop"
import About from "../components/About"
import SingleBook from "../components/SingleBook";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../components/DashboardLayout";
import UploadBook from "../components/UploadBook";
import ManageBook from "../components/ManageBook";
import EditBooks from "../components/EditBooks";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import PrivateRoute from "../privateroutes/PrivateRoute";
import CartPage from "../pages/CartPage";
import AdminRoute from "../privateroutes/AdminRoute";
import AdminLogin from "../pages/AdminLogin";
import serverURL from "../serverURL";



 const router = createBrowserRouter([
      {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/',
                element:<Home/> ,    
            },
            {
                path: '/shop',
                element:<PrivateRoute><Shop/></PrivateRoute>,    
            },
            {
                path: '/about',
                element:<About/> ,    
            },
            {
                path: '/book/:id',
                element:<SingleBook/>,
                loader:({params}) => fetch(`${serverURL}/book/${params.id}`)   
            },
            {
              path: '/cart',
              element:<CartPage/> ,    
            }
        ]
      },
      {
        path:'/admin',
        element:<AdminLogin/>
      },
      {
        path: '/admin/dashboard',
        element:<AdminRoute>
                   <PrivateRoute>
                      <Dashboard/>
                   </PrivateRoute>
                </AdminRoute>,
        children:[
            {
                path: '/admin/dashboard',
                element:<AdminRoute>
                          <PrivateRoute>
                            <DashboardLayout/>
                          </PrivateRoute>
                        </AdminRoute>
            },
            {
                path: '/admin/dashboard/upload',
                element:<AdminRoute><UploadBook/></AdminRoute>
            },
            {
                path: '/admin/dashboard/manage',
                element:<AdminRoute><ManageBook/></AdminRoute>
            },
            {
                path: '/admin/dashboard/edit-books/:id',
                element:<AdminRoute><EditBooks/></AdminRoute>,
                loader:({params}) => fetch(`${serverURL}/book/${params.id}`) 
            },
        ]
      },
      {
        path: '/sign-up',
        element:<SignUp/>
      },
      {
        path:'/login',
        element:<Login/>
      }
 ])

 export default router