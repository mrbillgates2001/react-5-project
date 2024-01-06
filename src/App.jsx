import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactApp from "./components/ContactApp";

class App extends Component {
	render() {
		return <React.Fragment>
      <ContactApp />
    </React.Fragment>;
	}
}

export default App;
