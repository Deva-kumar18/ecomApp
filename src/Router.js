import {createBrowserRouter} from 'react-router-dom'
import LayoutPage from './Pages/LayoutPage/LayoutPage'


export const router = createBrowserRouter([{
    path:"/",
    element:<LayoutPage/>,
    children:[{
        
    }]
}])