import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class YardSale extends Component {
   
   render() {
      const { yard } = this.props;
      
      return (
         <div className="card">
         <img className="card-img-top" src={yard.image} alt="YardSale"></img>
         <div className="card-body">
           <h4 className="card-title">{yard.title}</h4>
           <h6 className="card-subtitle mb-2 text-muted">{`By, ${yard.userName}`}</h6>
           <p className="card-text">{yard.body}</p>
         </div>
       </div>
      )
   }
}

YardSale.propTypes = {
   yard: PropTypes.object.isRequired,
   auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth
 });

 export default connect(mapStateToProps)(YardSale);