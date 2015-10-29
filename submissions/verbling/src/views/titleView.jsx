import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default class Title extends React.Component {
  // mixins: [PureRenderMixin],
  render () { 
  console.log(this.props)
    return ( 
      <h1 className="css-planet-monitor">Obi-Wan currently on {this.props.planet}</h1>
      )
  }
}; 
