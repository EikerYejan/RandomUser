import React, { useState, useEffect } from "react"
import withFirebaseAuth, {
  WrappedComponentProps,
} from "react-with-firebase-auth"
import * as Firebase from "firebase"
import "firebase/auth"
import FirebaseConfig from "./config/firebase"
import HomeScreen from "./components/HomeScreen"
import LoginScreen from "./components/LoginScreen"

/**
 * Initialize Firebase app
 */
const firebaseApp = Firebase.initializeApp(FirebaseConfig)

/**
 * Set up auth providers
 */
const firebaseAppAuth = firebaseApp.auth()

const providers = {
  googleProvider: new Firebase.auth.GoogleAuthProvider(),
}

const App: React.FC<WrappedComponentProps> = ({
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithGoogle,
  error,
  loading,
  user,
}) => {
  /**
   * Initial state
   */
  const [isLoggedIn, setLoggedIn] = useState(false)

  /**
   * Get user token
   */
  useEffect(() => {
    if (user) {
      setLoggedIn(true)
      console.log(user)
    }
  }, [user])

  return (
    <>
      {!isLoggedIn ? (
        <LoginScreen
          createUser={createUserWithEmailAndPassword}
          withEmail={signInWithEmailAndPassword}
          withGoogle={signInWithGoogle}
          error={error}
          loading={loading}
        />
      ) : (
        <HomeScreen username={user?.displayName || user?.email || "Stranger"} />
      )}
    </>
  )
}

export default withFirebaseAuth({ providers, firebaseAppAuth })(App)
