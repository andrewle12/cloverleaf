import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YardSale from "../YardSale";

class YardMap extends Component {
   render() {
      console.log(this.props);
      const { yards } = this.props;
      
      const yardsArray = yards.map(yard => <YardSale yard={yard}/>);

      return yardsArray;
   }
}

YardMap.propTypes = {
   yards: PropTypes.array.isRequired
}

export default YardMap;