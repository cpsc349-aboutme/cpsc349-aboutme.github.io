import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCI763tTepCgvqnnnWM9YpPEuTxlMtAlns",
  authDomain: "aboutme-8a62e.firebaseapp.com",
  projectId: "aboutme-8a62e",
  storageBucket: "aboutme-8a62e.appspot.com",
  messagingSenderId: "303530026856",
  appId: "1:303530026856:web:e2ea4d1075a4d9ab4dd8dd",
  measurementId: "G-X2WR2EJ8NV"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();



export default function App() {
  return (
    <div className="container">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <div className="row justify-content-center">
            <div className="col">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}


function Home() {
    return (
    <div>
      <h2>Home</h2>
      <SignUpForm />
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,this.state.email, this.state.password).then(async(userRec) => {
      const user = userRec.user;
      await setDoc(doc(db,"users",user.uid),{
        name: this.state.username,
        email: this.state.email,
        password: this.state.password
      });
      this.setState({'redirect': true});
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorCode + " : " + errorMessage);
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/about" />
    }
    else{
    return (     
      <form onSubmit={this.handleSubmit}>  
        <div className="form-group">
          <label>Name</label>
          <input 
            name="username" 
            className="form-control" 
            type="text"
            value={this.state.username}
            onChange={this.handleChange} />
        </div>      
        <div className="form-group">
          <label>Email</label>
          <input 
            name="email" 
            className="form-control" 
            type="text"
            value={this.state.email}
            onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            name="password" 
            className="form-control" 
            type="password"
            value={this.state.password}
            onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <button
            className="btn-success btn-lg"
            type="submit">Register</button>
            <Link to= "/login"
            className="btn-success btn-lg">Login</Link>
        </div>

      </form>
    );
  }
}
}
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth,this.state.email,this.state.password).then((success) =>{
      this.setState({'redirect': true});
    })
    .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode + " : " + errorMessage);
  });
}

  render() {
    if (this.state.redirect) {
      return <Redirect to="/about" />
    }
    else{
    return (     
      <form onSubmit={this.handleSubmit}>     
        <div className="form-group">
          <label>Email</label>
          <input 
            name="email" 
            className="form-control" 
            type="text"
            value={this.state.email}
            onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            name="password" 
            className="form-control" 
            type="password"
            value={this.state.password}
            onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <button
            className="btn-success btn-lg"
            type="submit">Login</button>
        </div>
      </form>
    );
  }
}
}
