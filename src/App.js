import React from 'react'
import {Switch,Route} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Views/Home'
import Search from './Views/Search'
import Provider,{ myContxt } from './Context/ContextProvider'

//using two components for view Home,Search
//using Context(ContextProvider) to supply props to views
class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider>
        <Switch>
          <Route exact path ={"/"} render ={()=>(
          <myContxt.Consumer>
            {context => <Home {...context} />}
          </myContxt.Consumer>
          )}/>
          <Route exact path ={"/search"} render ={()=>(
          <myContxt.Consumer>
            {context => <Search {...context} />}
          </myContxt.Consumer>
          )}/>
          {/*<Route exact path={"/search"} component ={Search}/>*/}
        </Switch>
        </Provider>
      </div>
    )
  }
}

export default BooksApp
