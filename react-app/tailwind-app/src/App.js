import { useState } from "react";

function App() {
  const [check, SetCheck] = useState(false);
  const handleClick = () => {
    SetCheck(!check);
  };
  return (
    <div>
      <nav className="bg-blue-200 p-4  sticky top-0">
        <div onClick={handleClick}>
          <div className="border border-solid h-0.5 w-8 md:hidden m-2 border-black bg-black"></div>
          <div className="border border-solid h-0.5 w-8 md:hidden m-2 border-black bg-black"></div>
          <div className="border border-solid h-0.5 w-8 md:hidden m-2 border-black bg-black"></div>
        </div>
        <ul className=" hidden md:flex space-x-2 justify-end  duration-100 cursor-pointer ">
          <li className=" hover:underline hover:text-purple-700 hover:underline-offset-2">
            Home
          </li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </nav>
      <ul
        className={`bg-pink-400 md:hidden  ease-in animate-2s cubic-bezier(0.4, 0, 0.6, 1)  p-2 ${
          check ? "block " : "hidden"
        } sticky top-16 transition  duration-300`}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="rounded-2xl bg-blue-400 m-3 p-5 text-2xl hover:bg-white border-2 border-black border-solid hover:border-dashed">
        Hover me
      </button>
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>{" "}
      <div className="flex justify-between">
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-1</h1>
        </div>
        <div className="border-solid m-2 p-3 border-2">
          <h1>Box-2</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
