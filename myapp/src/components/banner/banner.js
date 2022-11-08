import SwiperBanner from "./swiperBanner/swiperBanner"
import { BannerAll, AfterBanner } from "./styleBanner"

export default function Banner(){

    return(
        <>
            <BannerAll>
                <SwiperBanner/>
            </BannerAll>
            <AfterBanner>
                
            </AfterBanner> 
        </>
    )
}