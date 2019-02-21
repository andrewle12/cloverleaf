import React, { Component } from "react";
import API from "../../utilities/API";
import "./style.css";

class YardSales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yardsales: []
    };
  }

  componentDidMount() {
    this.loadYardSales();
  }

  // Loads yard sales from api
  loadYardSales() {
    API.getYardSales()
      .then(res => this.setState({ yardSales: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="card mt-3 mx-1 shadow-sm">
        <div className="card-body text-center">
          <h5 className="header card-title">Yard Sales</h5>
          <h5><strong>Coming Soon!</strong></h5>
        </div>
      </div>
    );
  }
}

export default YardSales;
