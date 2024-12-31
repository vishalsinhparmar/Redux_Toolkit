import React, { useState, useCallback } from "react";

function FetchData() {
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    console.log("the data is fetched")

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },[]);
//   fetchData();
  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
      </ul>
    </div>
  );
}

export default FetchData;
