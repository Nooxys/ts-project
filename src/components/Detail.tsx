import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import ArticlesInterface from '../interfaces/articles'
import { Link } from 'react-router-dom'
const Detail = () => {
  const params = useParams().articleID
  const [article, setArticle] = useState<ArticlesInterface | null>(null)

  const myFetch = async () => {
    try {
      const response = await fetch(
        'https://api.spaceflightnewsapi.net/v4/articles/' + params
      )
      if (response.ok) {
        const oneArticle = await response.json()
        setArticle(oneArticle)
        console.log(oneArticle)
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
        <Row className="justify-content-center">
          <Link to={'/'} className="text-black">
            <h1 className="my-5 text-white ">Back home!</h1>
          </Link>
          <Col xs={12} md={8}>
            <Card>
              <Card.Img
                className="h-50"
                variant="top"
                src={article?.image_url}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{article?.title}</Card.Title>
                <Card.Text>{article?.summary}</Card.Text>
                <Card.Text>
                  from: {article?.news_site} -
                  {article?.published_at.toLocaleString().slice(0, 10)}
                </Card.Text>
                <Card.Text>FULL ARTICLE IN OUR MAIN WEBSITE!</Card.Text>
                <a href="https://europeanspaceflight.com/sidereus-space-complete-short-duration-hot-fire-test-campaign/">
                  <Card.Text>HERE!</Card.Text>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Detail
