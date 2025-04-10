import styles from "./Card.module.css";

// props란
// 컴포넌트에 전달되는 '속성'을 의미한다.
// 부모컴포넌트가 자식컴포넌트에 데이터를 전달할 때 사용한다.

// props라는 매개변수를 통해 정보들을 가져오고 해당 객체에 키로 접근하여 데이터를 사용
const InfoCard = (props) => (
  <div className={styles.card}>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <p>Author: {props.author}</p>
  </div>
);

//구조분해할당을 사용해서 코드를 더 간결하게 작성할 수 있음
// const InfoCard = ({ title, content, author }) => (
//   <div className={styles.card}>
//     <h2>{title}</h2>
//     <p>{content}</p>
//     <p>Author: {author}</p>
//   </div>
// )

//구조분해를 사용하면 기본값설정도 가능함
// const InfoCard = ({ title = "(No Title)", content, author = "Anonymous" }) => (
//   <div className={styles.card}>
//     <h2>{title}</h2>
//     <p>{content}</p>
//     <p>Author: {author}</p>
//   </div>
// );

export default InfoCard;
