const OneLadder = () => {
    return (
        <article className='one-ladder flex w-8 h-[17px]'>
            <div className="one-ladder-side w-[6px] h-full"></div>
            <article className="one-ladder-rungs flex flex-col h-full w-full justify-center">
                <div className="rung w-full h-1"></div>
            </article>
            <div className="one-ladder-side w-[6px] h-full"></div>
        </article>
    )
}

export default OneLadder