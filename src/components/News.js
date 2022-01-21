import React, {useEffect,useState} from 'react'
import { Loading } from './Loading'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    document.title= capitalizeFirstLetter(props.category)
    const updatepage = async () => {
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=377bfcc923ba4ce0ae00ae4e2cd01cb7&page=${page}&pagesize=${props.pageSize}`
        props.setProgress(30)
        let data = await fetch(url)
        let parsedata = await data.json();
        setLoading(false);
        setArticle(parsedata.articles)
        setTotalResults(parsedata.totalResults)
        props.setProgress(100)
    }
 
    useEffect(() => {     
      updatepage()
      //eslint-disable-next-line
    },[]);
    

   const fetchMoreData = async ()=>{

       
      
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=377bfcc923ba4ce0ae00ae4e2cd01cb7&page=${page+1}&pagesize=${props.pageSize}`
        setPage(page+1)
        let data = await fetch(url)
        let parsedata = await data.json();
        setArticle(article.concat(parsedata.articles))
        setTotalResults(parsedata.totalResults)
    }
    

        return (
            <>

                <h2 className='text-center my-3'>NewsMonkey - Top {capitalizeFirstLetter(props.category)}  Headlines </h2>
                {loading  &&  <Loading/>}

                <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length!==totalResults}
          loader={<Loading/>}
           >
            <div className='container my-3'>
                <div className='row'>   
                    {article.map((ele) => {

                        return <div className='col-md-4' key={ele.url}>
                            <NewsItem title={ele.title} description={ele.description} author={ele.author} imageUrl={ele.urlToImage} source={ele.source.name} newsUrl={ele.url} date={ele.publishedAt} />
                        </div>
                    })}
                    </div>
                </div>
                </InfiniteScroll>
            </>
        )
    
}

export default News

 News.defaultProps = {
    pageSize: 10,
    country: "in",
    category: "general",
}
