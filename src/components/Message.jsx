const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  recieved: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Message = ({ message, user }) => {
  return (
    <div>
      <div className={style.message}>
        {/* the name is value hardcoded yet! */}
        <p className={style.name}>Dave</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
