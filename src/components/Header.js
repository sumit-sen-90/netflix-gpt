import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { NETFLIC_LOGO, USER_AVTAR } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  //Check and validate user and restrict if he is not logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        navigate("/browse");
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="z-30 flex justify-between items-center absolute w-full  bg-gradient-to-b from-black">
      <img className="h-24 mx-3 " src={NETFLIC_LOGO} alt="logo" />
      {user && (
        <div className="flex gap-2 items-center">
          <img className="h-8 w-8 " alt="userlogo" src={USER_AVTAR} />
          <p className="cursor-pointer bg" onClick={handleSignout}>
            <BiLogOut className="text-black mr-5 text-3xl" />
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
