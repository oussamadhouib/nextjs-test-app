import Head from "next/head";
import Link from "next/link";
import { Wrapper } from "../css/styles";
import axios from "axios";
import { useState } from "react";
// import { useHistory } from "react-router-dom";

export default function Home() {
  // const history = useHistory();
  const [credentials, setCredentials] = useState({email: "", password: ""});

  var data = JSON.stringify({
    email: credentials.email,
    password: credentials.password,
  });

  var config = {
    method: "post",
    url: "http://localhost:5000/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const Login = () => {
    axios(config)
      .then(function (response) {
        if(response.data.token)
        {
          window.location.href = "/dashboard";
        } 
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const setUserCredentials = (e, name) =>{
    setCredentials({...credentials, [name]: e.target.value })
  }

  return (
    <Wrapper>
      <div className="container">
        <Head>
          <title>Login Form Using HTML And CSS Only</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        </Head>

        <main>
          <div className="container" id="container">
            <div className="form-container log-in-container">
              <form action="#">
                <h1>Login</h1>
                <div className="social-container">
                  <a href="#" className="social">
                    <i className="fa fa-facebook fa-2x"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa fa-twitter fa-2x"></i>
                  </a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" onChange={(e) => setUserCredentials(e, "email")} />
                <input type="password" placeholder="Password" onChange={(e) => setUserCredentials(e, "password")} />
                <Link href="/">
                  <a>Create account</a>
                </Link>
                <button onClick={Login}>Log In</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-right">
                  <h1>HTML CSS Login Form</h1>
                  <p>
                    This login form is created using pure HTML and CSS. For
                    social icons, FontAwesome is used.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <style jsx global>{`
          * {
            box-sizing: border-box;
          }

          body {
            background: #fffff;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-family: "Montserrat", sans-serif;
            height: 100vh;
            margin: -20px 0 50px;
          }

          h1 {
            font-weight: bold;
            margin: 0;
          }

          p {
            font-size: 14px;
            font-weight: 100;
            line-height: 20px;
            letter-spacing: 0.5px;
            margin: 20px 0 30px;
          }

          span {
            font-size: 12px;
          }

          a {
            color: #333;
            font-size: 14px;
            text-decoration: none;
            margin: 15px 0;
          }

          button {
            border-radius: 20px;
            border: 1px solid #ff4b2b;
            background-color: #ff4b2b;
            color: #ffffff;
            font-size: 12px;
            font-weight: bold;
            padding: 12px 45px;
            letter-spacing: 1px;
            text-transform: uppercase;
            transition: transform 80ms ease-in;
          }

          form {
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 50px;
            height: 100%;
            text-align: center;
          }

          input {
            background-color: #eee;
            border: none;
            padding: 12px 15px;
            margin: 8px 0;
            width: 100%;
          }
        `}</style>
      </div>
    </Wrapper>
  );
}
