import El from "../../utils/El.js";
import {Form} from "../form/form.js";
import Button from "../button/button.js";
import {TextField} from "../textField/textField.js";
import {renderUserButtons} from "../navbar/navbar.js";
import Cookies from "js-cookie"


const AuthForm = () => {

    const renderForms = (currentForm) => {
        if (currentForm === "register") {
            return Form({
                id: 'register',
                className: 'w-full px-3',
                child: [
                    TextField({
                        label: 'Enter Your Email',
                        placeholder: 'Example: test@gmail.com',
                        name: 'email',
                        restAttrs: {
                            'data-valid': false,
                        },
                    }),
                    TextField({
                        label: 'Enter Your Name',
                        placeholder: 'Example: John Doe',
                        name: 'fullname',
                        restAttrs: {
                            'data-valid': false,
                        },
                    }),
                    TextField({
                        label: 'Enter Your Passoword',
                        placeholder: 'Pick a Strong Password!',
                        name: 'password',
                        restAttrs: {
                            'data-valid': false,
                        },
                    }),
                    Button({
                        classes: 'w-full mx-1',
                        child: 'Submit',
                    }),
                ],
                handleSubmit(data) {
                    const locatedUsers = JSON.parse(localStorage.getItem('users')) || []
                    const isExists = locatedUsers.find((u) => u.email === data.email)
                    if (isExists) return alert('User Already Exists!')
                    const newUsers = [...locatedUsers, data]
                    localStorage.setItem(`users`, JSON.stringify(newUsers))
                    const drawer = document.getElementById("drawer")
                    drawer.classList.add("translate-x-full")
                    drawer.classList.remove("translate-x-0")
                },
                handleErrors(errors) {
                    console.log(errors, 'here')
                },
            })
        } else {
            return Form({
                className: 'w-full px-3',
                id: 'login',
                child: [
                    TextField({
                        label: 'Enter Your Email',
                        placeholder: 'Example: test@gmail.com',
                        name: 'email',
                        restAttrs: {
                            'data-valid': false,
                        },
                    }),
                    TextField({
                        label: 'Enter Your Passoword',
                        placeholder: 'Pick a Strong Password!',
                        name: 'password',
                        restAttrs: {
                            'data-valid': false,
                        },
                    }),
                    Button({
                        classes: 'w-full mx-1',
                        child: 'Submit',
                    }),
                ],
                handleSubmit(data) {
                    const users = JSON.parse(localStorage.getItem('users'))
                    const isUser = users.find((user) => user.email === data.email)
                    if (!isUser) return alert('404 || User not found')
                    const verifyPassword = isUser.password === data.password
                    if (!verifyPassword)
                        return alert('404 || Username Or Password is Invalid!')
                    const token = 'JWT_fwqyt#34#$%3453454575bjhgfjWQE'
                    Cookies.set('token', token, {
                        expires: 7,
                    })
                    const drawer = document.getElementById("drawer")
                    drawer.classList.add("translate-x-full")
                    drawer.classList.remove("translate-x-0")
                    const navbarActions = document.querySelector('#nav-actions')
                    navbarActions.innerHTML = ''
                    navbarActions.append(renderUserButtons())
                },
                handleErrors(errors) {
                    console.log(errors, 'here')
                },
            })
        }

    }



    return El({
        element: 'div',
        id: 'auth',
        className: 'flex flex-col items-center justify-center',
        child: [
            El({
                element: 'div',
                className: 'flex w-full items-center ',
                child: [
                    El({
                        element: 'div',
                        className: 'flex-1 py-4 bg-blue-300 text-center',
                        child: 'Register',
                        onclick() {
                            const authForm = document.getElementById('auth-form')
                            authForm.innerHTML = ''
                            authForm.appendChild(renderForms('register'))
                            this.classList.add('bg-blue-300')
                            this.nextElementSibling.classList.remove('bg-blue-300')
                        },
                    }),
                    El({
                        element: 'div',
                        className: 'flex-1 py-4 text-center ',
                        child: 'Login',
                        onclick() {
                            console.log("sss")
                            const authForm = document.getElementById('auth-form')
                            authForm.innerHTML = ''
                            authForm.appendChild(renderForms('login'))
                            this.classList.add('bg-blue-300')
                            this.previousElementSibling.classList.remove('bg-blue-300')
                        },
                    }),
                ],
            }),
            El({
                className: 'w-full',
                element: 'div',
                id: 'auth-form',
                child: renderForms('register'),
            }),
        ],
    })
};

export default AuthForm;