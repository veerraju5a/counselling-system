import React, {useEffect, useState} from 'react'
import axios from 'axios'

const DataFetch = () => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [buttonid, setButtonid] = useState(1)
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
      .then(res=>{
        console.log(res)
        setPosts(res.data)
      })    
    },[buttonid])  
    function handleClick(){
            setButtonid(id)
    }
      
  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={handleClick}>FetchPost</button>
        {posts.title}
        {/* <ul>
            {
                posts.map(post=>(
                   <li key='id'>{post.title}</li> 
                ))
            }
        </ul> */}
    </div>
  )
}

export default DataFetch