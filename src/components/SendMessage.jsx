import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { auth, db } from '../firebase';

const style = {
  form: `h-14 w-full max-w-[728px] flex text-xl`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

const SendMessage = () => {
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: input,
      author: displayName,
      uid,
      timestamp: serverTimestamp(),
      authorImage: photoURL,
    });
  };

  return (
    <form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (input) {
          sendMessage();
          setInput('');
        }
      }}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Message"
      />
      <button className={style.button}>Send</button>
    </form>
  );
};

export default SendMessage;
