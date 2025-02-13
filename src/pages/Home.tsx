import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Search } from "../components/Search";

const queries = [
    "ancient civilizations of Mesopotamia",
    "rare orchids in Hawaii",
    "best time to visit Kyoto",
    "flexbox vs grid in CSS",
    "creative cat name ideas",
    "vegan cafes in New York",
    "integral of sin(x)cos(x), derivative of e^x ln(x)"
];

export const Home = () => {
    const navigate = useNavigate();

    return (
        <section className="w-full max-w-screen-md mx-auto px-4">
            <div className="flex flex-col items-center space-y-6 py-12">
                <header>
                    <span className="font-bold font-mono text-3xl sm:text-4xl text-orange-400"> Ask Lirra? </span>
                </header>
                <Search />
                <span className="text-orange-600 font-medium">Try asking</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full">
                    {queries.map((query, i) => (
                        <Button 
                            key={i} 
                            background={false} 
                            onClick={() => navigate(`/result?query=${query}`)} 
                            label={query} 
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-center py-4">
                {["Try Pro", "Careers", "FAQ", "Labs", "Blog", "Privacy", "Terms"].map((link, i) => (
                    <a key={i} className="text-orange-600 hover:underline font-semibold" href="#">
                        {link}
                    </a>
                ))}
            </div>
        </section>
    );
};
