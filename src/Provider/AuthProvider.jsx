import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) =>{
    
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    //google login
    const googleSignIn = ()=>{
        setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
    
    }
    //Create User
    const createUser =(email, password)=>{
        setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    }


    // LogIn user
    const logInUser =(email, password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //LogOut user
    const userLogout =()=>{
        setIsLoading(true)
        return signOut(auth);
    }

    //update profile
    const updateUserProfile =(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo 
        })
    }


    //  observer user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) =>{
            setUser(user)
            setIsLoading(false)
        })

        return()=>{
            unSubscribe();
        }

    },[]);

    

    const authInfo = {
        user,
        isLoading,
        googleSignIn,
        createUser,
        logInUser,
        userLogout,
        updateUserProfile,
    }

        
  

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;