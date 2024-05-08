import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const auth = getAuth();
auth.useDeviceLanguage();
const provider = new GoogleAuthProvider();

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

export const GoogleSignIN = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(error);
  }
};

export const SignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    alert("error");
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    return [];
  }
};
