import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { Button, Form, Image, Input } from "semantic-ui-react";
import { handleAddQuestion } from "../actions/shared";

//This component renders new question created by admin
//The admin enter questuin, four options for students to choose between and the correct answer
class NewQuestion extends Component {
  state = {
    question: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    correctAnswer: "",
    toHome: false,
  };
  
  //Options are then sent to the store with the question and displayed at the unanswered questions section
  //When the question is saved the user is redirected to the Home Page where both answered and unanswered questions are
  handleSubmit = (e) => {
    e.preventDefault();
    const { question: questionText, optionOne: optionOneText, optionTwo: optionTwoText, optionThree: optionThreeText, optionFour: optionFourText, correctAnswer: correctAnswerText } = this.state;
    const { handleAddQuestion } = this.props
    
    handleAddQuestion(questionText, optionOneText, optionTwoText, optionThreeText, optionFourText, correctAnswerText )
    
    this.setState(() => ({
      question: "" ,
      optionOne: '',
      optionTwo: '',
      optionThree: '',
      optionFour: '',
      correctAnswer:'',
      toHome:true,
    }))
  }

  render() {
    const { authedUser, users } = this.props;
    const user = users[authedUser];
    const { toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h2>Create New Question</h2>
        <div className="new-question">
          <div>
            <Image className="avatar-image" src={user.avatarURL}/>
            <div className="bold ">{user.name} asks</div>
            <Form>
            <Form.Field>
                <Input className="input" placeholder='Enter question here...'
                  value={this.state.question}
                  onChange={e =>
                    this.setState({ question: e.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <Input className="input" placeholder='Enter option one here...'
                  value={this.state.optionOne}
                  onChange={e =>
                    this.setState({ optionOne: e.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <Input className="input" placeholder='Enter option two here...'
                  value={this.state.optionTwo}
                  onChange={e =>
                    this.setState({ optionTwo: e.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <Input className="input" placeholder='Enter option three here...'
                  value={this.state.optionThree}
                  onChange={e =>
                    this.setState({ optionThree: e.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <Input className="input" placeholder='Enter option Four here...'
                  value={this.state.optionFour}
                  onChange={e =>
                    this.setState({ optionFour: e.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <Input className="input" placeholder='Enter correct answer here...'
                  value={this.state.correctAnswer}
                  onChange={e =>
                    this.setState({ correctAnswer: e.target.value })
                  }
                />
              </Form.Field>
              <Button className="btn"  onClick={this.handleSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return { users: state.users, authedUser: state.authedUser };
};
//Connect will pass mapStateToProps function to NewQuestion component to use it as props
export default connect(mapStateToProps, { handleAddQuestion })(NewQuestion);