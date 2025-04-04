import './FourLadder.css'

const FourLadder = () => {
    return (
        <article className='four-ladder flex w-8 h-[68px]'>
            <div className="four-ladder-side w-[6px] h-full"></div>
            <article className="four-ladder-rungs flex flex-col h-full w-full justify-between">
                <div className="rung w-full h-1 mt-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1 mb-2"></div>
            </article>
            <div className="four-ladder-side w-[6px] h-full"></div>
        </article>
    )
}

export default FourLadder