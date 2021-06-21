import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import LogIn from'./components/Login'
import SignUp from'./components/Signup'
import DeleteCourse from './components/Teacher/Delete'
import main from './components/Teacher/main'
import main2 from './components/Teacher/main2'
import Dashboard from './components/Student/Dashboard'
import join from './components/Student/join'
import mainpage from './home/Landingpage'
 import history from './history'
import UpdateCourse from './components/Teacher/UpdateCourse'
import Unenrol from './components/Student/Unenrol'


const App = () => {
    return (
        <div className="ui container">

            <Router history={history} >

                <div>
                   
                    {/* //switch only shows the first path that gets matched unlinke react router which shows all the path matching to given path */}
                    <Switch>
                        <Route path="/" exact component={mainpage} />
                        <Route path="/login" exact component={LogIn} />
                        {/* <Route path="/student/dashboard" exact component={Sidebar}/> */}
                        <Route path="/teacher/dashboard/CreateCourse" exact component={main}/>
                        <Route path="/teacher/dashboard" exact component={main2}/>
                        <Route path="/teacher/dashboard/EditCourse/:id" exact component={UpdateCourse}/>
                        <Route path="/teacher/dashboard/DeleteCourse/:id" exact component={DeleteCourse}/>
                        <Route path="/student/dashboard" exact component={Dashboard}/>
                        <Route path="/student/dashboard/joincourse" exact component={join}/>
                        <Route path="/student/dashboard/unenrol/:id" exact component={Unenrol}/>
                        <Route path="/signup" exact component={SignUp} />
                       
                        
                        
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
export default App;