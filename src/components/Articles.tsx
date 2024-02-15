import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import ArticlesInterface from '../interfaces/articles'
import Article from './Article'

const Articles = () => {
  const [articles, setArticles] = useState<ArticlesInterface[]>([])

  const myFetch = async () => {
    try {
      const response = await fetch(
        'https://api.spaceflightnewsapi.net/v4/articles'
      )
      if (response.ok) {
        const allArticles = await response.json()
        setArticles(allArticles.results)
        console.log(allArticles.results)
      } else {
        throw new Error('errore nel recupero degli articoli')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    myFetch()
  }, [])
  return (
    <>
      <Container>
        <Row className="justify-content-center my-3 g-3 ">
          <h1 className="text-white">Our articles:</h1>
          {articles.map((singleArticle) => (
            <Article articleData={singleArticle} key={singleArticle.id} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Articles
