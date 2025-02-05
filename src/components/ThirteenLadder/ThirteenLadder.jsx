import './ThirteenLadder.css'

const ThirteenLadder = () => {
    return (
        <article className='thirteen-ladder flex w-8 h-[225px]'>
            <div className="thirteen-ladder-side w-[6px] h-full"></div>
            <article className="thirteen-ladder-rungs flex flex-col h-full w-full justify-between">
                <div className="rung w-full h-1 mt-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1 mb-2"></div>
            </article>
            <div className="thirteen-ladder-side w-[6px] h-full"></div>
        </article>
    )
}

export default ThirteenLadder