import Buttons from "./Buttons";
async function productslist() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function page() {
  let Api = await productslist();
  return (
    <div>
      <h1>User List</h1>
      {Api.map((item, i) => {
        return (
          <div key={i}>
            <h3>Full name: {item.title}</h3>
            <Buttons Price={item.price}/>
          </div>
        );
      })}
    </div>
  );
}
