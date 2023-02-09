import { useEffect, useRef } from 'react';
import { auth } from '../firebase';

const Message = ({ message }) => {
  const style = {
    msgWrapper: `${
      message.uid === auth.currentUser.uid ? 'self-end' : 'self-start'
    } flex items-center`,
    message: `flex flex-col items-start shadow-xl m-4 py-2 px-3 rounded-3xl text-left`,
    name: `text-gray-600 text-xs text-gray-400`,
    sent: `self-end bg-[#3d60fa] text-white flex-row-reverse text-end rounded-br-[0]`,
    recieved: `self-start bg-[#e5e5ea] text-black borderx-6 rounded-bl-[0] `,
    contentWrapper: `flex flex-col items-start`,
    text: `text-left`,
    authorImage: `rounded-full h-11 w-11`,
  };
  const scroll = useRef();

  // To scroll to the last message
  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Style the message based on the author
  const messageClass =
    message.uid === auth.currentUser.uid ? style.sent : style.recieved;

  return (
    <div className={style.msgWrapper}>
      {/* Display user image only for recieved messages */}
      {message.uid !== auth.currentUser.uid && (
        <img
          className={style.authorImage}
          src={message.authorImage}
          alt="user"
        />
      )}
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
