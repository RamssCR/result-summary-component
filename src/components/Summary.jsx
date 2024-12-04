import { useContext } from "react"
import { appContext } from "../context/appContext"
import Item from "./Item"

function Summary() {
    const { items } = useContext(appContext)

    return (
        <section className="max-w-96 flex flex-col gap-6 w-full px-5 py-7 lg:px-7 lg:py-9">
            <h2 className="font-bold text-2xl text-zinc-700">Summary</h2>

            <div className="flex flex-col gap-4">
                {items.length > 0 && items.map((item, index) => <Item key={index} category={item.category} value={item.score} icon={item.icon} color={item.color} />)}
            </div>
            <button className="w-full bg-blue-950 text-white text-lg tracking-wide py-3 rounded-full hover:cursor-pointer">Continue</button>
        </section>
    )
}

export default Summary