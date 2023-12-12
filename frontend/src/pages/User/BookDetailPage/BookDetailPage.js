import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetailPage() {
  const { ISBN } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const book = books.find((b) => String(b.ISBN) === ISBN);
  if (!book) return null;

  return <div>{book.ISBN}</div>;
}
