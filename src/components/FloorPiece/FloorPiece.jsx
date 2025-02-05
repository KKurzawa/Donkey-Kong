import './FloorPiece.css'

const FloorPiece = () => {
    return (
        <article className="floor-piece flex flex-col w-[65px] h-[30px]">
            <div className='pink-bar w-full h-[12%]'></div>
            <div className='red-bar w-full h-[12%]'></div>
            <section className="middle-floor grid w-full h-[56%]">
                <div className="floor-a"></div>
                <div className="floor-b"></div>
                <div className="floor-c"></div>
                <div className="floor-d"></div>
                <div className="floor-e"></div>
                <div className="floor-f"></div>
                <div className="floor-g"></div>
                <div className="floor-h"></div>
                <div className="floor-i"></div>
                <div className="floor-j"></div>
                <div className="floor-k"></div>
                <div className="floor-l"></div>
                <div className="floor-m"></div>
                <div className="floor-n"></div>
                <div className="floor-o"></div>
                <div className="floor-p"></div>
            </section>
            <div className='pink-bar w-full h-[10%]'></div>
            <div className='red-bar w-full h-[10%]'></div>
        </article>
    )
}

export default FloorPiece