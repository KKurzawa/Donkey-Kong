import './SixthLevel.css'
import FloorPiece from '../FloorPiece/FloorPiece'

const SixthLevel = () => {
    return (
        <article className="top-level mb-28">
            <section className='top-level-floor flex'>
                <FloorPiece />
                <FloorPiece />
                <FloorPiece />
                <FloorPiece />
                <FloorPiece />
                <FloorPiece />
                <FloorPiece />
                <FloorPiece />
                <FloorPiece />
                <div className='relative top-[3.5px]'>
                    <FloorPiece />
                </div>
                <div className='relative top-[7px]'>
                    <FloorPiece />
                </div>
                <div className='relative top-[10.5px]'>
                    <FloorPiece />
                </div>
                <div className='relative top-[14px]'>
                    <FloorPiece />
                </div>
            </section>
        </article>
    )
}

export default SixthLevel