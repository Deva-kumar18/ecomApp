import {createBrowserRouter} from 'react-router-dom'
import LayoutPage from './Pages/LayoutPage/LayoutPage'
import CartPage from './Pages/cartPage/CartPage'
import Content from './Pages/Content/Products'
import Products from './Pages/Content/Products'


export const router = createBrowserRouter([{
    path:"/",
    element:<LayoutPage/>,
    children:[{
        path:"cartpage",
        element:<CartPage/>
    },
{
    path:"/products",
    element:<Products/>
}]
}])