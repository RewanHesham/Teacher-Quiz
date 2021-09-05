import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Button } from "semantic-ui-react";
import { Form } from "tabler-react";
import { handleSaveQuestionAnswer } from "../actions/shared";
import Result from "./Result";

//This component renders questions from the list, recieve question answers of the players and adding the results to the question
//VotedForOption state records the user's vote and then used to show the vote showenView 
class Question extends Component {
  state = { userVote: null };
  state = { correctAnswers:0 };
  //This function fetches the user id of the viewed question and handle saving the user's answer
  handleAnswer = (e) => {
    e.preventDefault();
    const {handleSaveQuestionAnswer, questions, authedUser, users } = this.props;
    const id = this.props.match.params.question_id;

    const question = questions[id];
    const { correctAnswer } = question;
    const answer = correctAnswer;
    const user = users[authedUser];
    
    var {correctAnswers} = this.state
    const vote = this.state.userVote;
    
    handleSaveQuestionAnswer(id, vote, correctAnswers);

    if(answer){
      this.setState({ correctAnswers: this.state.correctAnswers + 1}); 
    }  
  };

  //This function show the results of the vote on each question, which vote the logged player choose and show the no. of players voted for each option
  //And the percentage of votes each option has
  handleQuestionResult = () => {
    const { authedUser, questions, users} = this.props;
    const id = this.props.match.params.question_id;
    const question = questions[id];
    const user = users[question.author];
    const { optionOne, optionTwo, optionThree, optionFour, correctAnswer } = question;
    const chosenOptionOne = question.optionOne.votes.includes(authedUser);
    const chosenOptionTwo = question.optionTwo.votes.includes(authedUser);
    const chosenOptionThree = question.optionThree.votes.includes(authedUser);
    const chosenOptionFour = question.optionFour.votes.includes(authedUser);
    const answer = correctAnswer;

    return (
      <div className="results">
        <Image className="avatar-image" src={user.avatarURL} />
        <p>{user.name} asks</p>
        <div className="results-card bold" style={{color:"black"}}> {question.question.text}</div>
        <div className="results-card">
          <div>
            {chosenOptionOne && (<p style={{color:"black"}} > Your Answer Is: {optionOne.text}</p>)}
          </div>
          <div>
            {chosenOptionTwo && (<p style={{color:"black"}}> Your Answer Is: {optionTwo.text}</p>)}
          </div>
          <div>
            {chosenOptionThree && (<p style={{color:"black"}} > Your Answer Is: {optionThree.text}</p>)}
          </div>
          <div>
            {chosenOptionFour && (<p style={{color:"black"}} > Your Answer Is: {optionFour.text}</p>)}
          </div>
          <p style={{color:"#022511"}}>The Correct Answer Is:</p>
          <p style={{color:"#022511"}}>{answer.text}</p>
        </div> 
        <Result correctAnswers= {this.state.correctAnswers}/>
        <p style={{color:"#022511"}}>{this.state.correctAnswers}</p>
      </div>
    );
  };

  //This function saves the user vote to state when the user choose an answer
  handleChange = (e) => {
    this.setState({ userVote: e.target.value });
  };
  //This function renders the options of poll then save the players vote to the question answers
  handleQuestionAnswer = () => {
    const id = this.props.match.params.question_id;
    const { questions, users } = this.props;
    const question = questions[id];
    if (!question) {
      return;
    }
    const user = users[question.author];

    return (
      <div className="results">
        <Image className="avatar-image" floated="right" size="tiny" src={user.avatarURL} />
        <p>{user.name} asks</p>
        <p className="results-card" style={{color:"black"}}> {question.question.text} </p>
        <Form.SwitchStack className="results-card">
            <Form.Switch
              label={question.optionOne.text}
              name="choice"
              type="radio"
              value="optionOne"
              checked={this.state.votedForOption === "optionOne"}
              onChange={this.handleChange}
            />
            <Form.Switch
              label={question.optionTwo.text}
              name="choice"
              type="radio"
              value="optionTwo"
              checked={this.state.votedForOption === "optionTwo"}
              onChange={this.handleChange}
            />
            <Form.Switch
              label={question.optionThree.text}
              name="choice"
              type="radio"
              value="optionThree"
              checked={this.state.votedForOption === "optionThree"}
              onChange={this.handleChange}
            />
            <Form.Switch
              label={question.optionFour.text}
              name="choice"
              type="radio"
              value="optionFour"
              checked={this.state.votedForOption === "optionFour"}
              onChange={this.handleChange}
            />
        </Form.SwitchStack>
        <Button className="btn" onClick={this.handleAnswer}>
          Submit
        </Button>  
      </div>
    );
  };

  //This function take both of the previous functions and check for question id if avaliable 
  //Then renders the poll component to take the players answers or the results components to show player the results
  answerPoll() {
    const { authedUser, questions } = this.props;
    const id = this.props.match.params.question_id;
    const question = questions[id];
    if (!question) {
      return null;
    }
    return (
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser) ||
      question.optionThree.votes.includes(authedUser) ||
      question.optionFour.votes.includes(authedUser)
    );
  }
  //when the component mount get the question by id and if the question is unavaliable go to the 404Page of error
  componentDidMount() {
    const { questions } = this.props;
    const id = this.props.match.params.question_id;
    const question = questions[id];
    if (!question) {
      const { history } = this.props;
      history.push("/404Page");
    }
  }

  render() {
    let showenView;
    if (this.answerPoll() === true) {
      showenView = this.handleQuestionResult();
    } else {
      showenView = this.handleQuestionAnswer();
    }
    return <div>{showenView}</div>;
  }
}

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  return {
    authedUser: authedUser,
    questions: questions,
    question: questions[props.match.params.id],
    users: users
  };
};

//Connect will pass mapStateToProps and handleSaveQuestionAnswer functions to the App component to use it as props
export default connect( mapStateToProps, { handleSaveQuestionAnswer })(Question);