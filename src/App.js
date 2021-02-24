// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const animeBoys = [
    "Hinata",
    "Kageyama",
    "Tsukki",
    "yamaguchi",
    "Sugawara",
    "Nishinoya",
    "Tanaka",
    "Daichi",
    "Ashahi",
  ];
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "50.50" },
    { name: "PDF Reader", price: "06.50" },
  ];
  const productName = products.map((product) => product.name);

  return (
    <div className="App">
      <header className="App-header">
        <p> I am react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {animeBoys.map((boys) => (
            <li>{boys}</li>
          ))}
          {products.map((product) => (
            <li>
              {product.name},{product.price}
            </li>
          ))}
        </ul>
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
      </header>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic user</h3>
      <ul>
        {users.map((user) => (
          <li>
            {user.name}, {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
    color: "red",
  };
  const { name, price } = props.product;

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>price:{price}</h2>
      <button>Buy now</button>
    </div>
  );
}
function Person(props) {
  const personStyle = {
    color: "orange",
    border: "1px solid yellow",
    margin: "5px 10px",
    padding: "5px 20px",
  };

  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <p>best {props.position}</p>
    </div>
  );
}
export default App;
