import { Col, Card } from 'react-bootstrap'
import ArticlesInterface from '../interfaces/articles'
import { useNavigate } from 'react-router-dom'
interface ArticleProps {
  articleData: ArticlesInterface
}
const Article = ({ articleData }: ArticleProps) => {
  const navigate = useNavigate()
  return (
    <>
      <Col xs={12} md={4}>
        <Card
          className="h-100 "
          onClick={() => {
            navigate('/Detail/' + articleData.id)
          }}
        >
          <Card.Img
            className="h-50"
            variant="top"
            src={articleData.image_url}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{articleData.title}</Card.Title>
            <Card.Text className="text-truncate">
              {articleData.summary}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}
export default Article
