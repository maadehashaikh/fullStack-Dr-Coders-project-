import axios from "axios";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const List = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8082/api/blog");
    setData(response.data.blogs);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      style: {
        whiteSpace: "normal",
        wordWrap: "break-word",
        maxWidth: "400px", // You can adjust the width as needed
        fontWeight: 500,
        fontSize: "20px",
        backgroundColor: "skyblue",
        border: "2px solid black",
      },
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
      style: {
        whiteSpace: "normal",
        wordWrap: "break-word",
        maxWidth: "800px", // You can adjust the width as needed
        fontSize: "16px",
        fontWeight: 500,
        marginLeft: "10px",
        backgroundColor: "skyblue",
        border: "2px solid black",
      },
      // Disable ellipsis truncation
      grow: 1, // Ensures this column takes up more space
      wrap: true, // Ensures that text will wrap
    },
  ];
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        style={{ tableLayout: "auto" }}
      />
    </div>
  );
};

export default List;
