import './BonusWord.css'

const BonusWord = () => {
  return (
    <article className="bonus-word flex gap-[6px]">
      <section className="letter-b grid w-5 h-5">
        <div className="letter-b-a"></div>
        <div className="letter-b-b"></div>
        <div className="letter-b-c"></div>
        <div className="letter-b-d"></div>
        <div className="letter-b-e"></div>
        <div className="letter-b-f"></div>
      </section>
      <section className="letter-o grid w-5 h-5">
        <div className="letter-o-a"></div>
        <div className="letter-o-b"></div>
        <div className="letter-o-c"></div>
        <div className="letter-o-d"></div>
        <div className="letter-o-e"></div>
      </section>
      <section className="letter-n grid w-5 h-5">
        <div className="letter-n-a"></div>
        <div className="letter-n-b"></div>
        <div className="letter-n-c"></div>
        <div className="letter-n-d"></div>
        <div className="letter-n-e"></div>
      </section>
      <section className="letter-u grid w-5 h-5">
        <div className="letter-u-a"></div>
        <div className="letter-u-b"></div>
        <div className="letter-u-c"></div>
      </section>
      <section className="letter-s grid w-5 h-5">
        <div className="letter-s-a"></div>
        <div className="letter-s-b"></div>
        <div className="letter-s-c"></div>
        <div className="letter-s-d"></div>
        <div className="letter-s-e"></div>
      </section>
    </article>
  )
}

export default BonusWord