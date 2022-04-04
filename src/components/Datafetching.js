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
    //console.log(count)
    const [score, setScore] = useState(0)
    //const[questions,setQuestions]=useState()
    //const[options,setOptions]=useState([])
    //const[options,setOptions]=useState()
    const handleSubmit = (e) => {
      // setCount(count + 1)
        // if(correctOptionIndex){
        //     setScore(score+1)
        // }
        // console.log(post[0].questions.length)
        setCount(post.questions.length>=count?count+1:count)
        //setCount(post[0].questions.length>count?count+1:count)
        //console.log(post[0])
        let a= post.questions[count]?.correctOptionIndex
        console.log(a)
    //    const  b=[...a]
    //     console.log(b)
        // const b=[count]
        // if(a==b){
        //     setScore(pre=>pre+1) 
        // }
        // else{
        //     setScore(score)
        // }
      //console.log(a==b) 
    }


    const AddData = (event) => {
        let arrdata = JSON.parse(localStorage.getItem(post.questions[count]._id))

            let  options = [...arrdata, event.target.value]
            if(event.target.checked){
                const options=[...arrdata,event.target.value]
                console.log(options)
                console.log(event.target.checked)
                
            }
            localStorage.setItem(post.questions[count]._id, JSON.stringify(options));
          };
    
            
            
         
           

        





      const Addradio=(e)=>{
        localStorage.setItem(JSON.stringify(post.questions[count]._id), JSON.stringify(e.target.value))
        // let op=[e.target.value]
        //let options=[...Addradio, e.target.value]
      }
      if(post.questions[count].type){
        localStorage.setItem(post.questions[count]._id, JSON.stringify([]))
        //localStorage.setItem(post.questions[count]._id,JSON.stringify(options))
      }
    //   else{
    // localStorage.setItem(post.questions[count]._id, JSON.stringify([]))
    //  //localStorage.setItem(post.questions[count]._id, JSON.stringify(options))
    //   }
    //   post.questions[count]._id.splice(1);
      //localStorage.removeItem(post.questions[count]._id, JSON.stringify([]))
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
                                                                <input type={post.questions[count].type ? 'checkbox' : 'radio'} name="option" value={index} onClick={post.questions[count].type ? AddData:Addradio} id={op}/>
                                                                <label htmlFor={op}>{op}</label>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <div className="panel-footer">
                                    < button href="test.html" className="btn btn-success" onClick={() => setCount(count - 1)} disabled={count===0} >previous</button>
                                    < button href="test.html" className="btn btn-success" onClick={handleSubmit} disabled={count===6} >Next </button>
                                    
                                        <button href="finish.html"  onClick={() => navigate('/final',{state: {post: post, score: score}})} className="pull-right btn btn-danger">Finish</button>
                                    
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