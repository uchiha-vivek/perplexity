import { useContext, useEffect, useRef } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export const Search = () => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const navigate = useNavigate();
    const { setShowModal } = useContext(AppContext);

    useEffect(() => {
        if (!inputRef.current) return;
        const input = inputRef.current;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter" && input.value.trim() !== "") {
                navigate(`/result?query=${input.value.trim()}`);
                setShowModal(false);
            }
        };

        input.addEventListener("keydown", handleKeyDown);
        return () => input.removeEventListener("keydown", handleKeyDown);
    }, [navigate, setShowModal]);

    return (
        <div className="w-full p-3 border rounded-md hover:border-teal-500 transition duration-300 border-gray-300">
            <div className="flex">
                <textarea
                    ref={inputRef}
                    placeholder="Ask anything..."
                    className="w-full h-10 border-none outline-none resize-none p-2"
                />
            </div>
            <div className="flex flex-wrap justify-between items-center mt-3 space-y-2 md:space-y-0">
                <div className="flex space-x-2">
                    <Button label="Focus" icon={["fas", "magnifying-glass"]} rounded="-xl" />
                    <Button label="File" icon={["fas", "circle-plus"]} rounded="-xl" />
                    <Button label="🌍 Globe" rounded="-xl" />
                    <Button label="📥 Insert" rounded="-xl" />
                </div>
                <div className="flex space-x-2">
                    <button className="text-gray-700 font-semibold">Copilot</button>
                    <Button
                        onClick={() => {
                            if (inputRef.current?.value.trim() !== "")
                                navigate(`/result?query=${inputRef.current?.value.trim()}`);
                        }}
                        icon={["fas", "arrow-right"]}
                        rounded="-xl"
                    />
                </div>
            </div>
        </div>
    );
};
