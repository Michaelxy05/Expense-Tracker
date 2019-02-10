import React from "react";
import "./style.css";


class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"> {this.props.title}</h5>
                    <h6 className="card-subtitle">{this.props.subtitle}</h6>
                    <p className="card-text">{this.props.text}.</p>
                </div>
            </div>

        );
    }
}

export default Card;