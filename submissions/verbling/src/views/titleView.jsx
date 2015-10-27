import React from 'react';

export default class Title extends React.Component { 
  render () { 
    return ( 
      <h1 className="css-planet-monitor">Obi-Wan currently on {this.props.planet}</h1>
      )
  };
}