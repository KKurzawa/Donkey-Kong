import './HighScore.css'

const HighScore = () => {
    return (
        <article className='high-score flex gap-8'>
            <section className='high flex gap-1'>
                <div className='h grid'>
                    <div className="h-a"></div>
                    <div className="h-b"></div>
                    <div className="h-c"></div>
                </div>
                <div className='i grid'>
                    <div className="i-a"></div>
                    <div className="i-b"></div>
                    <div className="i-c"></div>
                </div>
                <div className='g grid'>
                    <div className="g-a"></div>
                    <div className="g-b"></div>
                    <div className="g-c"></div>
                    <div className="g-d"></div>
                    <div className="g-e"></div>
                    <div className="g-f"></div>
                    <div className="g-g"></div>
                </div>
                <div className='h grid'>
                    <div className="h-a"></div>
                    <div className="h-b"></div>
                    <div className="h-c"></div>
                </div>
            </section>
            <section className='score flex gap-1'>
                <div className='s grid'>
                    <div className="s-a"></div>
                    <div className="s-b"></div>
                    <div className="s-c"></div>
                    <div className="s-d"></div>
                    <div className="s-e"></div>
                    <div className="s-f"></div>
                    <div className="s-g"></div>
                </div>
                <div className='c grid'>
                    <div className="c-a"></div>
                    <div className="c-b"></div>
                    <div className="c-c"></div>
                    <div className="c-d"></div>
                    <div className="c-e"></div>
                    <div className="c-f"></div>
                    <div className="c-g"></div>
                </div>
                <div className='o grid'>
                    <div className="o-a"></div>
                    <div className="o-b"></div>
                    <div className="o-c"></div>
                    <div className="o-d"></div>
                </div>
                <div className='r grid'>
                    <div className="r-a"></div>
                    <div className="r-b"></div>
                    <div className="r-c"></div>
                    <div className="r-d"></div>
                    <div className="r-e"></div>
                    <div className="r-f"></div>
                    <div className="r-g"></div>
                </div>
                <div className='e grid'>
                    <div className="e-a"></div>
                    <div className="e-b"></div>
                    <div className="e-c"></div>
                    <div className="e-d"></div>
                </div>
            </section>
        </article>
    )
}

export default HighScore