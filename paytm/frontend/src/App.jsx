import{createBrowserRouter, RouterProvider} from "react-router-dom"
import Applayout from "./layout/Applayout"
import Landing from "./pages/Landing"
import Auth from "./pages/Auth"
import Dashboard from "./pages/Dasboard"
import Transfer from "./pages/Transfer"
import { ThemeProvider } from "./components/ui/theme-provider"
import { RecoilRoot } from "recoil"

function App() {
    const routes=createBrowserRouter([{
        element:<Applayout></Applayout>,
        children:[
            {
                path:"/",
                element:<Landing></Landing>
            },{
                path:"/auth",
                element:<Auth></Auth>
            },{
                path:"/das",
                element:<Dashboard></Dashboard>
            },{
                path:"/transfer",
                element:<Transfer></Transfer>
            }
        ]
    }])
 return(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RecoilRoot>  <RouterProvider router={routes}></RouterProvider></RecoilRoot>

  </ThemeProvider>
 )
}

export default App
