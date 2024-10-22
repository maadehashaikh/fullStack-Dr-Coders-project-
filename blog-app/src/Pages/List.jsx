import axios from "axios";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const List = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8082/api/blog");
      setData(response.data.blogs);
    } catch (error) {
      console.log("Error fetching data", error);
      toast.error("Failed to fetch blogs");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = (id) => {
    // Add your update functionality here
    // toast.info(`Update blog with id: ${id}`);
  };

  const handleDelete = async (id) => {
    console.log("Delete button clicked, ID:", id); // Debugging log
    try {
      const response = await axios.delete(
        `http://localhost:8082/api/blog/${id}`
      );
      console.log(response); // Log the response for debugging
      if (response.data.success) {
        toast.success(response.data.message);
        fetchData(); // Refresh the data after deletion
      } else {
        toast.error("Failed to delete blog");
      }
    } catch (error) {
      console.log("Error during deletion:", error); // Debugging log
      toast.error("Error occurred during deletion");
    }
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      style: {
        whiteSpace: "normal",
        wordWrap: "break-word",
        maxWidth: "400px",
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
        maxWidth: "1200px",
        fontSize: "16px",
        fontWeight: 500,
        marginLeft: "10px",
        backgroundColor: "skyblue",
        border: "2px solid black",
      },
      grow: 1,
      wrap: true, // Ensures text wrapping
    },
    {
      name: "Actions",
      style: {
        whiteSpace: "normal",
        wordWrap: "break-word",
        maxWidth: "200px",
        fontSize: "16px",
        fontWeight: 500,
        marginLeft: "10px",
        backgroundColor: "skyblue",
        border: "2px solid black",
      },
      name: "Title",

      cell: (row) => (
        <>
          <Link
            to={`blog/${row._id}`}
            className="border-2 border-black p-2 rounded bg-blue-500 text-white"
          >
            Update
          </Link>
          <button
            onClick={() => handleDelete(row._id)}
            className="border-2 border-black p-2 rounded ml-2 text-white bg-red-500"
          >
            Delete
          </button>
        </>
      ),
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
