import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/* 
steps for authentication 
----------------------
Step-1: Initial setup
1. firebase: create project
2. create web app
3. get configration
4. initilize firebase
5. enable auth method
---------------------

Step-2: sept up component
1. Create Login component
2. Create Register component
3. Create Route for Login and Register
-------------------------

step-3: set auth system
1. set up sign in method
2. set up sign out method
3. uiser state
4. special observer
5. return necessary method and state from useFirebase

step-4: create auth context hook (useAuth)
1. create a auth context
2. Create context provider
3. set context provider context valure
4. user auth provider
5. create useAuth hook
------------------------

step-5: create private route
1. create private Route
2. set private route
---------------------

step-6: (optional)Redirect after login
1. after login redirect user to their desired destination
*/
