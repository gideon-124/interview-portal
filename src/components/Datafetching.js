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
    //console.log(location.state);
    const [post, setPost] = useState(location.state);
    const [count, setCount] = useState(0)
    const [answers, setAnswers] = useState(localStorage.getItem('answers') ? JSON.parse(localStorage.getItem('answers')) : Array(location.state.questions.length).fill(null));
    //console.log(answers);
    //console.log(count)
    // const [score, setScore] = useState(0)
    //console.log(post.questions[count]._id)
    // const localData = localStorage.getItem(`${post.questions[count]._id}`)
    const localData = localStorage.getItem('answers');
    // console.log(localData)
    //const[questions,setQuestions]=useState()
    //const[options,setOptions]=useState([])
    //const[options,setOptions]=useState()

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

    }
    //console.log(post[0])
    //const [score, setScore] = useState(0)
    //console.log(score)
    // if(post.questions[count]?.correctOptionIndex===answers[count]?.includes('${index}'))
    // {
    //     setScore(score+1)
    // }
    //console.log(post.questions[count]?.correctOptionIndex);
    //console.log(answers[count])
    console.log(post.questions[count]?.correctOptionIndex==answers[count])   
    //console.log(setScore)


    const AddData = (index, event) => {
        // console.log("first")
        const ans = [...answers];
        // console.log(ans[count])
        ans[count] = ans[count] ? [...ans[count], index] : [index];
        // console.log(ans)
        setAnswers(ans);
        console.log(event.target.value)
        // setAnswers(prev => prev.map((ans,index) => index === count ? [...ans,event.target.value] : ans));

        // let arrdata = JSON.parse(localStorage.getItem(`answers`))
        // let options = [...arrdata, event.target.value]
        // localStorage.setItem(`${post.questions[count]._id}`, JSON.stringify(options));
    };

    const Addradio = (index, event) => {
        // console.log("second")
        const ans = [...answers];
        ans[count] = index;
        //console.log(ans)
        setAnswers(ans);
        //    console.log(event.target.value)
        // setAnswers(prev => prev.map((ans,index) => index === count ? e.target.value : ans));
        // localStorage.setItem(`${post.questions[count]._id}`, JSON.stringify(e.target.value))
        // let op=[e.target.value]
        //let options=[...Addradio, e.target.value]
    }
    // if (post.questions[count].type) {

    //     localStorage.setItem(`${post.questions[count]._id}`, JSON.stringify([]))
    //     //localStorage.setItem(post.questions[count]._id,JSON.stringify(options))
    //  } 
    //else {
    //     localStorage.setItem(`${post.questions[count]._id}`, JSON.stringify([]))
    //     //localStorage.setItem(post.questions[count]._id, JSON.stringify(options))

    // }


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
                                                        const checked = post.questions[count].type ? answers[count]?.includes(index) : index === answers[count];
                                                        //console.log()
                                                        // console.log(checked)
                                                        //console.log(op)
                                                        return (

                                                            
                                                                <tr key={op}>
                                                                    <input type={post.questions[count].type ? 'checkbox' : 'radio'} name="option" value={index} onClick={(event) => post.questions[count].type ? AddData(index, event) : Addradio(index, event)} id={op} checked={checked} />
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
                                    < button href="test.html" className="btn btn-success" onClick={() => setCount(count - 1)} disabled={count === 0} >previous</button>


                                    < button href="test.html" className="btn btn-success" onClick={handleSubmit} disabled={count === 6} >Next </button>
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