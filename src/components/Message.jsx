import { useEffect, useRef } from 'react';
import { auth } from '../firebase';

const style = {
  message: `flex flex-col items-start shadow-xl m-4 py-2 px-3 rounded-3xl text-left`,
  name: `text-gray-600 text-xs text-gray-400`,
  sent: `bg-[#3d60fa] text-white flex-row-reverse text-end float-right rounded-br-[0]`,
  recieved: `bg-[#e5e5ea] text-black float-left borderx-6 rounded-bl-[0] `,
  contentWrapper: `flex flex-col items-start`,
  text: `text-left`,
};

const Message = ({ message }) => {
  const scroll = useRef();

  // To scroll to the last message
  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Style the message based on the author
  const messageClass =
    message.uid === auth.currentUser.uid ? style.sent : style.recieved;

  return (
    <div>
      <div ref={scroll} className={`${style.message} ${messageClass}`}>
        <div className={style.contentWrapper}>
          <p className={style.name}>{message.author}</p>
          <p className={style.text}>{message.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
