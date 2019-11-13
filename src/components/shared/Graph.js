import React from 'react';

import '../../styles/Graph.css';

export default function Graph( props ) {
  return (
    <div className='graph'>
      <div className='graph__title'>
        { props.graphText }
      </div>
      {
        props.stats.map( ( stat, i) => (
          <div key={i} className='graph__stat'>
            <span className='graph__stat-title'>{ stat.title } </span>
            <span className='graph__stat-amount'>{ stat.amount/10 }%</span>
            <div className='graph__stat-progress'>
              <div className='graph__stat-progress-filler' style={{ width: stat.amount/10 + '%' }}></div>
            </div>
          </div>
        ))
      }
    </div>
  )
}