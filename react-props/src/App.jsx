import "./App.css";

import InfoCard from "./InfoCard";
import ProductCard from "./ProductCard";
import CardLayout from "./CardLayout";

// props로 값 전달하기
// function App() {
//   return (
//     <>
//       <InfoCard
//         title="Props in React"
//         content="Props pass data from one component to another."
//         author="Alice"
//       />
//       <InfoCard
//         title="React Composition"
//         content="Composition makes your components more reusable"
//         // author="Charlie"
//       />
//     </>
//   );
// }

//스트럭쳐링 사용하기
// const cardData1 = {
//   title: "Props in React",
//   content: "Props pass data from one component to another.",
//   author: "Alice",
// };
// const cardData2 = {
//   title: "React Composition",
//   content: "Composition makes your components more reusable",
// };

// function App() {
//   return (
//     <>
//       <InfoCard {...cardData1} />
//       <InfoCard {...cardData2} />
//     </>
//   );
// }

// 반복되는 데이터를 배열에 담기
// const cards = [
//   {
//     idx: 1,
//     title: "Props in React",
//     content: "Props pass data from one component to another.",
//     author: "Alice",
//   },
//   {
//     idx: 2,
//     title: "React Composition",
//     content: "Composition makes your components more reusable",
//   },
// ];

// function App() {
//   return (
//     <>
//       {cards.map((cardData) => (
//         <InfoCard key={cardData.idx} {...cardData} />
//       ))}
//     </>
//   );
// }

// //함수를 props로 전달하기
// const App = () => {
//   const product = {
//     name: "Laptop",
//     price: 123.4567,
//   };

//   return <ProductCard {...product} formatPrice={(p) => `$${p.toFixed(2)}`} />;
// };

//children
// const App = () => (
//   <div>
//     <CardLayout title="About">
//       <p>Props of Components</p>
//     </CardLayout>

//     <CardLayout title="Details">
//       <ul>
//         <li>Feature A</li>
//         <li>Feature B</li>
//         <li>Feature C</li>
//       </ul>
//     </CardLayout>

//     <CardLayout title="Contact">
//       <p>Email: example@example.com</p>
//       <p>Phone: 123-456-7890</p>
//     </CardLayout>
//   </div>
// );

export default App;
