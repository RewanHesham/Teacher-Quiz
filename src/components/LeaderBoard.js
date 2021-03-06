import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";

//This component renders the score of each student including no. of answered, score and the rank of each one
//The component gets the users and map each user to get the user id no. of questions answered and score
//The score of each player is calculated and sorted from most to least score
//Each card displays info of one student 
class Leaderboard extends Component {
  render() {
    const { users } = this.props;
    const userCards = users.map( user => {
      if (user.id !== "admin"){
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
                  <strong style={{color:"#022511"}}>{user.score}</strong>
                </div>
              </div>
            </div>
          </div>
        ) 
      } return ""
    })
    return (
      <div>{userCards}</div>
    );
  }
}

//This function is responsible for creating user object so that users doesn't get overwritten and creating an array of users sorted by score
function mapStateToProps({ users, authedUser }) {
  let userObject = Object.assign({}, users);
  Object.values(users).map(
    user =>  
      (userObject[user.id]["score"] =
      Object.keys(user.answers).length)
  ) 
  return {
    users: Object.values(userObject).sort((a, b) => {
      if (a.score < b.score) {
        return 1;
      } else if (a.score > b.score) {
        return -1;
      } else {
        return 0;
      }
    }),
    authedUser
  };
}

//Connect passes the maoStateToProps to Leaderboard Component as props
export default connect(mapStateToProps)(Leaderboard);