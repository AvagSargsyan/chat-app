import Navbar from './components/Navbar';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './components/Chat';
import SendMessage from './components/SendMessage';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
  loggedOut: `flex-1 pt-[35vh] text-xl`,
};

function App() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        {user ? (
          <>
            <Chat />
            <SendMessage />
          </>
        ) : (
          <div className={style.loggedOut}>Sign in to join the Chatroom.</div>
        )}
      </section>
    </div>
  );
}

export default App;
