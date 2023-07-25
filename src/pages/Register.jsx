
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../utils/firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-hot-toast';
import { setDoc, doc } from 'firebase/firestore';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setPhoto] = useState(null);
  const[disable,setDisable]=useState(false)
  const navigate=useNavigate()
  // const app=initializeApp(firebase)
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(email)
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential?.user

        const storageRef =  ref(storage, `images/${Date.now() + username}`);
        const uploadTask =  uploadBytesResumable(storageRef, file);
        setDisable(true)
        uploadTask.on('state_changed', 
        (snapshot) => {
          // Handle the upload progress
        }, (error) => {
          toast.error(error.message)
        },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
       await updateProfile(user, {
                displayName: username,
                photoURL: downloadURL
              })

              //storing user
              await setDoc(doc(db,"users",user.uid),{
                uuid:user.uid,
                email:email,
                displayName: username,
                photoURL: downloadURL,
              })
              setDisable(false)
              toast.success(`welcome ${username}`)
            });
          }
        );
      


navigate("/")

    } catch (error) {
      console.log(error.message)
      toast.error("something went wrong")
    }
    // handle your registration logic here
  };

  const handlePhoto = (event) => {
    setPhoto(event.target.files[0]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register for an account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="sr-only">Profile Photo</label>
              <input type="file" onChange={handlePhoto} />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`${disable?("cursor-not-allowed"):("cursor-pointer")} relative w-1/2 mx-auto  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 `}
            >
              Register
            </button>
            <h5 className='text-center my-5'>Have An Account? <span className='text-blue-600 border-b-2 border-b-blue-700'><Link to="/login"> LogIn</Link></span></h5>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
