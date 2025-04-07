import styles from "./Card.module.css";

const InfoCard = ({
  title = "(No Title)",
  content,
  author = "Anonymous", // 기본값 설정이 가능하다
}) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <p>{content}</p>
    <p>Author: {author}</p>
  </div>
);

export default InfoCard;
