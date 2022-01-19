import React, { Component } from 'react'
import { Loading } from './Loading'
import NewsItem from './NewsItem'


export class News extends Component {

    static defaultProps={
        pageSize:10,
        country:"in" ,
        category:"general"    
    }
    
    article = [
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Rachel Pannett",
            "title": "What you need to know about the Tonga volcano and the Pacific's 'Ring of Fire' - The Washington Post",
            "description": "The weekend's eruption and tsunami may have just been a warm-up, volcanologists say.",
            "url": "https://www.washingtonpost.com/world/2022/01/17/tonga-volcano-eruption-tsunami-damage/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/A5IEFCDWEQI6ZITNDQQ4C2Y4SM.jpg&w=1440",
            "publishedAt": "2022-01-17T07:20:12Z",
            "content": "The Hunga Tonga-Hunga Haapai volcano, which has erupted several times in recent years, is part of the Pacific Ring of Fire, home to some of the worlds most active volcanoes."
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Jori Epstein, USA TODAY",
            "title": "'Livid': Dak Prescott, Cowboys try to make sense of bizarre final play vs. 49ers - USA TODAY",
            "description": "The Dallas Cowboys and Dak Prescott tried to make sense of the final sequence in Sunday's NFC wild-card playoff loss to the San Francisco 49ers.",
            "url": "https://www.usatoday.com/story/sports/nfl/cowboys/2022/01/16/cowboys-dak-prescott-try-make-sense-playoff-finish-vs-niners/6552660001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/01/17/USAT/c800d903-1c09-4ec4-b722-d56d64b8a97d-USP_NFL__NFC_Wild_Card_Playoff-San_Francisco_49ers_2.jpg?auto=webp&crop=1819,1023,x9,y1074&format=pjpg&width=1200",
            "publishedAt": "2022-01-17T06:09:01Z",
            "content": "ARLINGTON, Texas — Dak Prescott felt the collision.\r\nHe had just scurried 17 yards upfield, advancing his Dallas Cowboys from San Francisco’s 41-yard line to the 24-yard line, eager to position his s… [+4988 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "China's birth rate drops to record low in 2021 - Reuters",
            "description": "Mainland China's birth rate dropped to a record low in 2021, data showed on Monday, extending a downward trend that led Beijing last year to begin allowing couples to have up to three children.",
            "url": "https://www.reuters.com/world/china/birth-rate-mainland-china-2021-drops-record-low-2022-01-17/",
            "urlToImage": "https://www.reuters.com/resizer/gfTs9ipfbKGTCnlzx0CEWPxvtRM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WO4XH64G4JPMRIRMTVYPDJMVGQ.jpg",
            "publishedAt": "2022-01-17T06:06:00Z",
            "content": "BEIJING, Jan 17 (Reuters) - Mainland China's birth rate dropped to a record low in 2021, data showed on Monday, extending a downward trend that led Beijing last year to begin allowing couples to have… [+2278 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ScienceAlert"
            },
            "author": "Michelle Starr",
            "title": "Earth's Insides Are Cooling Faster Than We Thought, And It Will Mess Things Up - ScienceAlert",
            "description": "Earth formed 4.5 billion years or so ago. Ever since then, it's been slowly cooling on the inside.",
            "url": "https://www.sciencealert.com/earth-s-insides-are-cooling-faster-than-we-thought-and-it-will-mess-things-up",
            "urlToImage": "https://www.sciencealert.com/images/2022-01/processed/earth-cross-section-illustration_1024.jpg",
            "publishedAt": "2022-01-17T05:59:42Z",
            "content": "Earth formed 4.5 billion years or so ago. Ever since then, it's been slowly cooling on the inside.\r\nWhile the surface and atmosphere temperatures fluctuate over the eons (and yes, those external temp… [+3476 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Credit Suisse chairman quits over COVID-19 breaches in latest setback - Fox Business",
            "description": "Credit Suisse will stick to its strategic overhaul despite the abrupt departure of its mastermind Antonio Horta-Osorio following an internal probe into his personal conduct, including breaches of COVID-19 rules, the embattled bank's new chairman said on Monda…",
            "url": "https://www.reuters.com/business/finance/credit-suisse-group-appoints-axel-lehmann-new-chairman-2022-01-16/",
            "urlToImage": "https://www.reuters.com/resizer/Wm6a8wTgXHt5ueGoQa8R2NZd6zg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RIWF57GAMZOXHIAHSKH52W4AIE.jpg",
            "publishedAt": "2022-01-17T05:53:30Z",
            "content": "SINGAPORE/ZURICH, Jan 17 (Reuters) - Credit Suisse will stick to its strategic overhaul despite the abrupt departure of its mastermind Antonio Horta-Osorio following an internal probe into his person… [+5374 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "U.S. FAA clears 45% of commercial plane fleet after 5G deployed - Reuters",
            "description": "The U.S. Federal Aviation Administration (FAA) said Sunday it had cleared an estimated 45% of the U.S. commercial airplane fleet to perform low-visibility landings at many airports where 5G C-band will be deployed starting Wednesday.",
            "url": "https://www.reuters.com/business/aerospace-defense/us-faa-oks-45-commercial-airplane-fleet-operations-after-5g-deployment-2022-01-16/",
            "urlToImage": "https://www.reuters.com/resizer/wVOynr_GLy3Mi0mE6I_wFJvNz6I=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RHUAV4QPBVMV7JMSQRT7MWEAWI.jpg",
            "publishedAt": "2022-01-17T05:36:00Z",
            "content": "WASHINGTON, Jan 16 (Reuters) - The U.S. Federal Aviation Administration (FAA) said Sunday it had cleared an estimated 45% of the U.S. commercial airplane fleet to perform low-visibility landings at m… [+3278 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Emmanuel Morgan",
            "title": "How Sunday's Games Affect the NFL Playoff Picture - The New York Times",
            "description": "Kansas City and Tampa Bay’s blowout victories, over Pittsburgh and Philadelphia, sandwiched the only upset of wild-card weekend: sixth-seeded San Francisco beating third-seeded Dallas.",
            "url": "https://www.nytimes.com/2022/01/16/sports/football/nfl-wild-card-score.html",
            "urlToImage": "https://static01.nyt.com/images/2022/01/16/sports/16nfl-h2w-mahomes/16nfl-h2w-mahomes-facebookJumbo.jpg",
            "publishedAt": "2022-01-17T05:00:00Z",
            "content": "The Buccaneers held Philadelphia scoreless until the fourth quarter, and self-inflicted mishaps errant throws by Jalen Hurts, dropped passes and a muffed punt by Jalen Reagor recovered by Tampa Bay d… [+1668 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Kim Tong-hyung",
            "title": "N. Korea fires short-range missiles in 4th launch this year - Associated Press",
            "description": "SEOUL, South Korea (AP) — North Korea fired two suspected ballistic missiles into the sea Monday in its fourth weapons launch this month, South Korea’s military said, with the apparent goal of demonstrating its military might amid paused diplomacy with the Un…",
            "url": "https://apnews.com/b8f9069c3e620819a086dd69f77bb7ac",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/af7d8155e3664d5bb380c6fb45f50e1b/3000.jpeg",
            "publishedAt": "2022-01-17T04:52:30Z",
            "content": "SEOUL, South Korea (AP) North Korea fired two suspected ballistic missiles into the sea Monday in its fourth weapons launch this month, South Koreas military said, with the apparent goal of demonstra… [+4230 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Pittsburgh Post-Gazette"
            },
            "author": "Ray Fittipaldo",
            "title": "Ray Fittipaldo's report card: Steelers' offensive ineptitude on full display against Chiefs - Pittsburgh Post-Gazette",
            "description": "A big F for the coaches after more offensive ineptitude doomed the Steelers.",
            "url": "https://www.post-gazette.com/sports/steelers/2022/01/16/pittsburgh-steelers-kansas-city-chiefs-offensive-ineptitude-wild-card-weekend-playoffs-report-card/stories/202201160213",
            "urlToImage": "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/20220116mfsteelerssports15-1642394088.jpg",
            "publishedAt": "2022-01-17T04:34:12Z",
            "content": "MENU"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Kenneth Garger",
            "title": "Celebrated Tuskegee Airman Charles McGee dies peacefully at 102 - New York Post ",
            "description": "Charles McGee, a decorated military pilot with the pioneering all-black Tuskegee Airman who flew missions in three wars, died peacefully in his sleep.",
            "url": "https://nypost.com/2022/01/16/tuskegee-airman-charles-mcgee-dies-at-102/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/01/Charles-McGee.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2022-01-17T04:31:00Z",
            "content": "Charles McGee, a decorated military pilot with the pioneering all-black Tuskegee Airman who flew combat missions in three wars, died Sunday. He was 102.\r\nMcGee died peacefully in his sleep, his famil… [+1240 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WGAL Susquehanna Valley Pa."
            },
            "author": "Ethan Huston",
            "title": "IMPACT: Wintry Mix To Rain, Windy Monday - WGAL Susquehanna Valley Pa.",
            "description": "Wintry mix becomes all rain early overnight as temperatures rise to the mid to upper 30s. Roadways will range from slushy to icy to just wet. Strong winds are likely Monday. Wind gusts could reach 45 mph.",
            "url": "https://www.wgal.com/article/a-winter-weather-advisory-in-effect-this-afternoon-through-monday-afternoon/38782276",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/poster-image-2022-01-16t231008-601-1642393260.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
            "publishedAt": "2022-01-17T04:26:00Z",
            "content": "WIND ADVISORY IN EFFECT 10 AM TO 7 PM MONDAY FOR ADAMS, CUMBERLAND, DAUPHIN, FRANKLIN, JUNIATA, LANCASTER, MIFFLIN, PERRY, YORK COUNTIES\r\nA complex, winter storm will continue to bring periods wintry… [+1383 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Jonathan Cheng",
            "title": "China GDP Grew 8.1% in 2021, Though Momentum Slowed in Fourth Quarter - The Wall Street Journal",
            "description": "China’s GDP grew just 4% in the fourth quarter compared with a year earlier",
            "url": "https://www.wsj.com/articles/china-gdp-grew-8-1-in-2021-though-momentum-slowed-in-fourth-quarter-11642386349",
            "urlToImage": "https://images.wsj.net/im-468863/social",
            "publishedAt": "2022-01-17T04:21:00Z",
            "content": "BEIJINGChinas economy expanded 8.1% last year as a pandemic-plagued world snapped up its goods, though slowing growth in the final months of the year points to challenges ahead for its economy. \r\nAs … [+327 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Kate Aurthur",
            "title": "‘Yellowjackets’ Showrunner Jonathan Lisco on Cannibalism, the Death of [Spoiler!] and That Shocking Ending - Variety",
            "description": "SPOILER ALERT: This piece contains spoilers for the Season 1 finale of “Yellowjackets,” “Sic Transit Gloria Mundi,” which premiered Sunday, January 16 on Showtime. Internally at “Yellowjackets,” the nickname for the show’s trifecta of showrunners is JAB — whi…",
            "url": "https://variety.com/2022/tv/news/yellowjackets-finale-spoilers-jonathan-lisco-jackie-lottie-1235155058/",
            "urlToImage": "https://variety.com/wp-content/uploads/2022/01/Yellowjackets-finale-MAIN.jpg?w=1000",
            "publishedAt": "2022-01-17T04:09:13Z",
            "content": "SPOILER ALERT: This piece contains spoilers for the Season 1 finale of “Yellowjackets,” “Sic Transit Gloria Mundi,” which premiered Sunday, January 16 on Showtime.\r\nInternally at “Yellowjackets,” the… [+20708 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sports Illustrated"
            },
            "author": "Conor Orr",
            "title": "Jerry Jones Has Decisions to Make About His Coaching Staff - Sports Illustrated",
            "description": "Dan Quinn and Kellen Moore are receiving head coaching interest, which could accelerate the timeline on which Mike McCarthy is judged.",
            "url": "https://www.si.com/nfl/2022/01/17/cowboys-coaches-mike-mccarthy-dan-quinn-kellen-moore",
            "urlToImage": "https://www.si.com/.image/t_share/MTg2NzUwNTUzOTg3MDMyNzc1/mike-mccarthy.jpg",
            "publishedAt": "2022-01-17T02:52:25Z",
            "content": "After Sunday’s disappointing playoff loss to the 49ers, here’s an interesting question that Jerry Jones is likely asking himself internally and fielding from those in his inner circle: What are we go… [+5343 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Winter storm slams U.S. East Coast, Canada, thousands of flights canceled - Reuters",
            "description": "A major winter storm slammed much of the eastern United States with snow, ice and high winds on Sunday, causing widespread travel disruptions and power outages on a holiday weekend.",
            "url": "https://www.reuters.com/business/aerospace-defense/airlines-cancel-over-2700-us-flights-winter-storm-hits-us-east-coast-2022-01-16/",
            "urlToImage": "https://www.reuters.com/resizer/gW11oPwPUb9a-lMUfMpl1JKKv7g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TX2KL7X5I5IB7BHGXVF2UAJPME.jpg",
            "publishedAt": "2022-01-17T02:52:00Z",
            "content": "WASHINGTON, Jan 16 (Reuters) - A major winter storm slammed much of the eastern United States with snow, ice and high winds on Sunday, causing widespread travel disruptions and power outages on a hol… [+2912 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Trilby Beresford",
            "title": "Jordan Cashmyer, Star of MTV’s ’16 and Pregnant,’ Dies at 26 - Hollywood Reporter",
            "description": "Jordan Cashmyer, a star of MTV’s reality series 16 and Pregnant, has died in Maryland. She was 26. Cashmyer’s death was announced by family member Jessica Cashmyer in a Facebook post via the account of her late husband — and Jordan’s father — Dennis M. Cashmy…",
            "url": "https://www.hollywoodreporter.com/tv/tv-news/jordan-cashmyer-dead-mtv-16-and-pregnant-star-1235075997/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/01/jordan.jpg?w=1024",
            "publishedAt": "2022-01-17T02:42:39Z",
            "content": "Jordan Cashmyer, a star of MTV’s reality series 16 and Pregnant, has died in Maryland. She was 26.\r\nCashmyer’s death was announced by family member Jessica Cashmyer in a Facebook post via the account… [+1484 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WGME"
            },
            "author": "Matt Hoenig",
            "title": "TIMELINE: Here's when Mainers can expect heavy snow, strong winds on Monday - WGME",
            "description": "PORTLAND (WGME) -- The forecast remains on track for a messy winter storm on Monday. Heavy snow, strong winds, and some minor coastal flooding all remain on the table. Here's the latest: MONDAY MORNING: Snow breaks out between 4 AM and 6 AM across our area. P…",
            "url": "https://wgme.com/news/local/timeline-heres-when-mainers-can-expect-heavy-snow-strong-winds-on-monday",
            "urlToImage": "https://wgme.com/resources/media/5dee723d-7a83-44d0-b292-8e0d05b254e6-large16x9_SnowMap1.png?1642383013116",
            "publishedAt": "2022-01-17T01:52:16Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": null,
            "title": "Novak Djokovic arrives in Dubai after deportation from Australia - ESPN",
            "description": "An Emirates plane carrying Novak Djokovic from Australia landed in Dubai early Monday, and he was later seen on board a plane due to land in the Serbian capital of Belgrade at 12:10 p.m. local time.",
            "url": "https://www.espn.com/tennis/story/_/id/33082181/novak-djokovic-lands-dubai-takes-flight-native-serbia-deportation-australia",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0111%2Fr960569_1296x729_16%2D9.jpg",
            "publishedAt": "2022-01-17T01:48:43Z",
            "content": "DUBAI, United Arab Emirates -- Novak Djokovic was heading home to Serbia on Monday after his deportation from Australia over its required COVID-19 vaccination ended the No. 1-ranked men's tennis play… [+3126 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WKRC TV Cincinnati"
            },
            "author": "WKRC",
            "title": "Astronauts can suffer from 'space anemia' when returning to Earth - WKRC TV Cincinnati",
            "description": "OTTAWA (WKRC) - A recent study has shown that some astronauts could suffer from a \"space anemia. \"A study from the University of Ottawa and the Ottawa Hospital studied 14 astronauts after they had been to space. Studies have shown that 54% more red blood cell…",
            "url": "https://local12.com/news/nation-world/astronauts-can-suffer-from-space-anemia-when-returning-to-earth-space-nasa-astronaut-ottawa-canada-red-blood-cell-medical-medic-medicine-research-doctor-guy-trudel-university-of-hospital-cincinnati-ohio",
            "urlToImage": "https://local12.com/resources/media/6ad8dde4-e9b3-492f-9f66-1de94c183880-large16x9_WKRCPRBLOODTHUR625PIC1.png?1642383109280",
            "publishedAt": "2022-01-17T01:34:57Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "WDIV ClickOnDetroit"
            },
            "author": "Dave Bartkowiak Jr.",
            "title": "Mary Sue Coleman issues message after being appointed interim president at University of Michigan - WDIV ClickOnDetroit",
            "description": "The University of Michigan Board of Regents named former school president Mary Sue Coleman as interim president after firing Dr. Mark Schlissel from his presidency.",
            "url": "https://www.clickondetroit.com/all-about-ann-arbor/2022/01/17/mary-sue-coleman-issues-message-after-being-appointed-interim-president-at-university-of-michigan/",
            "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/HV5UGQF36RDV5DPP6GPL5CIPSU.jpg?_a=ATABlcW0",
            "publishedAt": "2022-01-17T01:25:08Z",
            "content": "ANN ARBOR, Mich. The University of Michigan Board of Regents named former school president Mary Sue Coleman as interim president after firing Dr. Mark Schlissel from his presidency. Coleman held the … [+1249 chars]"
        }
    ]

    constructor(){
        super()
 
        this.state = {
            article:this.article,
            loading:false,
            page:1
        }
    }

