import React from 'react'
import { Link } from "react-router-dom";

const Page1 = () => {
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
                        <tr>
                            <td>AngularJS Test</td>
                            <td>5</td>
                            <td>
                                <Link to ="/questions">
                                <a href="test.html" className="btn btn-warning">Start Test</a> 
                                </Link>
                                </td>
                        </tr>
                        <tr>
                            <td>Javascript Test</td>
                            <td>7</td>
                            <td> 
                            <Link to ="/questions">
                                <a href="test.html" className="btn btn-warning">Start Test</a>
                                </Link>
                                </td>
                        </tr>
                        <tr>
                            <td>Node JS Test</td>
                            <td>5</td>
                            <td> <Link to ="/questions">
                                <a href="test.html" className="btn btn-warning">Start Test</a>
                                </Link>
                                </td>
                        </tr>
                        
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