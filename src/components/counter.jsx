import React, {Component} from "react";

class Counter extends Component {

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm font-monospace m-2">+
                 </button>

                <button
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm font-monospace">-
                </button>

                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2 font-monospace">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 alert-";
        classes += (this.props.counter.value === 0) ? "danger" : "success";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;