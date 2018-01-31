import React, { Component } from "react";
import "./App.css";
import { Item } from "./components/item";
import { Form } from "./components/form";
//import "materialize-css/dist/css/materialize.min.css";
//import "materialize-css/dist/js/materialize.min.js";

class App extends Component {
  constructor(props) {
    super(props);
    let items = JSON.parse(window.localStorage.getItem("items"));
    items ? items : (items = []);
    this.state = {
      items: items,
      priority: "low",
      text: "oh lal al ala "
    };

    this.addIt = this.addIt.bind(this);
    this.updatePriority = this.updatePriority.bind(this);
    this.updateText = this.updateText.bind(this);
    this.deleteIt = this.deleteIt.bind(this);
    this.sortItOut = this.sortItOut.bind(this);
  }
  sortItOut(items) {
    let sortedItems = items.slice();
    sortedItems = [].concat.apply(
      [],
      [
        sortedItems.filter(item => {
          if (item.priority === "high") return true;
          return;
        }),
        sortedItems.filter(item => {
          if (item.priority === "med") return true;
          return;
        }),
        sortedItems.filter(item => {
          if (item.priority === "low") return true;
          return;
        })
      ]
    );
    window.localStorage.setItem("items", JSON.stringify(sortedItems));
    return sortedItems;
  }

  addIt(e) {
    e.preventDefault();
    const text = this.state.text;
    const priority = this.state.priority;
    const item = { text, priority };
    let newItems = this.state.items.slice();
    newItems.push(item);
    newItems = this.sortItOut(newItems);
    this.setState({ items: newItems });
  }
  updatePriority(e) {
    this.setState({ priority: e.target.value });
  }
  updateText(e) {
    this.setState({ text: e.target.value });
  }
  deleteIt(i) {
    let newItems = this.state.items.slice();
    newItems = newItems.filter((item, j) => {
      if (i === j) return;
      return true;
    });
    newItems = this.sortItOut(newItems);
    this.setState({ items: newItems });
  }
  render() {
    return (
      <div className="App container">
        <Form
          addIt={this.addIt}
          priorityHandler={this.updatePriority}
          textHandler={this.updateText}
        />
        <ul>
          {this.state.items.map((item, i) => {
            return (
              <li>
                <Item
                  text={item.text}
                  priority={item.priority}
                  delete={() => this.deleteIt(i)}
                />
              </li>
            );
          }, this)}
        </ul>
      </div>
    );
  }
}

export default App;
