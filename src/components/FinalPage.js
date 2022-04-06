import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
const FinalPage = () => {
  const location = useLocation();
  //     const[score,setScore]=useState(0){}
  const [posts, setPosts] = useState(location.state.post);
  const navigate = useNavigate();
  //console.log(location.state);
  const [count, setCount] = useState();
  const [score, setScore] = useState(0);
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>My Interview Portal</h1>
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading"> {posts.name}- Result</div>
              <div className="panel-body">
                <center>
                  <h2 className="panel-heading">
                    Total no of Questions:{posts.questions.length}
                  </h2>
                  <h3 className="text-success">
                    Correct Answers: {localStorage.getItem("score")}
                    <span className="text-danger">
                      Wrong Answers:
                      {posts.questions.length - localStorage.getItem("score")}
                    </span>
                  </h3>
                  <button
                    onClick={() => { localStorage.clear()
                        navigate("/home")}}
                        
                    href="finish.html"
                    className="btn btn-warning"
                  >
                    Home
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FinalPage;