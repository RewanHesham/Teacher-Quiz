import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";

//This component renders the score of the logged student including no. of answered questions, score and each question correct answer
//The score of student only viewed to the logged student and the admin
class Result extends Component {
  render() {
    const { users, authedUser, questions, questionIds, correctAnswers } = this.props;
    const user = users[authedUser];
    const answers = questionIds
      .map(qid => {
      const question = questions[qid];
      return (
          <div style={{color:"black"}}>
            The Correct Answer Of {question.question.text} Is {question.correctAnswer.text} 
          </div>
      );
    })
 
    return (
        <div className="Result-container">
          <div>
            <Image className="avatar-image" src={user.avatarURL} />
            <div className="bold large">{user.name}</div>
            <div className="bold large">
              <div>
                  Answered: {Object.keys(user.answers).length}
              </div>
              <div>
                  <strong style={{color:"#022511"}}>Score</strong>
              </div>
              <div>
                  <strong style={{color:"#022511"}}>{correctAnswers}</strong>
              </div>
              {Object.keys(user.answers).length >= 6 ? (<div>{answers}</div>): null }
            </div>
          </div>
        </div>
    ) 
  }
}

//This function is responsible for creating user object so that users doesn't get overwritten and creating an array of questions sortted by time of creation
function mapStateToProps({ users, authedUser, questions, correctAnswers }, props) {
  return {
    users: users,
    authedUser: authedUser,
    questions: questions,
    questionIds: Object.keys(questions)
    .sort((a, b) => questions[a].timestamp - questions[b].timestamp),
    correctAnswers: correctAnswers
  }
}

//Connect passes the maoStateToProps to Result Component as props
export default connect(mapStateToProps)(Result);