async   componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=377bfcc923ba4ce0ae00ae4e2cd01cb7&pagesize=${this.props.pageSize}`
       this.setState({loading:true})
        let data = await  fetch(url)
       let parsedata = await   data.json();
       this.setState({loading:false})
      this.setState({article:parsedata.articles,totalResults:parsedata.totalResults})
       

    }

    onnextclick= async ()=>{
        console.log(this.state.page,Math.ceil((this.state.totalResults)/20))
        if((this.state.page+1) > Math.ceil(this.state.totalResults/20))
        {
              console.log("hit")
        }
        else{
                
                let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=377bfcc923ba4ce0ae00ae4e2cd01cb7&page=${this.state.page+1}&pagesize=${this.props.pageSize}`
                this.setState({loading:true})
                let data = await  fetch(url)
            let parsedata = await   data.json();
            this.setState({loading:false})
            this.setState({article:parsedata.articles})
            this.setState({
                page:this.state.page+1
            })
      }
    }
    onprevclick= async ()=>{
         console.log("prev ")
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=377bfcc923ba4ce0ae00ae4e2cd01cb7&page=${this.state.page-1}&pagesize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await  fetch(url)
       let parsedata = await   data.json();
       this.setState({loading:false})
      this.setState({article:parsedata.articles})
      this.setState({
        page:this.state.page-1
    })
    }
    render() {
      
        return (
            <div className='container my-3'>
                <h2 className='text-center'>NewsMonkey - Top Headlines </h2>
                  {this.state.loading &&  <Loading/>}
                <div className='row'>
               {!this.state.loading &&this.state.article.map((ele)=>{
                    
                   return <div className='col-md-4' key={ele.url}>
                <NewsItem title={ele.title} description={ele.description} imageUrl={ele.urlToImage} newsUrl={ele.url}/>
                </div>
                })}
                
               
                </div>
                <div className="d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" onClick={this.onprevclick} className="btn btn-dark" >&laquo; Prev</button>
                <button type="button"   disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} className="btn btn-dark" onClick={this.onnextclick} >Next &raquo; </button>
                </div>
            </div>
        )
    }
}

export default News
