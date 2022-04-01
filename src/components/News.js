import React, { Component } from 'react'
import Spinner from './Spinner';
import NewsItems from './NewsItems'


export default class News extends Component {
  articles = []

  constructor(props) {
    super(props);
    // console.log('hi am the constructor of news')
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }

  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6b75b5fa8ceb4c0e94eb50e65c5377d6&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedata = await data.json()
    console.log(parsedata)
    this.setState({
      page: this.state.page,
      articles: parsedata.articles,
      loading: false
    })
  }
  async componentDidMount() {
     this.updateNews()
  }
  handleprevClick = async () => {
    this.setState({ page: this.state.page - 1 })
    this.updateNews()
  }

  handlenextClick = async () => {
    this.setState({ page: this.state.page + 1 })
    this.updateNews()
  }



  render() {
    return (
      <div>
        <h1 className='mb-5'>Top Headlines of {this.props.category} - By KhabariNews </h1>
        {this.state.loading && <Spinner />}
        <div className="row md-2 text-center" >
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-sm-4 " key={element.url} >
              <NewsItems title={element.title} discription={element.discription} imageUrl={!element.urlToImage ? 'https://images.hindustantimes.com/tech/img/2022/03/29/1600x900/matt-houghton-q_X-lyHxcdk-unsplash_1648564105696_1648564140683.jpg' : element.urlToImage}
                newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source} />
            </div>
          })}



        </div>
        <div className='container d-flex justify-content-between mb-5'>
          <button disabled={this.state.page <= 1} type="button" onClick={this.handleprevClick} className="btn btn-dark">&larr;previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handlenextClick} className="btn btn-dark">Next &rarr;</button>

        </div>
      </div>
    )
  }
}
