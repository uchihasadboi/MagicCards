import PropTypes from 'prop-types';
import HoverRating from './components/feedback';


function Card(props) {
    return (
        <div class="card">
            <div class="card-top">
                <h2>{props.cardName}</h2>
                <p className='Rating'><HoverRating></HoverRating></p>
                <a href="/">{props.cardLink}</a>             
            </div>
            <div class="card-body">
                <img src={props.cardImage} alt={""}></img>
            </div>
            <div>
                <p className='gameInfo'>{props.cardDescription}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    cardName: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardLink: PropTypes.string.isRequired
  }

export default Card