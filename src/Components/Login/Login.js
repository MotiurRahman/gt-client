import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loader, setLoader, signIn, googleLogin } =
    useContext(AuthContext);

  //Google Login

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const googleLoginbtn = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        setMessage("");
        //setAuthToken(result.user);
        // navigate(from, { replace: true });
      })
      .catch((error) => setMessage(error.message));
  };

  return (
    <div className="w-50 mx-auto">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" className="mt-4" type="submit">
          Login
        </Button>
      </Form>
      <Button
        variant="success"
        onClick={googleLoginbtn}
        className="mt-4"
        type="button"
      >
        Login With Google
      </Button>
    </div>
  );
};

export default Login;
