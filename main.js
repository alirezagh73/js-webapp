import App from "./src/app"
import MainLayout from "./src/layout/mainLayout/mainLayout"
import "./src/styles/index.css"

const root = document.getElementById("app")

root.append(MainLayout(App()))
