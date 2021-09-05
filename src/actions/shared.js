import {getInitialData, saveQuestion} from '../utils/api'
import {_saveQuestionAnswer} from "../utils/_DATA"
import {receiveUsers, addQuestionToAuthedUser, saveQuestionAnswerToAuthedUser} from '../actions/users'
import {receiveQuestions, addQuestion, saveQuestionAnswer} from '../actions/questions'
import {setAuthedUser} from '../actions/authedUser'

const AUTHED_ID = ''

export function handleInitialData (){
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions})=>{
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }         
}

export function handleAddQuestion(questionText, optionOneText, optionTwoText, optionThreeText, optionFourText) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
  
      return saveQuestion({
        author: authedUser,
        questionText,
        optionOneText,
        optionTwoText,
        optionThreeText,
        optionFourText
      }).then(question => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToAuthedUser(authedUser, question.id));
      });
    };
}
  
export function handleSaveQuestionAnswer(id, answer, correctAnswers) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return _saveQuestionAnswer({
        authedUser,
        qid: id,
        answer, 
        correctAnswers
        })
        .then(dispatch(saveQuestionAnswer(id, answer, authedUser, correctAnswers)))
        .then(dispatch(saveQuestionAnswerToAuthedUser(authedUser, id, answer, correctAnswers)));
    };
}
  