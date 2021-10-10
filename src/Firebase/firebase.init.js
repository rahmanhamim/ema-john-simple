import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
 initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/* steps for authentication 
--------------------
setup:1 = initial setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. enable auth method
------------------------
setup:2 setup component
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

-------------------------
step: 3 setup auth system
1. setup sign in method
2. setup sign out method
3. user state
4. special observer (sign in signout observ)
5. return necessary methods and states from useFirebase
--------------------------
step: 4 create auth context (useAuth )
1. create a auth context
2. create context provider
3. set context provider context value
4. use auth provider
5. create useAuth Hook
--------------------------
step: 5 create private route
1. create private Route
2. set private route

----------------------------
step: 6 Redirect after login
1. after login rediret user to their desired destination

*/
