import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { db } from '../firebase';
import Message from './Message';

const style = {
  main: `flex flex-col p-[10px] relative overflow-auto`,
};

const Chat = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages.length > 0 &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
