import React, { Component } from "react";
export const myContxt = React.createContext();

//context inorder to pass data through components without manually passing props
class ContextProvider extends Component{
    constructor(){
        super();
        this.state ={
            books:[],
            currReading:[],
            wantToRead:[],
            read:[],
            //Filter books and assign to state elements
            addBooks : books => {
                const currReading = books.filter(book => book.shelf === "currentlyReading");
                const read = books.filter(book => book.shelf === "read");
                const wantToRead = books.filter(book => book.shelf === "wantToRead");
                this.setState({books,currReading,wantToRead,read});
            },
            
            //Move books between shelfs and set state calling addBooks with new updated Books
            moveBook: (book,newShelf,allShelfs) =>{
                const modifiedBooks = this.state.books.map(
                    allBooks=>{
                        const findId = allShelfs[newShelf].find(
                            bookID => bookID=== allBooks.id
                        );
                        if(findId){
                            allBooks.shelf = newShelf;
                        }
                        return allBooks;
                    }
                );
                this.state.addBooks(modifiedBooks)
            }
        }
    }
    //supplying all state using spread operator
    render(){
        return(
            <myContxt.Provider value={{ ...this.state}}>
                {this.props.children}
            </myContxt.Provider>
        )
    }

}

export default ContextProvider