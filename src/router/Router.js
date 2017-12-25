import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    HashRouter,
    NavLink
} from 'react-router-dom'

import Home from './../pages/Home/index'
import Login from './../pages/Login/index'
import Hot from './../pages/Hot/index'
import db from './../components/utils/index'

import './../style/nav.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: db.get("nav")
        }
        console.log(this.state.nav,"con中的state")
        this.handleNav = this.handleNav.bind(this)
        
    }

    handleNav(clickNav) {
        this.setState({
            nav: clickNav
        })
        db.save(["nav"], { "nav": clickNav });
    }
    componentDidMount() {
        console.log("did")
        this.setState({
            nav: db.get("nav")
        })
    }
    render() {
        return (
            <HashRouter>
                <div>
                    <div className="m-top">
                        <div className="wrap">
                            <div className="logo"></div>
                            <ul className="nav">
                                <li
                                    onClick={this.handleNav.bind(null, "index")}
                                    className={this.state.nav == "index" ? 'nav-active' : ""}
                                >
                                    <span>
                                        <Link to="/">index</Link>
                                        <sub className="cor">&nbsp;</sub>
                                    </span>
                                </li>
                                <li
                                    onClick={this.handleNav.bind(null, "hot")}
                                    className={this.state.nav == "hot" ? 'nav-active' : ""}
                                >
                                    <span>
                                        <Link to="/hot">hot</Link>
                                        <sub className="cor">&nbsp;</sub>
                                    </span>
                                </li>
                                <li
                                    onClick={this.handleNav.bind(null, "login")}
                                    className={this.state.nav == "login" ? 'nav-active' : ""}
                                >
                                    <span>
                                        <Link to="/login">login</Link>
                                        <sub className="cor">&nbsp;</sub>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Route exact path="/" component={Home} />
                    <Route path="/hot" component={Hot} />
                    <Route path="/login" component={Login} />
                </div>
            </HashRouter>
        )
    }
}

export default App;