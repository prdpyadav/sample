import { BsPerson } from "react-icons/bs";

const Tittle = () => {
  return (
    <div className="flex justify-between border">
            <div>
                <h1 className="m-2  ">
                    Exam: <span className="font-bold">This is the Name of Exam</span>
                </h1>
            </div>
            <div className="text-xl m-2 md:hidden">
                <BsPerson />
            </div>

            <div className="hidden md:block">
                <h1 className="m-2  ">
                    Logged in as: <span className="font-bold">Kim</span>
                </h1>
            </div>
        </div>
  )
}

export default Tittle