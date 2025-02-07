const SixLadder = () => {
    return (
        <article className='six-ladder flex w-8 h-[95px]'>
            <div className="six-ladder-side w-[6px] h-full"></div>
            <article className="six-ladder-rungs flex flex-col h-full w-full justify-between">
                <div className="rung w-full h-1 mt-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1 mb-3"></div>
            </article>
            <div className="six-ladder-side w-[6px] h-full"></div>
        </article>
    )
}

export default SixLadder