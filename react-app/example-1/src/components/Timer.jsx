import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { BsStopCircle } from "react-icons/bs";

const Timer = () => {
    return (
        <div className="flex text-center justify-center items-center ">
            <div className="font-bold justify-center p-2 border-gray-500 border-t-0 bg-gray-300 flex border w-14 lg:border-b-0">
                <BiTimeFive />
            </div>
            <div className="font-bold flex justify-center  border flex-1 p-1 border-gray-500 border-t-0 bg-gray-100 lg:border-b-0">
                <span className=" hidden font-thin md:block mx-2">Time Remaining: </span>
                {"  "}
                <p className="mr-2">
                    00:29:37
                </p>
            </div>
            <div className="font-bold  justify-center cursor-pointer p-1.5  md:p-1 flex border-t-0 bg-gray-100  border border-gray-500 w-14 md:w-44 lg:border-b-0">
                <div className="mt-1 ">

                    <AiOutlinePauseCircle />
                </div>
                <p className="font-light hidden md:block mx-2">PAUSE EXAM</p>
            </div>
            <div className="font-bold justify-center flex p-1.5 md:p-1 cursor-pointer border-t-0 border-gray-500 bg-gray-100 border  w-14 md:w-44 lg:border-b-0">
                <div className="mt-1">

                    <BsStopCircle />
                </div>
                <p className="font-light hidden md:block mx-2">SUBMIT EXAM</p>
            </div>
        </div>
    );
};

export default Timer;
