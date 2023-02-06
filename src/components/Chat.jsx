import { useRef } from 'react';
import Message from './Message';

const style = {
  main: `flex flex-col p-[10px] relative overflow-auto`,
};

const Chat = () => {
  const scroll = useRef();

  return (
    <>
      <main className={style.main}>
        <Message />
      </main>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
