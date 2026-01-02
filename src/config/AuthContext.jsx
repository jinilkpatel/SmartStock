import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        // Fetch user data from Firestore
        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            setUserData(userDocSnap.data());
          } else {
            // If user doc doesn't exist, create it with default values
            setUserData({
              name: currentUser.displayName || currentUser.email?.split("@")[0] || "User",
              email: currentUser.email
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUserData({
            name: currentUser.displayName || currentUser.email?.split("@")[0] || "User",
            email: currentUser.email
          });
        }
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user, userData }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
