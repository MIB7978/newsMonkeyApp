import React, { Component } from 'react'

export class NewsItem extends Component {
  
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <div className='my-3'>
               <div className="card" style={{width: "18rem"}}>
                        <img src={!imageUrl?"https://thevrsoldier.com/wp-content/uploads/2022/01/top-metaverse-stocks-2022.jpg?61e519e52efca":imageUrl}  className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl}  className="btn btn-sm btn-primary btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
