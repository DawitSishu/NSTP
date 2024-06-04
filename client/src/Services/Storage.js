import { app } from "../main";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";

const db = getFirestore(app);
const storage = getStorage(app);

const CREATE_USER_URI = "http://localhost:5000/api/user/create";

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

export const CreateAccount = async (data, token) => {
  try {
    const res = await axios.post(
      CREATE_USER_URI,
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return "error";
  }
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
