import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { routes } from './data'


const router = createBrowserRouter(routes)

const View = ()=>{
    return <RouterProvider router={router}/>
}

export default View;