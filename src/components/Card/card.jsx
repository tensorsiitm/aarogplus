import './card.css'
import PropTypes from 'prop-types'

function Card({article}) {
    return (
        <div className="news-card">
            <img src={article.urlToImage} alt={article.title} />
            <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>

            </div>
        </div>
    )
}

Card.propTypes = {
    article: PropTypes.shape({
        urlToImage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
}

export default Card;