// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

// let apiKey='14bb6b52ea1b478d99a48aea74d963e3'
const App = ()=> {

  const apiKey=process.env.REACT_APP_NEWS_API

  const pageSize=15;
  const [progress, setProgress] = useState(0)


    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />
          <Routes>
        <Route excat path='/' element ={<News setProgress={setProgress} apiKey={apiKey} key="general"  title={'General'} pageSize={pageSize} country='&country=in' category='' source={'&domain=thehansindia'}/>} />
        <Route excat path='/business' element ={<News setProgress={setProgress} apiKey={apiKey} key="business" title={'business'} pageSize={pageSize} country='&country=in' category='&category=business' source={'&domain=ndtv'}/>} />
        <Route excat path='/health' element ={<News setProgress={setProgress} apiKey={apiKey} key="health" title={'health'} pageSize={pageSize} country='&country=in' category='&category=health' source={''} />} />
        <Route excat path='/science' element ={<News setProgress={setProgress} apiKey={apiKey} key="science" title={'science'} pageSize={pageSize} country='&country=in' category='&category=science' source={''}/>} />
        <Route excat path='/technology' element ={<News setProgress={setProgress} apiKey={apiKey} key="technology" title={'technology'} pageSize={pageSize} country='&country=in' category='&category=technology' source={'&domain=ndtv'}/>} />
        <Route excat path='/entertainment' element ={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" title={'entertainment'} pageSize={pageSize} country='&country=in' category='&category=entertainment' source={'&domain=ndtv'}/>} />
        <Route excat path='/sports' element ={<News setProgress={setProgress} apiKey={apiKey} key="sports" title={'sports'} pageSize={pageSize} country='&country=in' category='&category=sports' source={'&domain=ndtv'}/>} />
          </Routes>

        </Router>

      </div>
    )
  }



export default App;
