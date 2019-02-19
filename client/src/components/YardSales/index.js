import React, {Component} from "react";
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

    }

    render() {
        return (
        <div className="card mt-3 ml-1 shadow-sm">
            <div className="card-body text-center">
                <h5 className="header card-title">Yard Sales</h5>
            </div>
        </div>
        );  
    }
}

export default YardSales;