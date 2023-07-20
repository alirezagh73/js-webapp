import El from "../../utils/El";
import Button from "../button/button.js";

export default function Drawer({child}) {
    return (
        El({
            element: "div",
            child: [
                Button({
                    element: "button",
                    child: "close",
                    variant: "outlined",
                    onclick() {
                        const drawer = document.getElementById("drawer")
                        drawer.classList.add("translate-x-full")
                        drawer.classList.remove("translate-x-0")
                    }
                }),
                child
            ],
            id: "drawer",
            className: "fixed p-4 bottom-0 left-0 bg-red-200 translate-x-full w-full transition duration-500"
        })
    )
}
