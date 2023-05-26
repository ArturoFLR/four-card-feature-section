import './App.module.scss';
import Card from './components/Card';
import { cardTitles, cardTexts, cardColors, cardPictures } from './components/CardProps';
import styles from './App.module.scss';

function App() {

	return (
		<>
			<main className={styles.mainContainer}>
				<div className={styles.textContainer}>
					<h1>Reliable, efficient delivery<br></br><span>Powered by Technology</span></h1>
					<p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
				</div>

				<div className={styles.cardsContainer}>
					<Card title={cardTitles.supervisor} text={cardTexts.supervisor} color={cardColors.supervisor} picture={cardPictures.supervisor} />
					<div className={styles.columnCards}>
						<Card title={cardTitles.team} text={cardTexts.team} color={cardColors.team} picture={cardPictures.team} />
						<Card title={cardTitles.karma} text={cardTexts.karma} color={cardColors.karma} picture={cardPictures.karma} />
					</div>
					<Card title={cardTitles.calculator} text={cardTexts.calculator} color={cardColors.calculator} picture={cardPictures.calculator} />
				</div>
			</main>
			<footer>
				<p className={styles.attribution}>
					Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
					Coded by <a href="#">Arturo López</a>.
				</p>
			</footer>
		</>
	);
}

export default App;
