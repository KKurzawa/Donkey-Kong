import './LevelOne.css'

const LevelOne = () => {
    return (
        <article className='level-one flex items-center gap-1'>
            <div className="l grid">
                <div className="l-a"></div>
                <div className="l-b"></div>
            </div>
            <div className="equals flex flex-col justify-center gap-1">
                <div className="equals-a"></div>
                <div className="equals-b"></div>
            </div>
            <div className="level-zero grid">
                <div className="level-zero-a"></div>
                <div className="level-zero-b"></div>
                <div className="level-zero-c"></div>
                <div className="level-zero-d"></div>
                <div className="level-zero-e"></div>
                <div className="level-zero-f"></div>
                <div className="level-zero-g"></div>
                <div className="level-zero-h"></div>
            </div>
            <div className="one grid">
                <div className="one-a"></div>
                <div className="one-b"></div>
                <div className="one-c"></div>
            </div>
        </article>
    )
}

export default LevelOne