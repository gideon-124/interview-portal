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
    const[answers,setAnswers]=useState(0)
    const[radio,setRadio]=useState(0)
   // console.log(radio)
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
        let a=[]
        a= post.questions[count].correctOptionIndex
            
        //     console.log(String(a));
        // console.log(typeof(a))
        console.log(a)
        
        let b=localStorage.getItem((post.questions[count]._id))
        console.log(b)
        // console.log(JSON.stringify(a) == JSON.stringify(b));
        // console.log(JSON.stringify(b))
        // console.log(typeof(b))
        
        
    
        //console.log(JSON.stringify(a)==b)
        if((JSON.stringify(a)==b)){
            setScore(prev=>prev+1)
            console.log(score)
        }
        else{
            setScore(score)
        }
      //console.log(a==b)
    }
    const AddData = (event,index) => {
        //localStorage.setItem(JSON.stringify(post.questions[count]._id),JSON.stringify(event.target.value))
        //const a=[...arr, event.target.value]
        const arr=JSON.parse(localStorage.getItem((post.questions[count]._id)))||[ ]
        //console.log(arr)
       // let c=[...arr,event.target.value]
        //localStorage.setItem((post.questions[count]._id),JSON.stringify(c))
        if(event.target.checked){
        let c=[...arr,(index)]
        localStorage.setItem((post.questions[count]._id),JSON.stringify(c))
    }else{
       let c=[...arr]
        const d=c.filter(each=>each != (event.target.value))
        //const dc=[...arr]
       // console.log(d)
        localStorage.setItem((post.questions[count]._id),JSON.stringify(d))
    }
        //console.log(post.questions[count]._id)
        //console.log(first)
    }
      const Addradio=(e,index)=>{
        localStorage.setItem((post.questions[count]._id), JSON.stringify(index))
       // console.log(setRadio(e.target.value))
       setRadio(prev=>prev+1)
        
      }
    //  x
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
                                                { //const check = post.questions[count].type ? answers[count]?.includes(index) : index === answers[count];
                                                    post.questions[count].options.map((op, index) => {
                                                       
                                                       
                                                        //let checked =JSON.parse(localStorage.getItem(post.questions[count]._id))==index

                                                        // let  radi =JSON.parse(localStorage.getItem(post.questions[count]._id))==index
                                                        // let checki=JSON.parse(localStorage.getItem(post.questions[count]._id)).includes(index)
                                                        // console.log(JSON.parse(localStorage.getItem(post.questions[count]._id)))
                                                        // console.log(checki)
                                                        //console.log(radi)
                                                        
                                                        let checked=post.questions[count].type ? JSON.parse(localStorage.getItem(post.questions[count]._id))?.includes(`${index}`): JSON.parse(localStorage.getItem(post.questions[count]._id))==index
                                                       //console.log(checked)
                                                        return (
                                                            <tr key={op}>
                                                                <input type={post.questions[count].type ? 'checkbox' : 'radio'} name="option" value={index} onClick={post.questions[count].type ?(e)=> AddData(e,index):(e)=>Addradio(e,index)} id={op} defaultChecked={checked}  />
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
                                    < button href="test.html" className="btn btn-success" onClick={handleSubmit} disabled={count===post.questions.length-1} >Next </button>
                                        <button href="finish.html"  onClick={()  => navigate('/final',{state: {post: post, score: score}})} className="pull-right btn btn-danger">Finish</button>
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