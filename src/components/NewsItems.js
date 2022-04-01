import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let { title, discription, imageUrl, newsUrl, author, date , source } = this.props;
    return (

      <div>
        <div className="card  " style={{ margin: 'auto', width: '25rem' }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
             {this.props.source.name}
              <span className="visually-hidden">unread messages</span>
            </span>
            <h5 className="card-title">{title}<span className="badge bg-secondary">New</span></h5>
            <p className="card-text">{discription}</p>
            <p className="card-text"><small className="text-muted"> BY {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
