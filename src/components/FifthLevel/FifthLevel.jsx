import './FifthLevel.css'
import FloorPiece from '../FloorPiece/FloorPiece'

const FifthLevel = () => {
    return (
        <article className="fifth-level ml-[65px] mb-14">
            <section className='fifth-level-floor flex'>
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
                <div className='relative bottom-[21px]'>
                    <FloorPiece />
                </div>
                <div className='relative bottom-[24.5px]'>
                    <FloorPiece />
                </div>
                <div className='relative bottom-[28px]'>
                    <FloorPiece />
                </div>
                <div className='relative bottom-[31.5px]'>
                    <FloorPiece />
                </div>
                <div className='relative bottom-[35px]'>
                    <FloorPiece />
                </div>
                <div className='relative bottom-[38.5px]'>
                    <FloorPiece />
                </div>
                <div className='relative bottom-[42px]'>
                    <FloorPiece />
                </div>
            </section>
        </article>
    )
}

export default FifthLevel