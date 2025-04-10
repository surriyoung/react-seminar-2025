import "./App.css";

import InfoCard from "./InfoCard";
import ProductCard from "./ProductCard";
import CardLayout from "./CardLayout";

// 1️⃣ props로 개별 값 전달하기
function App() {
  return (
    <>
      {/*
        ‘title’, ‘content’, ‘author’와 같은 데이터들이 HTML 속성처럼 작성되어 있음
        부모컴포넌트(App)가 자식컴포넌트(InfoCard)를 사용할 때 데이터 값을 전달
      */}
      <InfoCard
        title="Props in React"
        content="Props pass data from one component to another."
        author="Alice"
      />
      <InfoCard
        title="React Composition"
        content="Composition makes your components more reusable"
        // author="Charlie"
      />
    </>
  );
}

// 2️⃣ 객체를 스프레드 연산자를 사용해 props로 전달하기
// <InfoCard {...cardData1} />는 <InfoCard title="..." content="..." author="..." />와 동일
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

// 3️⃣ 배열 데이터를 map()으로 순회하며 컴포넌트를 반복 렌더링하기
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
//         // map(): 배열을 순회하며 컴포넌트를 반복 렌더링
//         <InfoCard
//           key={cardData.idx} // key: React가 각 컴포넌트를 구분할 수 있도록 고유한 값을 지정해야 함
//           {...cardData} // props: 스프레드 연산자로 cardData 객체의 속성들을 InfoCard의 props로 전달
//         />
//       ))}
//     </>
//   );
// }

// 4️⃣ 함수를 props로 전달하기
// 컴포넌트에 함수를 props로 전달하면, 자식 컴포넌트 내부에서 그 함수를 실행하여 동작을 커스터마이징할 수 있다.
// const App = () => {
//   const product = {
//     name: "Laptop",
//     price: 123.4567,
//   };

//   return <ProductCard {...product} formatPrice={(p) => `$${p.toFixed(2)}`} />;
// };

// 5️⃣ children으로 요소 전달하기
// children은 컴포넌트의 여는 태그(<>)와 닫는 태그(</>) 사이에 위치한 내용을 의미함
// 부모 컴포넌트에서 전달한 children은 자식 컴포넌트 내부에서 props.children으로 접근 가능함
// const App = () => (
//   <div>
//     {/* CardLayout의 여는 태그와 닫는 태그 사이의 내용이 children으로 전달됨 */}
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
