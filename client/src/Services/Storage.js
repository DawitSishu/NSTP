import { app } from "../main";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const db = getFirestore(app);

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
    console.log(error)
    return null;
  }
};

export const CreateAccount = async () => {
  //email
  // phone
  //     pic:
  //   username:
  //   dob:
  //   bio:
};
