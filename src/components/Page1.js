import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Page1 = () => {

    const [posts, setPosts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://dip-kaluse.github.io/examport/portal.json')
            .then(response => {
                setPosts(response.data.tests)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    //console.log(post.questions[0]._id)

    return (
        <div>

            <div className="container">
                <div className="row">
                    <h1>My Interview Portal</h1>

                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Test</th>
                                    <th>No of Questions</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                    posts.map((post, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{post.name}</td>
                                                <td>{post.questions.length}</td>
                                                <td>
                                                    
                                                <div onClick={() => navigate(`/questions/${post._id}/${post.questions[0]._id}`, {state:post})} className="btn btn-warning">Start Test

                                                    </div>
                                                </td>
                                            </tr>
                                        )

                                    })
                                }
                                

                            </tbody>
                        </table>
                    </div>
                </div>

                API Url: <a href="http://interviewapi.stagging.in/getQuizData" target="_blank">http://interviewapi.stagging.in/getQuizData</a>
            </div>


        </div>

    )
}

export default Page1