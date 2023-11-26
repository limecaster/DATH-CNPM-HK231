import React from 'react';
import Book from '../../assets/image/book.png'
function Category(props) {
    return (
        <div className="card" style={{marginRight: '5%', marginLeft: '5%', boxShadow: '2px 6px 8px 0 rgba(22, 22, 26, 0.18)'}}>
            <img className="product--image" src={Book} alt="img"/>
            <div className="d-flex align-items-center justify-content-center" style={{width: '100%', color: '#324552', fontSize: 18, fontFamily: 'Work Sans', fontWeight: '600', wordWrap: 'break-word'}}>{props.desc}</div>
        </div>
        
    );
}

export default Category;
