import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Post from './Actuals/Post'
import Page from './Components/Page'

const App = () => {

  const [posts, setPosts] = useState([])
  const [url, setUrl] = useState(1)

 
  useEffect(()=>{
    const fetchData= async()=>{
      const res = await axios.get(`https://reqres.in/api/users?page=${url}`)
      setPosts(res.data)
    }
    fetchData()
  },[url])

  // console.log(posts.data)
  // console.log(url)

  return(
    <div>
      <button onClick={()=>{setUrl(1)}}>1</button>
      <button onClick={()=>{setUrl(2)}}>2</button>
      {/* <Post posts={posts}/> */}
      {/* <Page/> */}
    </div>
  )
}

export default App