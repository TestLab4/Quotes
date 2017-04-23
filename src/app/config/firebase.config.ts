import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const FirebaseConfig = {

    apiKey: "AIzaSyADqsjombSu_moFhzMrQ0cRh_MjXs3WCqA",
    authDomain: "authentication-31b14.firebaseapp.com",
    databaseURL: "https://authentication-31b14.firebaseio.com",
    projectId: "authentication-31b14",
    storageBucket: "authentication-31b14.appspot.com",
    messagingSenderId: "951342884591"

};


export const FirebaseAuthConfig = {
  
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect

};