import './App.css'
import HighScore from './components/HighScore/HighScore.jsx'
import HighScoreNumbers from './components/HighScoreNumbers/HighScoreNumbers.jsx'
import ScoreNumbers from './components/ScoreNumbers/ScoreNumbers.jsx'
import LittleMario from './components/LittleMario/LittleMario.jsx'
import LevelOne from './components/LevelOne/LevelOne.jsx'
import SixthLevel from './components/SixthLevel/SixthLevel.jsx'
import Barrels from './components/Barrels/Barrels.jsx'
import Kong from './components/Kong/Kong.jsx'
import ThirteenLadder from './components/ThirteenLadder/ThirteenLadder.jsx'
import SeventhLevel from './components/SeventhLevel/SeventhLevel.jsx'
import FiveLadder from './components/FiveLadder/FiveLadder.jsx'
import Girl from './components/Girl/Girl.jsx'
import Bonus from './components/Bonus/Bonus.jsx'
import FourLadder from './components/FourLadder/FourLadder.jsx'
import FifthLevel from './components/FifthLevel/FifthLevel.jsx'
import FourthLevel from './components/FourthLevel/FourthLevel.jsx'
import ThirdLevel from './components/ThirdLevel/ThirdLevel.jsx'
import SecondLevel from './components/SecondLevel/SecondLevel.jsx'
import FirstLevel from './components/FirstLevel/FirstLevel.jsx'

const App = () => {
  return (
    <>
      <header className='flex flex-col items-center gap-1'>
        <HighScore />
        <article className='flex flex-row justify-around w-full gap-20'>
          <ScoreNumbers />
          <HighScoreNumbers />
          <div className='w-[170px] h-[25px]'></div>
        </article>
        <article className='flex flex-row justify-between w-[85%] mr-12 mt-8'>
          <section className="marios flex gap-2">
            <LittleMario />
            <LittleMario />
          </section>
          <LevelOne />
        </article>
      </header>
      <main className='flex flex-col'>
        <section className='flex items-end'>
          <section className='flex'>
            <Barrels />
            <Kong />
          </section>
          <article className="thirteen-ladder-container flex gap-9">
            <ThirteenLadder />
            <ThirteenLadder />
          </article>
          <section className="girl-level flex flex-col items-center">
            <section className='w-full relative left-0'>
              <Girl />
            </section>
            <SeventhLevel />
            <section className='w-full relative left-[162px]'>
              <FiveLadder />
            </section>
          </section>
          <Bonus />
        </section>
        <SixthLevel />
        <FifthLevel />
        <FourthLevel />
        <ThirdLevel />
        <SecondLevel />
        <FirstLevel />
      </main>

      {/* absolutely positioned elements */}
      <div className='absolute left-[749px] top-[381px]'>
        <FourLadder />
      </div>
      <div className='absolute left-[129px] top-[509px]'>
        <FourLadder />
      </div>
      <div className='absolute left-[749px] top-[634px]'>
        <FourLadder />
      </div>
      <div className='absolute left-[129px] top-[764px]'>
        <FourLadder />
      </div>
      <div className='absolute left-[749px] top-[890px]'>
        <FourLadder />
      </div>
    </>
  )
}

export default App