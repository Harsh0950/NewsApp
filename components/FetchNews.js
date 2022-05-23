import React, { useState } from 'react'
import {Card} from 'react-bootstrap'
import axios from 'axios'
import '../pic.webp'
function FetchNews() {

  const [news, setNews] = useState([])

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className='btn btn-dark' onClick={fetchNews}>View News</button>
          </div>
        </div>
      </div>

    <div className="container">
        <div className="row">
        <h1 className='text-center text-white bg-danger'>News App</h1>
          {
            news.map((value) => {
              return (
                <Card style={{ width: '20rem',height:'400px',overflowX:'hidden' }} className='bg-black m-5'>
                    <Card.Img variant="top" style={{height:'150px',marginTop:'10px'}} src={value.urlToImage==null?"pic.webp":value.urlToImage} />
                        <Card.Body>
                            <Card.Title className='text-danger'>{value.title}</Card.Title>
                                <Card.Text className='text-white'>{value.description==null?"This is the news given to CNN News received from the sources":value.description}
                                </Card.Text>
                        </Card.Body>
                </Card>
              );
            })
          }
        </div>
    </div>
    </>
  )
}

export default FetchNews
