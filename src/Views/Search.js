import React, { Component } from "react";
import {Link} from 'react-router-dom';
import * as BooksAPI from './../BooksAPI'
import Book from "../Components/Book";

//Provides functionality of searching books and assinging their respective shelf value while searching
class Search extends Component{
    //search query and books are set blank
    constructor(props){
        super(props);
        this.state={
            query:'',
            books:[]
        }
    }

    //Used below to get books and filter shelf values inorder to assign while searching
    async componentDidMount(){
        try{
            const books = await BooksAPI.getAll();
            this.props.addBooks(books);
            console.log(books);
        }catch(error){
            console.log(error)
        }
    }

    //handles searching and set books
    handleChange= async e=> {
        try{
            const query = e.target.value;
            this.setState({query})
            if(query.trim()){
                const results = await  BooksAPI.search(query)
                console.log(results)
                if(results.error){
                    this.setState({books:[]})
                }
                else{
                    this.setState({books:results})
                }
            }else{
                this.setState({books:[]})
            }
        }catch(error){
            console.log(error)
        }
    } 
    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              {/*<button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>*/}
              <Link className="close-search" to={"/"}>
              Close 
              </Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange= {this.handleChange} value = {this.state.query}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {this.state.books.length>0 && this.state.books.map(book => 
                  {
                      const foundShelf = this.props.books.find(
                          searchBook => searchBook.id === book.id
                      );

                      if (foundShelf) {
                          book.shelf = foundShelf.shelf
                      } else {
                          book.shelf = 'none'
                      }
					
                      console.log('found',foundShelf);
                      return(
                        <Book key= {book.id} {...book} moveBook={this.props.moveBook}/>
                        );
                    })
                  }
                {this.state.books.length===0 && <h1>No results found</h1>}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search;