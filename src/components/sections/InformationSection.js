import React from 'react';

import Graph from '../shared/Graph';

export default function InformationSection( props ) {
  return(
    <div>
      <h2>{ props.data.title }</h2>
      <div className="fl-row">
        <div>
          <Graph graphText={ props.data.graphText } stats={ props.data.stats } />
        </div>
        <div>
          <div className="info-form">
            <h3 className="info-form__heading">
              { props.data.formText }
            </h3>
            <span className="info-form__subtext">
              { props.data.subText || "We work with ecosystem leaders, corporations and startups worldwide. How can we help you?"}
            </span>
            <div className="info-form__form-element-container">
              {
                props.data.formLabels.map( (label, i) => (
                  <input key={i} placeholder={ label }></input>
                ))
              }
              <button  className="info-form__submit">{ props.data.buttonText }</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}