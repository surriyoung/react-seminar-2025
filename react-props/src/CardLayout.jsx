import styles from "./Card.module.css";

const CardLayout = ({ title, children }) => {
  console.log("children ::: ", children);
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div className="content">
        {children} {/* 여기에 전달된 children이 삽입됨 */}
      </div>
    </div>
  );
};

export default CardLayout;
