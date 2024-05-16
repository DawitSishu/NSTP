import { app } from "../main";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const db = getFirestore(app);
const storage = getStorage(app);

export const uploadProfile = async (pic, id) => {
  try {
    const uploadPromises = Array.from(pic).map(async (file) => {
      const storageRef = ref(storage, `profile/${id}`);
      await uploadBytes(storageRef, file);
      return getDownloadURL(storageRef);
    });
    const downloadUrls = await Promise.all(uploadPromises);
    return downloadUrls[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const CreateAccount = async (data) => {
  try {
    const usernameQuery = query(
      collection(db, "users"),
      where("username", "==", data.username)
    );
    const phoneQuery = query(
      collection(db, "users"),
      where("phone", "==", data.phone)
    );

    const [usernameSnapshot, phoneSnapshot] = await Promise.all([
      getDocs(usernameQuery),
      getDocs(phoneQuery),
    ]);

    if (!usernameSnapshot.empty && !phoneSnapshot.empty) {
      return "Username and phone number already exist";
    } else if (!usernameSnapshot.empty) {
      return "Username already exists";
    } else if (!phoneSnapshot.empty) {
      return "Phone number already exists";
    }

    const docRef = await addDoc(collection(db, "users"), {
      ...data,
    });
    return docRef;
  } catch (error) {
    console.log(error);
    return "error";
  }
  //email
  // phone
  //     pic:
  //   username:
  //   dob:
  //   bio:
};

export const getUserInfo = async (uid) => {
  try {
    const userQuery = query(
      collection(db, "users"),
      where("userID", "==", uid)
    );

    const querySnapshot = await getDocs(userQuery);
    return querySnapshot.docs[0].data();
  } catch (error) {
    console.log(error);
    return "error";
  }
};
