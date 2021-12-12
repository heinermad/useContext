import { useState } from 'react'

import React from 'react';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import UserContext from './contexts/UserContext';


const initialUser={
  id:1,
  name:'Luis',
  favoriteMovies:[1,2,3]
}








function App() {
  const[user,setUser]= useState(initialUser);

  const login=()=>{
    setUser(initialUser);
  }

  const logout=()=>{
    setUser(null);
  }


  const data={ user, login, logout}
  return (
    <div>
      <UserContext.Provider value={data}>
        <NavBar />
        <MovieList />
      </UserContext.Provider>
    </div >
        );
}



        export default App;
