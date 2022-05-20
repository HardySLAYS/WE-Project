const Message = ({ children, from, avatar }) => {

  return (
    <div>
      <div className='flex items-center w-full p-2 m-1'>
        <img src={avatar} className='w-10 h-10 ml-2 rounded-full pointer-events-none select-none' />
        <p className='ml-3 text-lg'>{from}</p>
      </div>
      <div className='ml-6 mr-2'>{children}</div>
    </div>
  )
}

export default Message