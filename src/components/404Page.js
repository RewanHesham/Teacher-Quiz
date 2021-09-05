import React, { Component } from "react";

//This component is rendered when the users enters invalid question id or when an error happens at loading any component
class QuestionNotFound extends Component {
  render() {
    return (
      <div>
        <h1>Question Not Found!</h1>
        <p>Sorry! This Question doesn't exist.</p>
      </div>
    );
  }
}

export default QuestionNotFound;