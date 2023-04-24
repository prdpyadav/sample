import List from "../components/List";
import Options from "../components/Options";
import Question from "../components/Question";
import Timer from "../components/Timer";
import Tittle from "../components/Tittle";

const Example = () => {
    return (
        <div>
            <Tittle />
            <div className="lg:flex ">
                <div className="lg:order-3 ">
                    <Timer />
                </div>
                <div className="hidden lg:block lg:order-2 lg:grow bg-gray-100  lg:border-l lg:border-l-gray-500 lg:p-1 lg:h-8"></div>
                <Question />
            </div>
            <List />
            <div className="">
                <Options />
            </div>
        </div>
    );
};

export default Example;
