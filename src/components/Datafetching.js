import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link, Params, useLocation,useNavigate } from "react-router-dom"

function Datafetching(props) {
    const location = useLocation();
    const navigate = useNavigate();
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
    //console.log(location.state);
    const [post, setPost] = useState(location.state);
    const [count, setCount] = useState(0)
    const [answers, setAnswers] = useState(localStorage.getItem('answers') ? JSON.parse(localStorage.getItem('answers')) : Array(location.state.questions.length).fill(null));
    
    const [score, setScore] = useState(0)

    useEffect(() => {
        localStorage.setItem('answers', JSON.stringify(answers));
    }, [answers])

    // const [cc,setCc]=useState(post.questions[count]?.correctOptionIndex)
    // console.log(cc)









    const handleSubmit = (e) => {
        setCount(count + 1)

        // if(correctOptionIndex){
        //     setScore(score+1)
        // }
        // console.log(post[0].questions.length)
        // setCount(post[0].questions.length>=count?count+1:count)
        //setCount(post[0].questions.length>count?count+1:count)
        //console.log(post[0])
        let a= post.questions[count]?.correctOptionIndex
        const b=answers[count]
        if(a==b){
            setScore(pre=>pre+1) 
        }
        else{
            setScore(score)
        }
      //console.log(a==b) 


    }
    console.log(score)
   
  

    


    const AddData = (index, event) => {
        //console.log(event.target.checked)
        if(event.target.checked){
        const ans = [...answers];
         ans[count] = ans[count] ? [...ans[count], index] : [index];
        setAnswers(ans);

        }else{
            const ans=[...answers][count]
            const cc= ans.filter(each=>each !== index)
        const answ = [...answers]
        answ[count] = cc
        setAnswers(answ);
            
            
         
           

        }
        
       // console.log(event.target.value)
    };

    const Addradio = (index, event) => {
        
        const ans = [...answers];
        ans[count] = index;

        setAnswers(ans);
           //console.log(event.target.value)
        
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
                                                        //const check = post.questions[count].type ? answers[count]?.includes(index) : index === answers[count];
                                                        //console.log()
                                                        // console.log(checked)
                                                        //console.log(op)
                                                        return (

                                                            <tbody>
                                                                <tr key={op}>
                                                                    <input type={post.questions[count].type ? 'checkbox' : 'radio'} name="option" value={index} onClick={(event) => post.questions[count].type ? AddData(index, event) : Addradio(index, event)} id={op} />
                                                                    <label htmlFor={op}>{op}</label>


                                                                </tr>
                                                            </tbody>
                                                            
                                                        )
                                                    })
                                                }
                                            </label>
                                        </div>

                                    </form>
                                </div>
                                <div className="panel-footer">
                                    < button href="test.html" className="btn btn-success" onClick={() => setCount(count - 1)} disabled={count === 0} >previous</button>


                                    < button href="test.html" className="btn btn-success" onClick={handleSubmit} disabled={count === 7} >Next </button>
                                    <button  onClick={() => navigate('/final',{state: {post: post, score: score}})} href="finish.html" className="pull-right btn btn-danger">Finish</button>
                                    
                                    {/* <Link to="/final">
                                        <button href="finish.html" className="pull-right btn btn-danger">Finish</button>
                                    </Link> */}

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