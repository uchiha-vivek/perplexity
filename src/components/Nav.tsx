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
            {/* Desktop Sidebar */}
            <div className="h-full w-64 bg-[#f3f3ee] p-4 flex-col justify-between hidden md:flex">
                <nav className="space-y-4">
                    <header className="flex flex-col space-y-2">
                        <span className="text-lg font-bold">Lirra AI</span>
                        <button className="flex items-center bg-white px-3 py-2 rounded-xl border text-sm hover:border-teal-500 transition duration-300">
                            <span>New thread</span>
                            <span className="border px-1 mx-1 rounded">CTRL</span>
                            <span className="border px-1 rounded">I</span>
                        </button>
                    </header>
                    <ul className="space-y-2">
                        <li><Button background={false} onClick={() => navigate("/")} icon={["fas", "magnifying-glass"]} label="Home" /></li>
                        <li><Button background={false} onClick={() => navigate("/library")} icon={["fas", "book"]} label="Library" /></li>
                        <li><Button background={false} icon={["fas", "circle-nodes"]} label="AI Profile" /></li>
                    </ul>
                </nav>

                {/* Profile & Footer */}
                <div className="space-y-4">
                    <div className="p-4 rounded-md bg-orange-100">
                        <span className="font-bold">Try Lirra Pro</span>
                        <p className="text-sm text-gray-600">Upgrade to Lirra-Pro-Max</p>
                        <button className="mt-2 w-full bg-orange-400 px-4 py-2 text-md rounded-full text-black hover:bg-orange-500 transition">
                            Learn More
                        </button>
                    </div>
                    {profile && (
                        <div className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-200 transition duration-300">
                            <img className="w-8 h-8 rounded-full" src={profile.avatar} referrerPolicy="no-referrer" />
                            <span className="ml-3 font-bold">{profile.name}</span>
                        </div>
                    )}
                    <div className="border-t pt-3 flex justify-around">
                        <Button background={false} label="Download" icon={["fas", "mobile-screen"]} />
                        <Button background={false} icon={["fab", "x-twitter"]} />
                        <Button background={false} icon={["fab", "discord"]} />
                    </div>
                </div>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="fixed bottom-0 left-0 w-full bg-[#f3f3ee] p-3 flex justify-around md:hidden shadow-lg">
                <Button background={false} onClick={() => navigate("/")} icon={["fas", "magnifying-glass"]} />
                <Button background={false} onClick={() => navigate("/library")} icon={["fas", "book"]} />
                <Button background={false} icon={["fas", "circle-nodes"]} />
            </div>
        </>
    );
};
