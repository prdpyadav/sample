import React from "react";
import { BsCalculatorFill, BsChevronDown, BsPen } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdOutlineTextFields } from "react-icons/md";
import { TfiPencilAlt, TfiText } from "react-icons/tfi";
import { RxText } from "react-icons/rx";

const Options = () => {
    return (
        <div className="flex border">
            <div className="p-2 border  bg-gray-100 flex basis-1/12 justify-center items-center">
                <FaRegBookmark />
            </div>
            <div className="p-2 border bg-gray-100  font-bold  flex basis-1/12 justify-center items-center">
                <FcAbout />
            </div>
            <div className="p-2 border font-extrabold bg-gray-100 hidden md:flex basis-1/12 justify-center items-center">
                <TfiPencilAlt />
            </div>
            <div className="p-2 border bg-gray-100  font-bold  flex basis-1/12 justify-center items-center">
                <BsCalculatorFill />
            </div>
            <div className="p-2 border bg-gray-100  font-bold  flex basis-1/12 justify-center items-center">
                <BsPen />
            </div>
            <div className=" bg-gray-100 hidden md:flex basis-1/6 border"> </div>
            <div className="border bg-gray-100  font-bold flex basis-1/2 justify-center items-center">
                <p className=" flex md:hidden">
                    {" "}
                    EN{" "}
                    <span className="mt-1 ml-1">
                        {" "}
                        <BsChevronDown />{" "}
                    </span>
                </p>
                <p className="subpixel-antialiased hidden md:block">
                    Language: English <span className="font-light">Francais</span>
                </p>
            </div>
            <div className=" border bg-gray-100  font-bold flex basis-1/4 justify-center items-center">
                <MdOutlineTextFields className="md:hidden" />
                <p className=" hidden md:flex">
                    Font Size:{" "}
                    <span className="mt-1 ml-1">
                        <RxText />
                    </span>
                </p>
            </div>
            <div className="p-2 border bg-gray-100  font-bold hidden md:flex justify-center items-center">
                <TfiText />
            </div>
        </div>
    );
};

export default Options;
