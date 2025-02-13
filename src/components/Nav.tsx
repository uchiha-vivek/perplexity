import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

type Profile = {
    name: string;
    avatar: string;
};

export const Nav = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState<Profile>();

    useEffect(() => {
        const storedProfile = localStorage.getItem("user");
        if (storedProfile) {
            setProfile(JSON.parse(storedProfile));
        }
    }, []);

    return (
        <>
           
            <div className="h-full w-min bg-[#f3f3ee] p-2  flex-col justify-between hidden md:flex">
                <nav className="space-y-2 p-4">
                    <header className="flex space-y-2 flex-col">
                        <span className="items-center ml-5">Lirra AI</span>
                        <button className="flex bg-white p-2 h-min w-full rounded-xl border text-xs hover:border-teal-500 transition duration-300 ease-in-out">
                            <span>New thread</span>
                            <span className="border px-1 mx-1 rounded">CTRL</span>
                            <span className="border px-1 rounded">I</span>
                        </button>
                    </header>
                    <ul className="space-y-2">
                        <li>
                            <Button background={false} onClick={() => navigate("/")} icon={["fas", "magnifying-glass"]} label="Home" />
                        </li>
                        <li>
                            <Button background={false} onClick={() => navigate("/library")} icon={["fas", "book"]} label="Library" />
                        </li>
                        <li>
                            <Button background={false} icon={["fas", "circle-nodes"]} label="AI Profile" />
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-col justify-center space-y-2">
                    <div className="flex flex-col justify-center p-2 space-y-2">
                        <span className="font-bold text-md">Try Lirra Pro</span>
                        <span className="text-clip text-gray-600">Upgrade to Lirra-Pro-Max</span>
                        <div>
                            <button className="bg-orange-400 px-4 py-2 hover:text-gray-800 text-md transition duration-200 ease-in-out rounded-full text-black">
                                Learn More
                            </button>
                        </div>
                    </div>
                    {profile && (
                        <div className="flex space-x-3 p-2 items-center cursor-pointer rounded-md hover:bg-gray-200 transition ease-in-out duration-300">
                            <img className="aspect-square rounded-full w-8" referrerPolicy="no-referrer" src={profile.avatar} />
                            <span className="font-bold text-md">{profile.name}</span>
                        </div>
                    )}
                    <div className="py-2 space-y-4">
                        <hr className="border-t border-gray-300 border-b-0 border-l-0 border-r-0 h-0" />
                        <div className="flex space-x-2">
                            <Button background={false} label="Download" icon={["fas", "mobile-screen"]} />
                            <Button background={false} label="" icon={["fab", "x-twitter"]} />
                            <Button background={false} label="" icon={["fab", "discord"]} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation for Mobile */}
            <div className="fixed bottom-0 left-0 w-full bg-[#f3f3ee] p-2 flex justify-around md:hidden shadow-lg">
                <Button background={false} onClick={() => navigate("/")} icon={["fas", "magnifying-glass"]} />
                <Button background={false} onClick={() => navigate("/library")} icon={["fas", "book"]} />
                <Button background={false} icon={["fas", "circle-nodes"]} />
            </div>
        </>
    );
};
