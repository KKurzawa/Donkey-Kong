import './FourthLevel.css'
import FloorPiece from '../FloorPiece/FloorPiece'

const FourthLevel = () => {
    return (
        <article className="fourth mb-[139px]">
            <section className='fourth-floor flex relative z-10'>
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
                <div className='relative top-[17.5px]'>
                    <FloorPiece />
                </div>
                <div className='relative top-[21px]'>
                    <FloorPiece />
                </div>
                <div className='relative top-[24.5px]'>
                    <FloorPiece />
                </div>
                <div className='relative top-[28px]'>
                    <FloorPiece />
                </div>
                <div className='relative top-[31.5px]'>
                    <FloorPiece />
                </div>
                <div className='relative top-[35px]'>
                    <FloorPiece />
                </div>
                <div className='relative top-[38.5px]'>
                    <FloorPiece />
                </div>
                <div className='relative top-[41px]'>
                    <FloorPiece />
                </div>
            </section>
        </article>
    )
}

export default FourthLevel