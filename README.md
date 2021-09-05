# Quiz System App

## Description

    * This is a multiple choice quiz system that lets a teacher quiz students and evaluate them. 
    * The quiz goes like this: A student is asked a question in the form: “[Question] [option A] or [option B] or [option C] or [option D]”.
    * The main page displays Home Page view with navigation bar containing 4 items and the name and avatar of the logged in admin, or 3 items and the name and avatar of the logged in student.
    * The user login to one of the avaliable accounts with only user name.
    * Then the user is directed to the home page which contains two lists of questions: answered and unanswered questions.
    * The user can navigate through lists of question and can choose an unanswered question to answer it or choose answered question to view results.
    * Admin can add new question to the quiz from the "New Question" item on the nav bar.
    * Admin can view the leaderboard of students scores from the "Leaderboard" item from the nav bar.
    * Student can view the result of the quiz and the correct answer of each question from the "Result" item from the nav bar.
    * The user can logout from profile and choose another profile.
    
## Installation And Start
    * "npm install" to install the dependencies of the app.
    * "npm start" to launch the app.
  
## Table of Contents

   ### package.json file:
   
    *The file includes the main features of the webpage and all the npm scripts Dependencies (dev dependencies & general dependencies) and App information (name, version, license, etc..).
    *It also includes the modes of build ( __test__, build-dev, build-prod, start).
       
   ### src folder:
   
   #### Actions Folder:
   ##### authedUser.js:
     *This file contains the actions to get and set the authorized user.
   ##### question.js:
     *This file contains the actions used to get questions from the store, add question, get question answer, and save answers.
   ##### shared.js:
     *This file contains shared functions between all files.
     *"handleInitialData" used to get the initial data for the user(users and questions).
     *"handleAddQuestion" used to add question to the questions list and to the authed user list of questions.
     *"handleSaveQuestionAnswer" used to save the users answers to questions.
   ##### users.js:
     *This file contains the actions to get the users and add info to each user object.
     *"addQuestionToAuthedUser" used to add question to the authed user list of questions.
     *"saveQuestionAnswerToAuthedUser" used to add question answer id to the authed user.


   #### Components folder:
   ##### App Component:
     *This is the main app components which renders all components together to create the Web App.
     *Get the initial data of users and questions when this component mount to be displayed then.
     *This component handles routing of the app.
     *The app have two views: one for admins and one for students.
     *Admin can add questions and can view all student's score and questions.
     *Students can view questions and own result only.
     *The form for posting new questions is available at the /add route.
     *The application have a leaderboard that’s available at the /leaderboard route for the admin.
     *The router will initially render the login page then after the user login, user can change between routes from the NavBar.

   ##### HomePage Component:
     *This is the HomePage component it renders two components of answered and unanswered questions.
     *This components appears directly when the user login.
     *The questions are grapped by ids and when the question change it's state from answered to unanswered it's id moves to the corresponding list.
     *The user tab the menu item to change from one list to the other.
   
   ##### LeaderBoard Component:
      *This component renders the score of each student including no. of answered questions and the rank of each one.
      *The component gets the users and map each user to get the user id no. of questions answered.
      *The score of each student is calculated and sorted from most to least score.
      *Each card displays info of one student.

   ##### Result Component:
      *This component renders the score of logged in student including no. of answered questions and the quiz score.
      *The component renders each question correct answer. 

   ##### Login Component:
     *This component is for login page when the user opens the game user is directed to the login page to select the account to login with.
     *When the user type url user is redirected to the login page again to login.
     *When the user choose account and login user is redirected to the Home page route.
     *If the user typed url and logged out then logged in, the user will return on same page typed on the url from history stored.

   ##### Logout Component:
     *This component is for logging out from user's account.
     *By passing null to the setAuthedUser and redirect the user to the login page.

   ##### NavBar Component:
     *This components renders the Navbar which contains all links to the different pages of the quiz system.

   ##### NewQuestion Component:
     *This components renders a new question created by the admin.
     *The user enter question and four options to choose between with one correct answer.
     *Options are then sent to the store with the question and displayed at the unanswered questions section.
     *When the question is saved the user is redirected to the Home Page where both answered and unanswered questions are.

   ##### PageNotFound Component:
     *This component is rendered when the users enters invalid question id or when an error happens at loading any component.

   ##### Question Component:
     *This component renders questions from the list, recieve question answers of the students and adding the results to the question.
     *"HandleQuestionResult" function shows the results of the student on each question, which answer the logged student choose.
     *"handleQuestionAnswer" function renders the options of question then save the student answer to the question answers.
     *"answerPoll" function takes both of the previous functions and check for question id if avaliable.
     *Then renders the question component to take the student answer or the result component to show student the results.
    

   #### Middleware Folder:
   ##### index.js:
     *This file combines the logger middleware with the thunk middleware to pass them as one middleware to the "createStore" function then pass the store to the app component.
   ##### Logger.js:
     *This file contains the logger middleware.


   #### Reducers Folder:
   ##### authedUser.js:
     *This file contains the authed user reducer which returns the logged in user piece of state so that it can be used by .
   ##### questions.js:
     *This file contains the reducer used to handle all cases of question actions as saving question answers, add new question,etc..
   ##### index.js:
     *Combines all reducers into "combineReducers" to the pass it as one reducer to "createStore" function then pass the store to the app component.
   ##### users.js:
     *This file contains the reducer used to handle all cases of users actions as recieve questions.
     *"addQuestionToAuthedUser" used to add question to the authed user list of questions.
     *"saveQuestionAnswerToAuthedUser" used to add question answer id to the authed user.


   ### index.js file: 
    *Import all the files needed by the app and renders the "App" componets which includes all the components mentioned before.
    *Import the Browser Router which listen to the URL changes in the app to render the correct route page.
       
   ### Images Folder:
    *Contains the images used in the page.

   ### utiles Folder:
    *Which represents a fake database and contains methods that let you access the data.

   ### index.js file:
    *This file has the main component of the page which renders inside all other components.
    *It imports css file, reducer, middleware, createStore, provider, and App to create the app pasing it the store included middleware and reducers.
    *The App component is wrapped with the provider passing it the store.

   ### index.css file:
    *Contains the style of the app components for each class.

## Used Languages
    *HTML
    *JavaScript
    *CSS
    *JSX  