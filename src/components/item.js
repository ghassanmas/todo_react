import React from "react";

export class Item extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.text}</span>
        <button
          className="btn-floating btn-large waves-effect waves-light red "
          onClick={this.props.delete}
        >
          <i class="material-icons">delete_forever</i>
        </button>
        <span>{this.props.priority}</span>
      </div>
    );
  }
}
