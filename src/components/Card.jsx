import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = ({title, text, color, picture}) => {
	return (
		<div className={`${styles.cardContainer} ${styles[color]}`}>
			<div className={styles.textContainer}>
				<h2 className={styles.heading}>{title}</h2>
				<p className={styles.paragraph}>{text}</p>
			</div>

			<div className={styles.imageContainer}>
				<img src={picture} alt="icon"></img>
			</div>

		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
};

export default Card;
