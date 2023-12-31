import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/books"; // Replace with your actual API URL

const api = axios.create({
  baseURL: API_URL,
});

const apiEndpoints = {
  getAllBook: async () => {
    const accessToken = localStorage.getItem("token");

    try {
      const response = await api.get("/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // console.log("Customer:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching book:", error);
      throw error;
    }
  },

  insertBook: async (newBook, image, genre) => {
    try {
      const formData = new FormData();

      formData.append("image", image);
      formData.append("ISBN", newBook.ISBN);
      formData.append("title", newBook.title);
      formData.append("desc", newBook.desc);
      formData.append("authorName", newBook.authorName);
      formData.append("publisher", newBook.publisher);
      formData.append("publishDate", newBook.publishDate);
      formData.append("coverType", newBook.coverType);
      formData.append("language", newBook.language);
      formData.append("noPages", newBook.noPages);

      formData.append("copyNumber", newBook.copyNumber);
      formData.append("genres", genre);

      console.log("Form Data:", [...formData]);

      const accessToken = localStorage.getItem("token");

      const response = await api.post("/", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error inserting book:", error);
      throw error;
    }
  },

  updateBook: async (newBook, image, genre) => {
    try {
      const formData = new FormData();
      if (image) {
        formData.append("image", image);
      } else {
        formData.append("coverlink", newBook.coverLink);
      }
      if (genre) {
      }
      formData.append("ISBN", newBook.ISBN);
      formData.append("title", newBook.title);
      formData.append("desc", newBook.desc);
      formData.append("authorName", newBook.authorName);
      formData.append("publisher", newBook.publisher);
      formData.append("publishDate", newBook.publishDate);
      formData.append("coverType", newBook.coverType);
      formData.append("language", newBook.language);
      formData.append("noPages", newBook.noPages);
      formData.append("copyNumber", newBook.copyNumber);
      // formData.append("genres", newBook.genres);
      formData.append("genres", genre);
      console.log("Form Data:", [...formData]);
      const accessToken = localStorage.getItem("token");
      const response = await api.put("/", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error updating customer:", error);
      throw error;
    }
  },

  deleteBook: async (ISBN) => {
    try {
      console.log("Deleting:", ISBN);
      const accessToken = localStorage.getItem("token");
      const response = await api.delete(`/${ISBN}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error deleting book:", error);
      throw error;
    }
  },
};

export default apiEndpoints;
