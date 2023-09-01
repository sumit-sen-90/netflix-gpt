import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { addUser } from "../store/slices/userSlice";

export const registerUser = (
  email,
  password,
  name,
  setErrMessage,
  dispatch,
  setShoSpinner,
  setIsSubmit
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: "https://avatars.githubusercontent.com/u/113496000?v=4",
      })
        .then(() => {
          const { uid, displayName, email, photoURL } = auth.currentUser;

          dispatch(
            addUser({
              uid: uid,
              displayName: displayName,
              email: email,
              photoURL: photoURL,
            })
          );
        })
        .catch((error) => {
          setErrMessage(error.message);
          setShoSpinner(false);
          setIsSubmit(false);
          console.log(error.message);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + "-" + errorMessage);
      if (errorCode === "auth/email-already-in-use") {
        setErrMessage("User already exists with this email");
      }
      setShoSpinner(false);
      setIsSubmit(false);
    });
};

export const login = (
  email,
  password,
  setErrMessage,
  dispatch,

  setShoSpinner,
  setIsSubmit
) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const { uid, displayName, email, photoURL } = user;

      dispatch(
        addUser({
          uid: uid,
          displayName: displayName,
          email: email,
          photoURL: photoURL,
        })
      );
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      if (errorCode === "auth/user-not-found") {
        setErrMessage("No user found for this email/password");
      } else if (errorCode === "auth/wrong-password") {
        setErrMessage("Wrong password");
      }
      setShoSpinner(false);
      setIsSubmit(false);
    });
};
