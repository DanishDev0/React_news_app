import React from 'react'

const NewsItem =(props)=>{


    let {title, description, imageUrl, newsUrl, author, date,source} = props;

    return (
      <div>
        <div className="card">
            <div className='d-flex justify-content-end position-absolute end-0'>
            <span className=" badge rounded-pill bg-danger">
              {source}
            </span>
            </div>
          <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/22/10/ios-16-1-release-date/-952x498w6/gsmarena_000.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>

            <p className="card-text">{description}....</p>
            <p className="card-text"><small className="text-danger">By {!author ? "Unknown" : author} Last updated On {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem