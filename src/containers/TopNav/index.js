import React from 'react'

import SearchApp from '../Search'

let Topnav = ({ summary }) => {
  let summaryList = null;
  const loadOptions = (summary) ? true : false;
  if (loadOptions) {
    summaryList = summary.docs;

  }
  return (

    <nav className="navbar navbar-dark fixed-top bg-dark ">
      <div className="container">
        <div className="navbar-left">
          <a className="navbar-brand" href="#">NY Times</a>
        </div>
        <div className="navbar-right">
          {loadOptions && 
          <SearchApp searchOptions={summaryList} 
          />}
          {loadOptions && <i class="fas fa-search"></i>}
        </div>
      </div>
    </nav>

  )
}


export default Topnav;
