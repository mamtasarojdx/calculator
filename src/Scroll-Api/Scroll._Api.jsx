import React, { useEffect, useState } from "react";
import "./scroll.css";

function Scroll_Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Fetch the API data
      .then((res) => res.json())
      .then((data) => setData(data)) // Store the API data in the state variable
      // console.log(data);
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <section className="table2">
        <table class="table table-striped">
          <thead>
            <tr>
              <th style={{ position: "sticky", left: 0, backgroundColor: "white" }}>ID</th>
              <th style={{ position: "sticky", left: "34.5px", backgroundColor: "white" }}>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Phone</th>
              <th>Name</th>
              <th style={{ position: "sticky", right: "228px", backgroundColor: "white" }}>User Name</th>
              <th style={{ position: "sticky", right: 0, backgroundColor: "white" }}>Email</th>
            </tr>
            <tr></tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td style={{ position: "sticky", left: 0, backgroundColor: "white" }}>{item.id}</td>
                <td style={{ position: "sticky", left: "34.5px", backgroundColor: "white" }}>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>

                <td>{item.name}</td>
                <td>{item.username}</td>

                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.phone}</td>
                <td>{item.name}</td>
                <td style={{ position: "sticky", right: "228px", backgroundColor: "white" }}>{item.username}</td>
                <td style={{ position: "sticky", right: 0, backgroundColor: "white" }}>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
      </section>
    </>
  );
}

export default Scroll_Api;
