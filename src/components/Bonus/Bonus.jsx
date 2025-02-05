import './Bonus.css'
import BonusWord from '../BonusWord/BonusWord'
import BonusScore from '../BonusScore/BonusScore'

const Bonus = () => {
    return (
        <article className='bonus flex items-center relative left-[155px] bottom-[110px]'>
            <div className="bonus-line w-[3px] h-[64px]"></div>
            <section className="bonus-inner flex flex-col items-center gap-1">
                <section className="bonus-inner-top flex gap-1">
                    <div className="bonus-inner-top-line h-[3px] w-2"></div>
                    <BonusWord />
                    <div className="bonus-inner-top-line  h-[3px] w-2"></div>
                </section>
                <BonusScore />
                <div className="bonus-inner-verticle-line w-full h-[3px]"></div>
            </section>
            <div className="bonus-line w-[3px] h-[64px]"></div>
        </article>
    )
}

export default Bonus