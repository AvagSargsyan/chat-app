import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import SignIn from './SignIn';
import LogOut from './LogOut';

const style = {
  nav: `bg-gray-800 h-20 flex items-center gap-4 p-4`,
  heading: `text-white text-3xl mr-auto`,
  userImg: `rounded-full h-12 w-12`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat app</h1>
      {user ? (
        <>
          <LogOut />
          <img className={style.userImg} src={user.photoURL} alt="User" />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Navbar;
