import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from './firebase.config'
import { useDispatch } from 'react-redux'
import { getUser } from '../redux/userSlice'

const useAuth = () => {
  const dispatch = useDispatch()
  const [currentuser,setCurrentuser]=useState({})
  useEffect(()=>{
 onAuthStateChanged(auth,(user)=>{
      if(user){
        setCurrentuser(user)
        dispatch(getUser(user))
      }
      else{
        dispatch(getUser(null))
      }
    })
  },[])

  // const user = auth.currentUser;

    // if (user !== null) {
    //   // The user object has basic properties such as display name, email, etc.
    //   const displayName = user.displayName;
    //   const email = user.email;
    //   const photoURL = user.photoURL;
    //  setCurrentuser({
    //   displayName,
    //   email,photoURL
    //  })
    //  // The user's ID, unique to the Firebase project. Do NOT use
    //  // this value to authenticate with your backend server, if
    //  // you have one. Use User.getToken() instead.
    //  // const uid = user.uid;
    // }
  console.log(currentuser)
  return {
    currentuser
  }
}

export default useAuth