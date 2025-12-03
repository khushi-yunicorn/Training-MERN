// fetch
import { useEffect, useState } from "react";

function FetchExample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error("Fetch error:", error));
  }, []);

  return (
    <div>
      <h2>Fetch Data</h2>
      {data.map(post => <p key={post.id}>{post.title}</p>)}
    </div>
  );
}


// Axios
// GET REQUEST
import axios from "axios";
import { useEffect, useState } from "react";

function AxiosExample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => setData(response.data))
      .catch(error => console.error("Axios error:", error));
  }, []);

  return (
    <div>
      <h2>Axios Data</h2>
      {data.map(post => <p key={post.id}>{post.title}</p>)}
    </div>
  );
}

// POST REQUEST
axios.post("https://jsonplaceholder.typicode.com/posts", {
  title: "New Axios Post",
  body: "Hello world"
})
.then(res => console.log(res.data))
.catch(err => console.error(err));

