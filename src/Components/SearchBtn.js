import React, { Component } from "react";
import {Link} from 'react-router-dom';

//A component  to provide Search Link/button inorder to goto search view
class SearchBtn extends Component{
    render(){
        return(
            <div className="open-search">
              {/*<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>*/}
              <Link to ={"/search"}>Add a book</Link> 
            </div>
        )
    }
}

export default SearchBtn;