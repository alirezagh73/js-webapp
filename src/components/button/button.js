import El from "../../utils/El"

const variants = {
    contained : "bg-blue-600 text-white",
    outlined : "border border-blue-700",
    link : "bg-transparent"
}

export default function Button({element = "button" ,child , variant="contained" , className , ...rest }) {
  return (
    El({
        element : element,
        className : `${variants[variant]} rounded py-3 px-4 ${className}`,
        child ,
        ...rest
    })
  )
}
