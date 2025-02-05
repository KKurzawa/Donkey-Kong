import './FiveLadder.css'

const FiveLadder = () => {
    return (
        <article className='five-ladder flex w-8 h-[86px]'>
            <div className="five-ladder-side w-[6px] h-full"></div>
            <article className="five-ladder-rungs flex flex-col h-full w-full justify-between">
                <div className="rung w-full h-1 mt-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1"></div>
                <div className="rung w-full h-1 mb-2"></div>
            </article>
            <div className="five-ladder-side w-[6px] h-full"></div>
        </article>
    )
}

export default FiveLadder