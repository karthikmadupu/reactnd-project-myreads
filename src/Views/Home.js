import React, { Component } from "react";
import Shelf from './../Components/Shelf'
import SearchBtn from './../Components/SearchBtn'
import * as BooksAPI from './../BooksAPI'

//A component calling BooksAPI.getAll() to populate in each shelf
class Home extends Component{

    //books are fetched
    async componentDidMount(){
        try{
            const books = await BooksAPI.getAll();
            this.props.addBooks(books);
            console.log(books);
        }catch(error){
            console.log(error)
        }
    }

    render(){
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {/**Render each shelf with filtered books from Context */}
                <div className="list-books-content">
                <Shelf title ="Currently Reading" books = {this.props.currReading} moveBook={this.props.moveBook}/>
                <Shelf title ="Want to read" books = {this.props.wantToRead} moveBook={this.props.moveBook}/>
                <Shelf title ="Read" books = {this.props.read} moveBook={this.props.moveBook}/>
                </div>
                <SearchBtn/>
            </div>
        )
    }
}

export default Home;