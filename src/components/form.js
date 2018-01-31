import React from "react";
//import "materialize-css/dist/js/materialize.min.js";

export class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.addIt} className="col s12">
        <input type="text" onChange={this.props.textHandler} />
        <br />
        <div className="input-field col s12">
          <select
            className="browser-default"
            value={this.props.priority}
            onChange={this.props.priorityHandler}
          >
            <option value="low">Low</option>
            <option value="med">Med</option>
            <option value="high">High</option>
          </select>
          <label>Materialize Select</label>
        </div>
        <br />

        <input type="submit" />
      </form>
    );
  }
}
