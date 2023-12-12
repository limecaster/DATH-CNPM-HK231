import React, { useState } from "react";
import "./SearchPage.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import BookCard from "./BookCard";

export default function SearchPage({ searchResults }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPublisher, setSelectedPublisher] = useState("");
  const categories = [
    "Self-help",
    "Chuyên ngành",
    "Tâm lý",
    "Kinh tế",
    "Văn học",
    "Truyện tranh",
    "Khoa học",
  ];
  const publishers = [
    "NXB Trẻ",
    "Nhã Nam",
    "NXB Kim Đồng",
    "NXB Phụ nữ",
    "First News - Trí Việt",
    "Saigon Books",
  ];

  const handleCheckboxClick = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };
  const handleCheckboxClick2 = (publisher) => {
    if (publisher === selectedPublisher) {
      setSelectedPublisher("");
    } else {
      setSelectedPublisher(publisher);
    }
  };

  return (
    <>
      <div className="search1">
        <section className="body">
          <div className="body1">
            <div className="filter">
              <div className="filter1">
                <div className="title1">
                  <div className="title2">
                    <h2 className="filter-by">Filter By</h2>
                  </div>
                  <div className="title-child" />
                </div>
                <div className="category">
                  <div className="sub-title1">
                    <div className="categories2">Categories</div>
                  </div>
                  <div className="conditions">
                    {categories.map((category) => (
                      <div className="checkbox1" key={category}>
                        <input
                          className="checkbox2"
                          type="checkbox"
                          checked={category === selectedCategory}
                          onClick={() => handleCheckboxClick(category)}
                        />
                        <div className="checkbox-text">{category}</div>
                      </div>
                    ))}
                  </div>
                  <div className="category-child" />
                </div>
                <div className="category">
                  <div className="sub-title1">
                    <div className="categories2">Nhà xuất bản</div>
                  </div>
                  <div className="conditions">
                    {publishers.map((publisher) => (
                      <div className="checkbox1" key={publisher}>
                        <input
                          className="checkbox2"
                          type="checkbox"
                          checked={publisher === selectedPublisher}
                          onClick={() => handleCheckboxClick2(publisher)}
                        />
                        <div className="checkbox-text">{publisher}</div>
                      </div>
                    ))}
                  </div>
                  <div className="publisher-child" />
                </div>
              </div>
            </div>
            <div className="content">
              <div className="header9">
                <div className="title3">
                  <div className="vn-hc4">
                    {selectedCategory && (
                      <div key={selectedCategory}>{selectedCategory}</div>
                    )}
                  </div>
                  <div className="display-noti">Hiển thị 1 của 53 sản phẩm</div>
                </div>
              </div>
              <div className="body2" />

              {/* <div className="row-1">
                <div class="card" className="book-in-search1">
                  <img
                    src={require("../../../assets/image/book.png")}
                    class="card-img-top"
                    alt=""
                    className="image1"
                  />

                  <div class="card-body">
                    <Link to="/bookdetail/1">
                      <div class="card-title" className="title4">
                        {searchResults[0]?.title}
                      </div>
                    </Link>
                    <p class="card-text" className="author1">
                      by {searchResults[0]?.authorName}
                    </p>

                    <button className="mn-btn1">
                      <div className="mn-btn-item" />
                      <div className="mn1">Mượn</div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="row-2"></div>
              <div className="row-3"></div> */}
              <div className="row-1">
                <Row>
                  {searchResults.map((book) => (
                    <Col key={book.ISBN} sm={12} md={6} lg={4} xl={3}>
                      <BookCard
                        ISBN={book.ISBN}
                        title={book.title}
                        authorName={book.authorName}
                        coverLink={book.coverLink}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
          <div className="footer1" />
        </section>
      </div>
    </>
  );
}
