# MyReads Project
## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## About files

Components
    Book.js-- A component to render book in Home,Search views, it has all attributes required for a book
    SearchBtn.js-- A component  to provide Search Link/button inorder to goto search view
    Shelf.js-- A component to provide each book and render books in shelfs

Context
    ContextProvider.js-- created React context inorder to pass data through components without manually passing props
Views
    Home.js-- A component calling BooksAPI.getAll() to populate in each shelf
    Search.js--Provides functionality of searching books and assinging their respective shelf value while searching


App.js-- App component called in index component,I Used two components for view Home,Search
BooksAPI.js-- Provides API calling functionalities
index.js-- Uses App and renders it to root. Used BrowserRouter inorder to start routing

updated dependencies

