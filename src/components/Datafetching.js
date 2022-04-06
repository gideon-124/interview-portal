import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Params, useLocation, useNavigate, useParams } from "react-router-dom";
function Datafetching(props) {
    const params=useParams();
    //console.log(params)
  const location = useLocation();
  const navigate = useNavigate();
  const [post, setPost] = useState(location.state);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(0);
  const [radio, setRadio] = useState(0);
  
  useEffect(()=>{
   const qno= post.questions.findIndex(que=>que._id===params.id1)
//    console.log(params.id1)
//    console.log(qno)
   setCount(qno)
  },[])
  const handleSubmit = (e) => {
    setCount(post.questions.length >= count ? count + 1 : count);
    let a = [];
    a = post.questions[count].correctOptionIndex;
    
    let b = localStorage.getItem(post.questions[count]._id);
    
    if (JSON.stringify(a) == b) {
        localStorage.setItem("score",score+1)
      setScore((prev) => prev + 1);
      
    } else {
      setScore(score);
    }
    
   
  };
  const handleSub=(e)=>{
      setCount(count-1)
     
  }
  const removSub=()=>{
      post?.questions.map((ele)=>{
         localStorage.removeItem(ele._id)
        console.log("ele._id")
      })
  }
  const AddData = (event, index) => {
    const arr =
      JSON.parse(localStorage.getItem(post.questions[count]._id)) || [];
    if (event.target.checked) {
      let c = [...arr, index];
      localStorage.setItem(post.questions[count]._id, JSON.stringify(c.sort()));
    } else {
      let c = [...arr];
      const d = c.filter((each) => each != event.target.value);
      localStorage.setItem(post.questions[count]._id, JSON.stringify(d));
    }
  };
  const Addradio = (e, index) => {
    localStorage.setItem(post.questions[count]._id, JSON.stringify(index));
    // console.log(setRadio(e.target.value))
    //setRadio((prev) => prev + 1);
  };
//   const  handlefinish=()=>{
//       removSub()
//   }
  return (
    <div>
      <>
        <div className="container">
          <div className="row">
            <h1>My Interview Portal</h1>
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-heading">{post.name}</div>
                <div className="panel-body">
                  <form>
                    <label>{<p>{post.questions[count].questionText}</p>}</label>
                    <div className="radio">
                      <label>
                        {/* {console.log(post.questions[1].options)} */}
                        {post.questions[count].options.map((op, index) => {
                          let checked = post.questions[count].type
                            ? JSON.parse(
                                localStorage.getItem(post.questions[count]._id)
                              )?.includes(index)
                            : JSON.parse(
                                localStorage.getItem(post.questions[count]._id)
                              ) == index;
                          //console.log(checked)
                          return (
                            <tr key={op}>
                              <input
                                type={
                                  post.questions[count].type
                                    ? "checkbox"
                                    : "radio"
                                }
                                name="option"
                                value={index}
                                onClick={
                                  post.questions[count].type
                                    ? (e) => AddData(e, index)
                                    : (e) => Addradio(e, index)
                                }
                                id={op}
                                defaultChecked={checked}
                              />
                              <label htmlFor={op}>{op}</label>
                            </tr>
                          );
                        })}
                      </label>
                    </div>
                  </form>
                </div>
                <div className="panel-footer">
                  <button
                    href="test.html"
                    className="btn btn-success"
                    onClick={ () => {handleSub()
                        navigate(`/questions/${post._id}/${post.questions[count-1]._id}`,{state:post})}}
                    disabled={count === 0}
                  >
                    previous
                  </button>
                  <button
                    href="test.html"
                    className="btn btn-success"
                    onClick={ () => {handleSubmit();
                        navigate(`/questions/${post._id}/${post.questions[count+1]._id}`,{state:post})}}
                    disabled={count === post.questions.length - 1}
                  >
                    Next{" "}
                  </button>
                  <button
                    href="finish.html"
                    onClick={async () => {
                        
                      handleSubmit()
                      navigate("/final", {
                        state: { post: post, score: score },
                      });
                    }}
                    className="pull-right btn btn-danger"
                  >
                    Finish
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default Datafetching;