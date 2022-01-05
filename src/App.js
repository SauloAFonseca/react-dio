import Item from "./components/Item";
import Card from "./components/Card";

// O retorno de App só pode ser um elemento. Encapsule os elementos dentro de uma div.

const App = () => {
  return (
    <>
      <h1>Hello, world!</h1>
      <ul>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </ul>
      <Card />
    </>
      
  )
};
export default App;



// *****************  Outras formas de declarar uma função ****************************

// function App() {
//   return (
//     <h1>Hello World</h1>
//   )
// }
// export default App;

// export default function App () {
//   return (
//     <h1>Hello World</h1>
//   )
// }