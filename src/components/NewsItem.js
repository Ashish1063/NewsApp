import React, { Component } from 'react'

export class NewsItem extends Component {



  render() {
    let { title, description, imageUrl, url, date, author, source } = this.props;
    return (
      <div className='NewsItem my-3'>
        <div className="card"  >
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0"
          }}>
            <span class="badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
              {source}
            </span>
          </div>
          <img src={!imageUrl ? "https://www.freeiconspng.com/uploads/newspaper-icon-28.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...

            </h5>
            <p className="card-text"> {description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem