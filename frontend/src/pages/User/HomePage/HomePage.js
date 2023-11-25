import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from '../../../components/Header/header';
import Welcome from '../../../components/Homepage/welcome';
import Trending from '../../../components/Homepage/trending';
import New from '../../../components/Homepage/new';
import Favor from '../../../components/Homepage/favor';
import Category from '../../../components/Homepage/category';
import Footer from '../../../components/Footer/footer';
import {BsFire} from 'react-icons/bs';
import {BsGraphUpArrow} from 'react-icons/bs';
import {BsFillHeartFill} from 'react-icons/bs';
import { FaBook } from "react-icons/fa6";
import { responsive } from "../../../components/Homepage/CarouselRespon"

import axios from "axios";
import React, { useEffect, useState } from "react";
// import { newData } from './newdata';
// import { favorData } from './favordata';
// import { categoryData } from './categorydata';

function Homepage() {
  const [books, setBooks] = useState([]);
  const displayedBooks = books.slice(1,22);

    useEffect(() => {
        axios.get('http://localhost:3001/books')
            .then(res => {
                console.log(res.data);
                setBooks(res.data)
            })
            .catch(err => {
              // console.error(err);
            });
    }, []);
    const newsData = displayedBooks.map((book) => <New title={book.title}  authorName={book.authorName}/>);
    const trendData = displayedBooks.map((book) => <Trending title={book.title}  authorName={book.authorName}/>);
    const favoriteData = displayedBooks.map((book) => <Favor title={book.title}  authorName={book.authorName}/>);
    const categData = displayedBooks.map((book) => <Category desc={book.desc}/>);
  // const newsData = newData.map((item) => <New name={item.name} url={item.imageurl} author={item.author}/>);
  // const trendData = trendingData.map((item) => <Trending name={item.name} url={item.imageurl} author={item.author}/>);
  // const favoriteData = favorData.map((item) => <Favor name={item.name} url={item.imageurl} author={item.author}/>);
  // const categData = categoryData.map((item) => <Category name={item.name} url={item.imageurl}/>);
  return (
    <>
      <Header />
        <div className="container">
          <Welcome />
          <div className="d-flex align-items-center justify-content-center" style={{color: '#02598B', fontSize: 50, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', paddingBottom: '30px', paddingTop: '100px'}}><BsFire/>Mới nhất</div>
          <Carousel responsive={responsive}>
            {newsData}
          </Carousel>
          <div className="d-flex align-items-center justify-content-center" style={{color: '#02598B', fontSize: 50, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', paddingBottom: '30px', paddingTop: '100px'}}><BsGraphUpArrow/>Phổ biến</div>
          <Carousel responsive={responsive}>
            {trendData}
          </Carousel>
          <div className="d-flex align-items-center justify-content-center" style={{color: '#02598B', fontSize: 50, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', paddingBottom: '30px', paddingTop: '100px'}}><BsFillHeartFill/>Ưa thích</div>
          <Carousel responsive={responsive}>
            {favoriteData}
          </Carousel>
          <div className="d-flex align-items-center justify-content-center" style={{color: '#02598B', fontSize: 50, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', paddingBottom: '30px', paddingTop: '100px'}}><FaBook/>Thể loại</div>
          <Carousel responsive={responsive}>
            {categData}
          </Carousel>
        </div>
      <Footer />
      
    </>
  );
}

export default Homepage;
