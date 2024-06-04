import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";


export const Context = createContext();

export const AuthContext = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser) setUser(currentUser);
      else {
        setUser(null);
      }
    });
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [auth]);

  const getToken = async () => {
    if (user) {
      return await auth.currentUser.getIdToken(true); 
    }
    return null;
  };

  const values = {
    user: user,
    setUser: setUser,
    getToken: getToken,
  };

  return (
    <Context.Provider value={values}>{!loading && children}</Context.Provider>
  );
};
