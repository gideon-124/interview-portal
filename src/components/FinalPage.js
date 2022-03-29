import React, { useState, useEffect } from 'react'
import axios from "axios"


const FinalPage = () => {
    //     const[score,setScore]=useState(0)
            const [posts, setPosts] = useState([])
    //    // const navigate = useNavigate();



    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1>My Interview Portal</h1>

                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">{posts.name}- Result</div>
                            <div className="panel-body">
                                <center>
                                    <h2 className="">Total no of Questions:{posts.questions}</h2>
                                    <h3 className="text-success">Correct Answers: 3
                                        <span className="text-danger">Wrong Answers: 4</span></h3>
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