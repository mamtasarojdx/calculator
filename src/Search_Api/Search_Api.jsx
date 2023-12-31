import React, { useEffect, useState } from "react";
import "./Search_Page.css";

function Search_Api() {
  const [data, setData] = useState([]);
  const [viewMore, setViewMore] = useState([false]);
  // const [title,setTitle] = useState([]);
  // const [userId,setUserId] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [searchText, setSearchText] = useState("");

  // The API data will be stored here
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // Fetch the API data
      .then((res) => res.json())
      .then((data) => setData(data)) // Store the API data in the state variable
      // console.log(data);
      .catch((error) => console.log(error));
  }, []);
  console.log(data);

  

  const handleTitle = () => {
    if (isNaN(searchText)) {
      fetch(`https://jsonplaceholder.typicode.com/posts?title=${searchText}`) // Fetch the API data
        .then((res) => res.json())
        .then((data) => setData(data)) // Store the API data in the state variable
        // console.log(data))
        .catch((error) => console.log(error));
    } else {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${searchText}`) // Fetch the API data
        .then((res) => res.json())
        .then((data) => setData(data)) // Store the API data in the state variable
        // console.log(data)
        .catch((error) => console.log(error));
    }
  };

  
  useEffect(() => {
    if (currentPage === 10) {
      document.getElementById("next").style.cursor = "not-allowed";
      document.getElementById("next").style.color = "Orange";
      document.getElementById("prev").style.cursor = "pointer";
      document.getElementById("prev").style.color = "black";
    } else if (currentPage === 1) {
      document.getElementById("prev").style.cursor = "not-allowed";
      document.getElementById("prev").style.color = "Orange";
      document.getElementById("next").style.cursor = "pointer";
      document.getElementById("next").style.color = "black";
    } else {
      document.getElementById("next").style.cursor = "pointer";
      document.getElementById("next").style.color = "black";
      document.getElementById("prev").style.cursor = "pointer";
      document.getElementById("prev").style.color = "black";
    }
  }, [currentPage]);


  function Click() {
    setViewMore(!viewMore);
  }

  let pages = [];
  for (let i = 1; i <= Math.ceil(data.length / postPerPage); i++) {
    pages.push(i);
  }

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  function prevClick() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextClick() {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1);
    }
  }

  function firstClick() {
    setCurrentPage(1);
  }

  function lastClick() {
    setCurrentPage(10);
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredArray = data.filter((item) => {
    if (isNaN(searchText)) {
      return item.title.toLowerCase().includes(searchText.toLowerCase());
    } else {
      return item.userId.toString() === searchText;
    }
  });

  return (
    <>
      <input type="text" placeholder="Search here..." className="search-1" onChange={handleSearch} />
      <button type="button" onClick={handleTitle} className="submit-btn">
        Submit
      </button>
      <section className="search-table">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>User_ID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
            <tr></tr>
          </thead>
          <tbody>
            {searchText
              ? filteredArray.map((item) => (
                  <tr key={item.id}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>

                    <td>{viewMore ? `${item.body.slice(0, 25)}...` : item.body}</td>
                    <td>
                      <button type="button" onClick={Click} style={{ borderRadius: "5px" }}>
                        View
                      </button>
                    </td>
                  </tr>
                ))
              : currentPost.map((item) => (
                  <tr key={item.id}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>

                    <td>{viewMore ? `${item.body.slice(0, 25)}...` : item.body}</td>
                    <td>
                      <button type="button" onClick={Click} style={{ borderRadius: "5px" }}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        <br />

        <div className="pag-1 d-inline-flex fw-bold m-1">
          {pages.map((page, index) => {
            return (
              <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? "activePage text-decoration-underline " : "pag1"}>
                {page}
              </button>
            );
          })}
        </div>

        <div className="d-inline-flex pag-2">
          <button type="button"  id="prev" className="bt2 fw-bold c" onClick={prevClick} style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}>
            PREV
          </button>
          <button type="button" className="bt2 fw-bold" onClick={firstClick} style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}>
            FIRST
          </button>
          <button type="button" className="bt2 fw-bold" onClick={lastClick} style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}>
            LAST
          </button>
          <button type="button" id="next" className="bt2 fw-bold" onClick={nextClick} style={{ border: "1px solid rgba(228, 219, 230, 0.399)" }}>
            NEXT
          </button>
        </div>
      </section>
    </>
  );
}

export default Search_Api;
