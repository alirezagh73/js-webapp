import El from "../../utils/El.js";
import {handleSubmitForm} from "./handleSubmitForm.js";
export const Form = ({ child, handleSubmit, handleErrors, ...rest }) => {
    return El({
        element: 'form',
        child,
        onsubmit: (e) => handleSubmitForm({ e, handleSubmit, handleErrors }),
        ...rest,
    })
}
