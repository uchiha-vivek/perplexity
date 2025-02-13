import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import { Search } from "../components/Search"


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
        <section className="m-auto">
            <div className="flex justify-center p-20 flex-col items-center space-y-4">
                <header>
                    <span className="font-bold font-mono text-4xl text-orange-400 "> Ask Lirra ? </span>
                </header>
                <Search />
                <span className="text-orange-600 font-medium " >Try asking</span>
                <div className="grid grid-cols-4 gap-2 justify-center  text-orange-600">
                    {queries.map((query,i) => {
                        return <Button key={i} background={false} onClick={() => navigate(`/result?query=${query}`)} label={query} />
                    })}
                    
                </div>
            </div>
            <div className="flex justify-center space-x-4">
                <a className="text-orange-600 hover:underline font-semibold  " href="#">Try Pro</a>
                <a className="text-orange-600 hover:underline font-semibold " href="#">Careers</a>
                <a className="text-orange-600 hover:underline font-semibold " href="#">FAQ</a>
                <a className="text-orange-600 hover:underline font-semibold" href="#">Labs</a>
                <a className="text-orange-600 hover:underline font-semibold " href="#">Blog</a>
                <a className="text-orange-600 hover:underline font-semibold" href="#">Privacy</a>
                <a className="text-orange-600 hover:underline font-semibold" href="#">Terms</a>
            </div>
        </section>
    )
}