const TwoLadder = () => {
    return (
        <article className='two-ladder flex w-8 h-[34px]'>
            <div className="two-ladder-side w-[6px] h-full"></div>
            <article className="two-ladder-rungs flex flex-col h-full w-full justify-between">
                <div className="rung w-full h-1 mt-1"></div>
                <div className="rung w-full h-1 mb-2"></div>
            </article>
            <div className="two-ladder-side w-[6px] h-full"></div>
        </article>
    )
}

export default TwoLadder