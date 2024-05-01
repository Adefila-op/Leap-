import { lightGrey } from "@/constants/colors"
import { fifty, thirtyTwo } from "@/constants/fontSizes"
import { fourHundrend, sixHundrend } from "@/constants/fontWeight"


const HomePageHeadAndText = ({title1, title2, position, text1, text2, text3}) => {

  return (
    <main className={`text-[${fifty} font-[${sixHundrend}] text-${position}`}>
        {title1 && <h2>{title1}</h2>}
        {title2 && <h2>{title2}</h2>}
        <div className={`text-[${lightGrey}] text-[${thirtyTwo}] font-[${fourHundrend}]`}>
            {text1 && <p>{text1}</p>}
            {text2 && <p>{text2}</p>}
            {text3 && <p>{text3}</p>}
        </div>
    </main>
  )
}

export default HomePageHeadAndText