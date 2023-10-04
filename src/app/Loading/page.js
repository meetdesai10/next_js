import React from "react";
async function data() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}
setTimeout(data, 5000);
export default async function page() {
  let userData = await data();
  return (
    <div>
      <h1>Users List</h1>
      {userData.map((item, i) => {
        return (
          <div key={i}>
            <h3 style={{ color: "blue" }}>user details</h3>
            <h2>
              Name {item.firstName} {item.LastName}
            </h2>
            <h2>{item.maidenName}</h2>
            <h2>{item.age}</h2>
            <h2>{item.gender}</h2>
            <h2>{item.email}</h2>
            <h2>{item.phone}</h2>
            <h2>{item.username}</h2>
            <h2>{item.password}</h2>
            <h2>{item.brithdate}</h2>
            <h2>{item.bloodGroup}</h2>
            <h2>{item.height}</h2>
            <h2>{item.weight}</h2>
            <h2>{item.eyeColor}</h2>
          </div>
        );
      })}
    </div>
  );
}
