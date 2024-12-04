import { useContext } from "react"
import { appContext } from "../context/appContext"

function Score() {
    const { score } = useContext(appContext)

    return (
        <article className="flex flex-col justify-between items-center gap-4 pt-6 pb-10 bg-gradient-to-b from-indigo-500 to-indigo-600 text-amber-50 lg:w-129 lg:h-128 rounded-b-3xl lg:gap-10 lg:rounded-3xl">
            <span className="text-lg text-gray-300 tracking-wide">Your Result</span>
            <div className="flex flex-col items-center justify-center gap-2 size-40 w-40 lg:size-44 lg:w-44 p-5 rounded-full bg-gradient-to-b from-indigo-700 to-indigo-600">
                <h2 className="text-6xl font-bold">{score}</h2>
                <span className="text-base text-gray-400">of 100</span>
            </div>
            <div className="flex flex-col items-center gap-2 px-16 lg:px-24 lg:gap-6">
                <h3 className="text-2xl">Great</h3>
                <p className="text-gray-300 text-base text-center">You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </article>
    )
}

export default Score