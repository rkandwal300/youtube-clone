import React , {useState , useContext , useEffect} from 'react'
import { Context } from '../context'
import LeftNav from './LeftNav'
import VideoCard from './VideoCard'

const Feed = () => {
  const { loading , searchResults } = useContext(Context)

  useEffect(()=>{
    document.getElementById('root').classList.remove('custom-h')
  },[])

  return (
    
    <div className=' flex flex-row h-[calc(100% - 56px)] '>
      <LeftNav />
      <div className='grow w-[calc(100% - 240px)] md:ml-[240px] min-h-screen overflow-y-auto bg-black '> 
        <div className="grid grid-cols-1    md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {!loading && searchResults &&searchResults?.map((item , id) => {
              if(item.type !== 'video'){ return false ;
              }

              return (
                <VideoCard 
                key={item?.video?.videoId +"" + id} 
                video={item.video}
                />
              )
            })} 
        </div> 

      </div>
      

    </div>
  )
}

export default Feed