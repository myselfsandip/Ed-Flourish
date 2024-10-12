import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { topicsData } from "./data";  // Importing dummy data

function MainContentSection() {
    const [isOpen, setIsOpen] = useState({}); // Dynamic open state

    const toggleDropdown = (section) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    const checkInputHandler = (event, problem) => {
        console.log(event.target);
    }

    return (
        <div className="h-full bg-base-100 rounded-lg shadow-inner p-8">
            <h1 className="text-3xl font-bold mb-2">Semester 1</h1>
            <p className="mb-4">
                Blind 75 leetcode is a list of 75 most frequent asked leetcode questions which had helped many developers clear interviews of Google, Amazon, Microsoft, Facebook etc.
            </p>

            {/* Progress Box */}
                <div className="w-72 my-8 p-3 grid grid-rows-2 grid-flow-col gap-4 bg-emerald-800  shadow-xl rounded-2xl border-2 border-zinc-400">
                    <div className="flex justify-between">
                        <p>Your Progress: 1/75</p>
                        <p> 1% complete</p>
                    </div>
                    <progress className="progress progress-primary  w-56" value="70" max="100" />
                </div>

            {/* Looping through topicsData to dynamically render each section */}
            {topicsData.map((topic) => (
                <div className="my-4" key={topic.id}>
                    <button
                        onClick={() => toggleDropdown(topic.id)}
                        className="w-full text-left btn flex justify-between"
                    >
                        {topic.day}
                        <span>{isOpen[topic.id] ? <IoIosArrowDropup className="text-2xl" /> : <IoIosArrowDropdown className="text-2xl" />}</span>
                    </button>
                    {isOpen[topic.id] && (
                        <div className="p-4 bg-base-200 rounded-lg mt-2">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Problem</th>
                                        <th>Article</th>
                                        <th>Video</th>
                                        <th>Practice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topic.problems.map((problem, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="form-control">
                                                    <label className="label cursor-pointer">
                                                        {/* <input type="checkbox" onClick={checkInputHandler}  checked={problem.status} defaultChecked className="checkbox checkbox-primary" /> */}
                                                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />
                                                    </label>
                                                </div>
                                            </td>
                                            <td>{problem.problem}</td>
                                            <td><a href={problem.article}>Article</a></td>
                                            <td><a href={problem.video}>YouTube</a></td>
                                            <td>{problem.difficulty}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default MainContentSection;
