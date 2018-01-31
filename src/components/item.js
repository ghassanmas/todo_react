import React from "react";
import "../App.css";

export class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <span>{this.props.text}</span>
        <span>{this.props.priority}</span>

        <button
          className="btn-floating btn-large waves-effect waves-light red "
          onClick={this.props.delete}
        >
          <i class="material-icons">delete_forever</i>
        </button>
      </div>
    );
  }
}
