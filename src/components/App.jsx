import { useState, useEffect } from "react";
import Header from "./Header";
import Axios from "axios";
import Note from "./Note";
import Form from "./Form";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://notekeepr-production.up.railway.app/api/notes")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  });

  function saveData(note) {
    Axios.post("https://notekeepr-production.up.railway.app/api/notes", note).catch((err) =>
      console.log(err)
    );
  }

  function deleteData(id) {
    Axios.delete("https://notekeepr-production.up.railway.app/api/notes/" + id).catch(
      (err) => console.log(err)
    );
  }

  return (
    <div>
      <Header />
      <Form onsubmit={saveData} />
      {data.map((item, index) => {
        return (
          <Note
            title={item.title}
            content={item.content}
            key={index}
            id={item._id}
            ondelete={deleteData}
          />
        );
      })}
    </div>
  );
}
