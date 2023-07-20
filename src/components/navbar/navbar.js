import El from "../../utils/El"
import Button from "../button/button"
import {Link} from "../link/link.js";
import Cookies from "js-cookie";

export const renderUserButtons = () => {
    return Cookies.get('token')
        ? El({
            element: 'div',
            className: 'flex gap-1',
            child: [
                Link({
                    to: '/dash',
                    child: Button({
                        child: 'Dashboard',
                        variant: 'outlined',
                    }),
                }),
                Button({
                    child: 'Logout',
                    variant: 'contained',
                    onclick() {
                        Cookies.remove('token')
                        const navbarActions = document.querySelector('#nav-actions')
                        navbarActions.innerHTML = ''
                        navbarActions.append(renderUserButtons())
                    },
                }),
            ],
        })
        : Button({
            element: 'button',
            child: 'Login / Register',
            variant: 'contained',
            onclick: () => {
                const drawer = document.getElementById("drawer")
                drawer.classList.remove("translate-x-full")
                drawer.classList.add("translate-x-0")
            },
        })
}


const Navbar = () => {
    return El({
        element: 'nav',
        child:
            El({
                element: 'div',
                className: 'flex py-4 items-center',
                child: [
                    El({
                        element: 'button',
                        href: '/',
                        className: 'px-2',
                        child: [
                            El({
                                element: 'img',
                                src: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg',
                                alt: 'Flowbite Logo',
                                className: "w-24 h-24 object-cover"
                            }),
                        ],
                    }),
                    El({
                        element: 'div',
                        className: 'flex-1',
                        child: El({
                            element: 'ul',
                            className: 'flex gap-3',
                            child: [
                                El({
                                    element: 'li',
                                    child: Link({to: '/', child: 'Home'}),
                                }),
                                El({
                                    element: 'li',
                                    child: Link({to: '/shop', child: 'Shop'}),
                                }),
                            ],
                        }),
                    }),
                    El({element: 'div', id: 'nav-actions', child: renderUserButtons()}),
                ],
            }),
    })
}
export default Navbar
