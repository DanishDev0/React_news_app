import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const News = (props) => {

  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(false)


            const captialize = (string) => {
              return string.charAt(0).toUpperCase() + string.slice(1)
            }

                const updateNews = async () => {
                  props.setProgress(10)
                  // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
                  const url = `https://newsdata.io/api/1/news?apikey=${props.apiKey}${props.country}${props.source}${props.category}`
                  setLoading(true)
               fetch(url).then((res)=>{
                  return res.json();
               })
               .then((news)=>{
                  // console.log(news)
                  props.setProgress(30)

                  setArticles(news.results)
                  setTotalResults(news.totalResults)
                  setLoading(false)
                  props.setProgress(100)

                  toast.success('Latest news are loaded', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
               })
               .catch((e)=>{
                console.log('er')

                toast.error('Api Did not Response', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  });
               });

                  // let news = await response.json();
                  // props.setProgress(10)

                  
             
                  
                  // console.log(articles);

                }

  useEffect(() => {

      document.title=`${captialize(props.title)} -News Break`
   updateNews()  // eslint-disable-next-line
  },[]) 




  const fetchMoreData = async () => {
    setPage(page + 1)

    // const url1 = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
    const url1 = `https://newsdata.io/api/1/news?apikey=${props.apiKey}${props.country}${props.source}${props.category}&page=${page+1}`;
    let response = await fetch(url1);
    let news = await response.json();
    // console.log(news);
    setArticles(articles.concat(news.results))
    setTotalResults(news.totalResults)  
    setLoading(false)
  
  }




    return (
      <>
        <h1 className='text-center'style={{margin:"10px",marginTop:'90px'}}>
          News Break - Top {captialize(props.title)} Headlines</h1>
          <ToastContainer />

        {loading && <Spinner />}


        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={articles.length !== totalResults?<Spinner/>:''}

        >
          <div className="container">

            <div className="row">

              {articles.map((element, index) => {
                return <div className="col-md-6 col-lg-4 my-3" key={index}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ''} description={element.description ? element.description.slice(0, 88) : ''}
                    imageUrl={element.image_url} newsUrl={element.link} author={element.creator} date={element.pubDate} source={element.source_id} />
               
                </div>


              })}

            </div>
          </div>

        </InfiniteScroll>

        </>

       

    )
  }

  News.defaultProps = {
    country: 'in',
    pageSize: 8,
    // category:"general"
  }
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string}


export default News;
