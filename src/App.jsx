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
import ThreeLadder from './components/ThreeLadder/ThreeLadder.jsx'
import TwoLadder from './components/TwoLadder/TwoLadder.jsx'
import SixLadder from './components/SixLadder/SixLadder.jsx'
import OneLadder from './components/OneLadder/OneLadder.jsx'
import YellowVerticleBarrel from './components/YellowVerticleBarrel/YellowVerticleBarrel.jsx'
import BlueVerticleBarrel from './components/BlueVerticleBarrel/BlueVerticleBarrel.jsx'
import Hammer from './components/Hammer/Hammer.jsx'
import Oil from './components/Oil/Oil.jsx'
import Mario from './components/Mario/Mario.jsx'

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
          <article className="thirteen-ladder-container flex gap-7">
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
      <div className='absolute left-[749px] top-[894px]'>
        <FourLadder />
      </div>
      <div className='absolute left-[292px] top-[503px]'>
        <FiveLadder />
      </div>
      <div className='absolute left-[357px] top-[418px]'>
        <ThreeLadder />
      </div>
      <div className='absolute left-[682px] top-[482px]'>
        <TwoLadder />
      </div>
      <div className='absolute left-[682px] top-[572px]'>
        <TwoLadder />
      </div>
      <div className='absolute left-[259px] top-[693.5px]'>
        <TwoLadder />
      </div>
      <div className='absolute left-[323px] top-[945px]'>
        <TwoLadder />
      </div>
      <div className='absolute left-[392px] top-[750px]'>
        <SixLadder />
      </div>
      <div className='absolute left-[456px] top-[622.5px]'>
        <SixLadder />
      </div>
      <div className='absolute left-[357px] top-[371px]'>
        <OneLadder />
      </div>
      <div className='absolute left-[259px] top-[612.5px]'>
        <OneLadder />
      </div>
      <div className='absolute left-[323px] top-[871.5px]'>
        <OneLadder />
      </div>
      <div className='absolute left-[336px] top-[341px]'>
        <YellowVerticleBarrel />
      </div>
      <div className='absolute left-[140px] top-[715px]'>
        <BlueVerticleBarrel />
      </div>
      <div className='absolute left-[70px] top-[400px]'>
        <Hammer />
      </div>
      <div className='absolute left-[678px] top-[757px]'>
        <Hammer />
      </div>
      <div className='absolute left-[63px] top-[904px]'>
        <Oil />
      </div>
      <div className='absolute left-[363px] top-[909px]'>
        <Mario />
      </div>
    </>
  )
}

export default App