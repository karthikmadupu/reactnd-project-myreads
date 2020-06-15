import React, { Component } from "react";
import * as BooksAPI from './../BooksAPI'

//A component to render book in Home,Search views, it has all attributes required for a book
class Book extends Component {

    //handles changes on options selection
    handleChange = async e => {
        try{
            const shelf = e.target.value;
            const books = this.props;
            const result = await BooksAPI.update(books,shelf);
            console.log(result)
            this.props.moveBook(books,shelf,result)
        }catch(error){
            console.log(e)
        }
    }
    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, 
                            backgroundImage: 
                            `url(${this.props.imageLinks?this.props.imageLinks.thumbnail:""})`
                        }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={this.handleChange} value= {this.props.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.authors? this.props.authors.join(", "): "No Author"}</div>
                </div>
            </li>
        )
    }
}

export default Book;