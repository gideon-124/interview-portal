import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link, Params, useLocation } from "react-router-dom"

function Datafetching(props) {
    const location = useLocation();
    /* const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://dip-kaluse.github.io/examport/portal.json')
        .then(response=>{
            setPosts(response.data.tests)
        })
        .catch(error=>{
            console.log(error)
        })
    },[]) */
    console.log(location.state);
    const [post, setPost] = useState(location.state);
    const [count, setCount] = useState(0)
    console.log(count)
    const [score, setScore] = useState(0)

    

    const handleSubmit = () => {
        setCount(count + 1)
        // if(correctOptionIndex){
        //     setScore(score+1)
        // }

    }

    return (
        <div>
            <>
                <div className="container">
                    <div className="row">
                        <h1>My Interview Portal</h1>

                        <div className="col-md-12">
                            <div className="panel panel-default">

                                <div className="panel-heading">
                                    {
                                        post.name

                                    }

                                </div>
                                <div className="panel-body">
                                    <form>
                                        <label>
                                            {
                                                <p>{post.questions[count].questionText}</p>


                                            }

                                        </label>
                                        <div className="radio">
                                            <label>


                                                {/* {console.log(post.questions[1].options)} */}
                                                {

                                                    post.questions[count].options.map((op, index) => {
                                                        //console.log(op)
                                                        return (


                                                            <tr key={op}>
                                                                <input type="radio" name="option" value="option1" />
                                                                <td>{op}</td>


                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </label>
                                        </div>

                                    </form>
                                </div>
                                <div className="panel-footer">
                                    < button href="test.html" className="btn btn-success" onClick={() => setCount(count - 1)}>previous</button>


                                    < button href="test.html" className="btn btn-success" onClick={handleSubmit} >Next </button>
                                    <Link to="/final">
                                        <button href="finish.html" className="pull-right btn btn-danger">Finish</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {

                    //  posts.tests?.map((eachData) => (
                    //     <tr> <td>{eachData.id}</td>           
                    //      <td>{eachData.name}</td>
                    //      {/* <td> {eachData.questions}</td> */}

                    //     </tr>
                    //     ))

                    //posts.tests?.map(each=>console.log(each))
                    //posts.tests?.map()
                    // posts.tests?.map(
                    //     <div key={data.id.value}>

                    //     </div>
                    // )
                    // posts.tests.map(post=>(
                    //     key={post.id}>{post.name}
                    // ))







                }
            </>




        </div>
    )
}

export default Datafetching