import React, { useState, useEffect } from 'react'
import axios from "axios"
import {useNavigate,useLocation } from "react-router-dom"



const FinalPage = () => {
    const location = useLocation();
    //     const[score,setScore]=useState(0){}
            const [posts, setPosts] = useState(location.state.post);
    const navigate = useNavigate();
    
    const[count,setCount]=useState()
    const[score,setScore]=useState(0)

    // useEffect(() => {
    //     axios.get('https://dip-kaluse.github.io/examport/portal.json')
    //         .then(response => {
    //             setPosts(response.data.tests)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [])
    //console.log(location.state)
   
    
    
    



    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1>My Interview Portal</h1>

                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading"> { posts.name}- Result</div>
                            <div className="panel-body">
                                <center>
                                    <h2 className="panel-heading">Total no of Questions:{posts.questions.length}
                                    
                                </h2>
                                
                                    
                                    
                                    <h3 className="text-success">Correct Answers: {location.state.score}
                                        <span className="text-danger">Wrong Answers:{posts.questions.length-location.state.score}  </span></h3>
                                        <button  onClick={() => navigate('/home')} href="finish.html" className="btn btn-warning">Home</button>
                                </center>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalPage