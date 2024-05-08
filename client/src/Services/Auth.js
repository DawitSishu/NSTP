import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();

export const SignIN = async ({ email, password }) => {
  console.log(email, password);
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    const user = data.user;
    console.log(user);
    console.log(data);
    return user;
  } catch (error) {
    alert("error");
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    return [];
  }
};

export const SignUP = async ({ email, password }) => {
  console.log(email, password);
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    const user = data.user;
    console.log(user);
    console.log(data);
    return user;
  } catch (error) {
    alert("error");
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    return [];
  }
};
