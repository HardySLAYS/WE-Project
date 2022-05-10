import { useCollection } from '../hooks/useCollection'
import Message from './Message'
import UserInput from './UserInput'

const Dashboard = () => {
  const { documents } = useCollection('messages', ["createdAt", "desc"])
  console.log(documents);
  return (
    <div className='flex flex-col w-full h-full col-span-2 overflow-auto lg:col-span-3 xl:col-span-4'>
      <div className='p-2 pb-0 text-xl select-none'>Dashboard</div>
      
      <div id='messages' className='flex flex-col-reverse flex-grow p-2 m-2 mb-0 overflow-auto rounded-md bg-zinc-800'>
        {documents && documents.map(message => {
          return <Message key={message.id} from={message.from} avatar={message.avatar}>{message.message}</Message>
        })}
      </div>
      
      <UserInput />
    </div>
  )
}

export default Dashboard