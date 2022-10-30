import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { showStatus } from '../../store/gitSlice'

import {fetchGit} from '../../store/gitSlice' 
import {selectAllGit} from '../../store/gitSlice'

import {RiChatFollowUpFill,RiUserFollowFill} from 'react-icons/ri'

function Index() {
 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGit())
  },[])
  const status = useSelector(showStatus)
  const info = useSelector(selectAllGit)
  console.log(info)
  return (
    <div className='container mx-auto'>
      {status === 'loading' && <div className='text-center text-4xl mt-5 font-bold tracking-widest'>LOADING</div>}
      {status === 'failed' && <div className='text-center text-4xl mt-5 font-bold tracking-widest'>An error happened.</div>}
      {status === 'succeeded' &&
        <div className='flex bg-white p-10 rounded-lg'> 
          <div className='left__profile w-1/3 flex justify-center flex-col items-center'>
            <h2 className='text-4xl font-bold mb-5 text-slate-700'>Github Profile</h2>
              <img src={info.avatar_url} alt='avatar' className='rounded-full w-64 h-64 mb-5'/>
              <p className='text-2xl font-semibold text-slate-700'>{info.bio}</p>
              <p className='flex justify-center items-center text-slate-700 rounded bg-green-200 text-green-800 hover:scale-105 border w-3/4 p-2 text-2xl mt-5'><RiChatFollowUpFill className='mr-5'/> {info.followers} followers</p>
              <p className='flex justify-center items-center text-slate-700 rounded bg-blue-200 text-blue-800 hover:scale-105 border w-3/4 p-2 text-2xl mt-5'><RiUserFollowFill className='mr-5'/> {info.following} following</p>
          </div>
          <div className='w-full'>
            <h2 className='text-4xl font-bold mb-5 text-slate-700'>Github Repositories</h2>
          </div>
        </div>
      }
    </div>
    
  )
}

export default Index