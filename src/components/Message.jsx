import { useEffect, useRef } from 'react';

const style = {
  message: `flex flex-col items-start shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  recieved: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Message = ({ message }) => {
  const scroll = useRef();

  // To scroll to the last message
  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div>
      <div ref={scroll} className={style.message}>
        {/* the name is value hardcoded yet! */}
        <p className={style.name}>Dave</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
