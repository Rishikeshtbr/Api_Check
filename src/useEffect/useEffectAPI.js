import React,{useEffect,useState} from 'react'
import '../App.css'
import 'font-awesome/css/font-awesome.min.css';

const UseEffectAPI = () => {

    const [posts, setPosts] = useState([])
    const [num, setNum] = useState(1)

    function onclickHandler(page){
        setNum(page)
    }

    const getPosts = async()=>{
        const res = await fetch(`https://reqres.in/api/users?page=${num}`)
        const a = await res.json()
        setPosts(a.data)
    }
    
    console.log(posts.data)
    useEffect(()=>{
        getPosts()
    },[])
  
    const pages = 2

    const numberofPages = []
    for(let i = 1; i<=pages ; i++){
        numberofPages.push(i)
    }
    console.log(numberofPages)
    return (
        <div className="box">
            {
                posts.map((post)=>{
                    return(                        
                        <div className="container">
                            <img src={post.avatar}/>
                            <div className="info">
                                <div className="name">
                                    <h2><i className="fas fa-user-circle"></i>{post.first_name} {post.last_name}</h2>                                    
                                </div>
                                <h3 className="mail">{post.email}</h3>
                            </div>
                        </div>   
                    )
                })
            }
            <div>
                {numberofPages.map((page,)=>{
                    
                    return(
                        <button onClick={onclickHandler}>{page}</button>
                    )
                })}

            </div>
                       
        </div>
    )
}

export default UseEffectAPI
