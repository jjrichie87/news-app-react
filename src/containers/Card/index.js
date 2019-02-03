import React from 'react'
import IMG from '../Img'
//IMG is resuable component,accepts two params src and alt.

let CARD = ({
  headline,
  snippet,
  imgURL,
  articleURL,
  articleNo
}) => (

    <div className="card">
      <div className="card-header" id="headingOne" data-toggle="collapse" data-target={"#collapse" + articleNo} aria-expanded="true" aria-controls="collapseOne">
        <h5 className="mb-0 row">
          <div className="imgCtr col-4 col-sm-2">
            {imgURL &&
              <IMG src={imgURL} alt={headline} />}
             {!imgURL && 
            <img src="../../src/assets/images/generic.jpg"/>
            } 
          </div>
          <div className="btnCtr col-8 col-sm-8">
            <button className="btn btn-link" type="button" >
              {headline}
            </button>
          </div>
        </h5>
      </div>

      <div id={"collapse" + articleNo} className="collapse" aria-labelledby="headingOne" data-parent="#accordionCtr">
        <div className="card-body">
          {snippet}
        </div>
        <div className="card-body float-right">
          <a className="btn btn-primary" href={articleURL}>Read More</a>
        </div>
      </div>
    </div>

  )


export default CARD;
