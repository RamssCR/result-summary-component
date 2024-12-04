// eslint-disable-next-line react/prop-types
function Item({ category, value, icon, color }) {
    return (
        <article className={`flex justify-between items-center w-full bg-${color}-50 px-5 py-5 rounded-lg`}>
            <div className="flex items-center gap-4">
                <img src={icon} alt={category} className="size-6" />
                <p className={`text-${color}-600 text-base font-semibold`}>{category}</p>
            </div>

            <span className="text-gray-400 font-bold"><span className="text-blue-900">{value}</span> / 100</span>
        </article>
    )
}

export default Item