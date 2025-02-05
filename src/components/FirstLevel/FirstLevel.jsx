import FloorPiece from '../FloorPiece/FloorPiece'

const FirstLevel = () => {
    return (
        <article className="first-level mb-28">
            <section className='first-level-floor flex'>
                <FloorPiece />
                <FloorPiece />
                <FloorPiece />
                <FloorPiece />
                <FloorPiece />
                <FloorPiece />
                <FloorPiece />
                <FloorPiece />
                <FloorPiece />
                <div className='relative bottom-[3.5px]'>
                    <FloorPiece />
                </div>
                <div className='relative bottom-[7px]'>
                    <FloorPiece />
                </div>
                <div className='relative bottom-[10.5px]'>
                    <FloorPiece />
                </div>
                <div className='relative bottom-[14px]'>
                    <FloorPiece />
                </div>
                <div className='relative bottom-[17.5px]'>
                    <FloorPiece />
                </div>
            </section>
        </article>
    )
}

export default FirstLevel