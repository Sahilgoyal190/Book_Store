import React from 'react';



export const Book = ({ book, index, addToCart }) => {
    return (
        <div className="col-md-3 book">
            <h3>Title: {book.title}</h3>  
            <div>Language: {book.language}</div>
            <div>Pages: {book.pages}</div>
            <div>Year: {book.year}</div>
            <div>Country: {book.country}</div>
            <div>Author: {book.author}</div>
            <div>Inventory: {book.count}</div>

            <input className="btn btn-primary" type="button" value="Add To Cart" onClick={()=>addToCart(book,index)}/>
        </div>
    )
}   
