import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import Nav from './components/Nav';
import LoadingBar from 'react-top-loading-bar';
import ScrollToTop from "react-scroll-to-top";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home';
 
export default class App extends Component {
  pageSize= 6;
  apiKey = process.env.REACT_APP_NEWS_API

  state={
    progress:0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
   
    return (
      <div>
          <ScrollToTop
        smooth
        // viewBox="0 0 24 24"
        // svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
     
        
      />
         <LoadingBar
         height={3}
        color='#f11946'
        progress={this.state.progress}
    
      />
      
        <Router> 
        {/* <NavBar  /> */}
        <Home/>
       
       
        <Nav/>
       
  
        <Routes>
       
          <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="General"  pageSize={this.pageSize} country="in" category="General"/>}/>  
          <Route exact path='/Business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Business"  pageSize={this.pageSize} country="in" category="Business"/>}/>  
          <Route exact path='/Entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Entertainment"  pageSize={this.pageSize} country="in" category="Entertainment"/>}/>  
          <Route exact path='/Health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Health"  pageSize={this.pageSize} country="in" category="Health"/>}/>  
          <Route exact path='/Science' element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="Science" pageSize={this.pageSize} country="in" category="Science"/>}/>  
          <Route exact path='/Sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Sports"  pageSize={this.pageSize} country="in" category="Sports"/>}/>  
          <Route exact path='/Technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Technology"  pageSize={this.pageSize} country="in" category="Technology"/>}/>  
             
        </Routes>
       
        </Router>
       
        </div>
    )
  }
}

 