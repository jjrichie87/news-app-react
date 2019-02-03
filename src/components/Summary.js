import React from 'react'
import CARD from '../containers/Card'
//CARD is a reusable container.
const Summary = ({ dateVal, isFetching, summary }) => {
  //console.log(summary)
  let newsList = "";
  const loadDocs = (summary) ? true : false;
  //console.log(loadDocs)
  if (loadDocs) {
    newsList = summary.docs;
  }
  return (

    <div >
      <div className="float-right">{dateVal}</div>
      <h1>Latest News</h1>
      <h2>News, reports , including commentary and archival articles published in The New York Times.</h2>
      <div className="accordion" id="accordionCtr">
        {loadDocs &&
          newsList.map((item, index) =>
            <CARD key={index}
              headline={item.headline.main}
              snippet={item.lead_paragraph}
              imgURL={(item && item.multimedia && item.multimedia[2]) ? item.multimedia[2].url : null}
              articleURL={item.web_url}
              articleNo={index}
            />
          )
        }
      </div>
    </div>
  )

};


export default Summary;
