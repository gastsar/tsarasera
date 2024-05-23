import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "../db/firebase";

const provider = new GoogleAuthProvider();

const useClientAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isFetch, setIsFetch] = useState(false);
  const router = useRouter();

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (error) {
      console.log("error signUp");
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (error) {
      console.log("error signIn");
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        setUser(user);
      }
    } catch (error) {
      console.log("error loginWithGoogle");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsFetch(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      router.push("/Dashboard");
    }
  }, [user, router]);

  const redirectIfAuthentificated = () => {
    if (user) {
      router.push("/Dashboard");
    }
  };

  return {
    user,
    isFetch,
    signUp,
    signIn,
    loginWithGoogle,
    redirectIfAuthentificated,
  };
};

export default useClientAuth;
