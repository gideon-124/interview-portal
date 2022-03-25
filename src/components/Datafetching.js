import React,{useState,useEffect} from 'react'
import axios from "axios"
import {Link,Params} from "react-router-dom"

function Datafetching() {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get('http://interviewapi.ngminds.com/getQuizData/')
        .then(response=>{
            setPosts(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
    //console.log(posts)
  return (
    <div>
        <ul>
            { 
                //posts.tests?.map(each=>console.log(each))
                // posts.tests?.map(
                //     <div key={data.id.value}>

                //     </div>
                // )
                // posts.tests.map(post=>(
                //     key={post.id}>{post.name}
                // ))
                
                
                
            }
        </ul>
        <Link to = "/final">
        <button className='btn-warning'> save</button> </Link>

        <Link to = "/final">
        <button className='btn-danger'> next</button> </Link>
        

    </div>
  )
}

export default Datafetching