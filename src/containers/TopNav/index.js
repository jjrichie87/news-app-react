import React from 'react';
import SearchApp from '../Search';
let Topnav = ({ summary }) => {
  let summaryList = null;
  const loadOptions = (summary) ? true : false;
  if (loadOptions) {
    summaryList = summary.docs;

  }
  return (

    <nav className="navbar navbar-dark fixed-top bg-dark ">
      <div className="container">
        <div className="navbar-left svg">
          <a href="#">Ny Times</a>
        </div>
        <div className="navbar-right">
          {loadOptions && 
          <SearchApp searchOptions={summaryList} 
          />}
          
        </div>
      </div>
    </nav>

  )
}


export default Topnav;
