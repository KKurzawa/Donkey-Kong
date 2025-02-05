import './Barrels.css'
import VerticleBarrel from '../VerticleBarrel/VerticleBarrel'

const Barrels = () => {
    return (
        <article className='flex flex-col relative bottom-[3px]'>
            <section className='flex'>
                <VerticleBarrel />
                <VerticleBarrel />
            </section>
            <section className='flex'>
                <VerticleBarrel />
                <VerticleBarrel />
            </section>
        </article>
    )
}

export default Barrels