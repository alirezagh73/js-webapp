import Home from "../pages/home/home.js";
import ShopPage from "../pages/shop/shop.js";
import El from "../utils/El.js";
import NotFound from "../pages/notFound/notFound.js";
import Dashboard from "../pages/dashboard/dashboard.js";
import Cookies from "js-cookie";

const isPrivate = (routesEl, child) =>
    Cookies.get('token')
        ? routesEl.appendChild(child())
        : routesEl.appendChild(NotFound())


export const Routes = () => {
    const routesEl = document.getElementById('routes') || El({element: 'div'})
    routesEl.innerHTML = ''
    console.log(routesEl)
    switch (location.pathname) {
        case '/':
            return routesEl.appendChild(Home())
        case '/shop':
            return routesEl.appendChild(ShopPage())
        case '/dash':
            return isPrivate(routesEl, Dashboard)
        default:
            return routesEl.appendChild(NotFound())
    }
}
