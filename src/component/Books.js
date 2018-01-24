import React from 'react';
import { BooksDB } from '../data/books';
import { Book } from './book';
import { Cart } from './Cart'

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            cart: [],
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ books: BooksDB })
        }, 1)
    }

    addToCart = (book, index) => {
        const cart = this.state.cart;
        const books = this.state.books;

        const cartBook = cart.filter(c => books[index].id == c.id);
        if(cartBook.length){
            cartBook[0].count++;
        }else{
            const bookCopy = {...book};
            bookCopy.count = 1;
            cart.push(bookCopy);
        }
        --books[index].count;
        (books[index].count == 0) && books.splice(index, 1)
        this.setState({ cart, books })
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    {
                        this.state.books.map((book, i) => {
                            return <Book key={i} book={book} index={i} addToCart={this.addToCart} />
                        })
                    }
                </div>
                {
                    this.state.cart.length && <Cart cartData={this.state.cart} />
                }
            </div>
        )
    }
}
export default Books