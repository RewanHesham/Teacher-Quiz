import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";

//This component renders the score of each player including no. of answered and unanswered questions and the rank of each one
//The component gets the users and map each user to get the user id no. of questions answered and no. of created questions
//The score of each player is calculates and viewed to all players sorted from most to least score
//Each card displays info of one player 
class Result extends Component {
  render() {
    const { users, authedUser, correctAnswers } = this.props;
    const user = users[authedUser];
    return (
        <div className="leaderboard-container">
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
                </div>
            </div>
        </div>
    ) 
  }
}
/*<strong style={{color:"#022511"}}>{Object.keys(user.correctAnswers).length}</strong>*/
//This function is responsible for creating user object so that users doesn't get overwritten and creating an array of users sorted by score
function mapStateToProps({ users, authedUser }) {
  return {
    users: users,
    authedUser: authedUser
  }
}

//Connect passes the maoStateToProps to Result Component as props
export default connect(mapStateToProps)(Result);