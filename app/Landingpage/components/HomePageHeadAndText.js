
const HomePageHeadAndText = ({title1, title2, position, text1, text2, text3}) => {

  return (
    <main className={`text-white text-2xl  md:text-5xl text-${position}`}>
        {title1 && <h2>{title1}</h2>}
        {title2 && <h2>{title2}</h2>}
        <div className={`text-lightGrey mt-4 text-xl  font-fourHundrend`}>
            {text1 && <p>{text1}</p>}
            {text2 && <p>{text2}</p>}
            {text3 && <p>{text3}</p>}
        </div>
    </main>
  )
}

export default HomePageHeadAndText