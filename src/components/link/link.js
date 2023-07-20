import El from "../../utils/El.js";
import {Routes} from "../../routes/routes.js";
export const Link = ({ to, child }) => {
    return El({
        element: 'button',
        onclick() {
            history.pushState(null, null, to)
            Routes()
        },
        child,
    })
}
