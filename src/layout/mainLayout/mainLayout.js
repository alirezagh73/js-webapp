import Navbar from "../../components/navbar/navbar";
import El from "../../utils/El";

export default function MainLayout(child) {
  return (
   El({
    element : "main",
    className : "flex flex-col min-h-screen relative overflow-x-hidden",
    child : [
        Navbar(),
        El({
          element : "div",
          className : "flex-1 bg-blue-200",
          child : child
        }),
        El({
            element : "footer",
            child : "this is footer"
        })
       ]
   })
  )
}
