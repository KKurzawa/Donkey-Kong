import './ThreeLadder.css'

const ThreeLadder = () => {
    return (
        <article className='three-ladder flex w-8 h-[51px]'>
            <div className="three-ladder-side w-[6px] h-full"></div>
            <article className="three-ladder-rungs flex flex-col h-full w-full justify-between">
                <div className="rung w-full h-1 mt-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1 mb-2"></div>
            </article>
            <div className="three-ladder-side w-[6px] h-full"></div>
        </article>
    )
}

export default ThreeLadder