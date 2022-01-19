import React, { Component } from 'react'

export class NewsItem extends Component {
  
    render() {
        let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
        return (
            <div className='my-3'>
               <div className="card" >
               <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger " style={{left:"90%",zIndex:1}}>
   {source}
    
  </span>
                        <img src={!imageUrl?"https://thevrsoldier.com/wp-content/uploads/2022/01/top-metaverse-stocks-2022.jpg?61e519e52efca":imageUrl}  className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p class="card-text "><small class="text-muted text-primary">by {author} published {date} ago</small></p>
                            <a href={newsUrl}  className="btn btn-sm btn-primary btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
