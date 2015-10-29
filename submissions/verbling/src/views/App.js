import React from 'react';
import ListView from './ListView.jsx';
import Title from './titleView.jsx';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export default class App extends React.Component {

  render () {
    console.log('in app')
    console.log(this.props)
    return (
      <div className="css-root">
        <Title planet={this.props.current_planet} />
        <section className="css-scrollable-list">
          <ListView/>
          <div className="css-scroll-buttons">
            <button className="css-button-up"></button>
            <button className="css-button-down"></button>
          </div>
        </section>
      </div>
      )
  }
};

// function mapStateToProps(state){ 
//   console.log('in mapStateToProps')
//   return { 
//     planet: state.current_planet.name
//   }
// }


// export const AppContainer = connect(mapStateToProps)(App);