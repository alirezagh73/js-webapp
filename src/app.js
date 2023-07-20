import Drawer from "./components/drawer/drawer"
import Home from "./pages/home/home"
import El from "./utils/El"
import AuthForm from "./components/authForm/authForm.js";
import {Routes} from "./routes/routes.js";

function App() {
    return (
        El({
            element: "main",
            className: "w-screen min-h-screen",
            child: [
                El({
                    element : "div",
                    id : "routes",
                    child : [Routes()]
                })
                , Drawer({
                    child: El({
                        element: "div",
                        child: [AuthForm()]
                    })
                })]
        })
    )
}

export default App
