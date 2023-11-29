import './JournalItem.css';

function JournalItem({ title, post, date }) {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);

	let text = post.slice(0, 30);
	if (text.length < post.length) {
		text += '...';
	}

	return (
		<>
			<h2 className="journal-item__header">{title}</h2>
			<h2 className="journal-item__body">
				<div className="journal-item__date">{formatedDate}</div>
				<div className="journal-item__text">{text}</div>
			</h2>
		</>
	);
}

export default JournalItem;
