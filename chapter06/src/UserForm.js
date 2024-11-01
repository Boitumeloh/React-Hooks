import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

function UserForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //setting error initial state
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    //prevents default submisions
    //allows fields to be filled out
    e.preventDefault();
    let emailValid = false;
    let passwordValid = false;
    //validation rules for email
    if (email.length == 0) {
      setEmailError("Email is required");
    } else if (email.length < 6) {
      setEmailError("Email should be minimum 6 characters");
    } else if (email.indexOf(" ") >= 0) {
      setEmailError("Email cannot contain spaces");
    } else {
      setEmailError("");
      emailValid = true;
    }
    if (emailValid) {
      alert("Email: " + email + "\nPassword: " + password);
    }
    //validation rules for password
    if (password.length < 8) {
      setPasswordError("Password must be at least be 8 characters long");
    } else {
      setPasswordError("");
      passwordValid = true;
    }

    //submits once data is valid
    if (emailValid && passwordValid) {
      alert("Email: " + email + "\nPassword: " + password);
      setEmail("");
      setPassword("");
      //   setEmailError('');
      //   setPasswordError('');
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          {emailError.length > 0 && (
            <Alert variant="danger">{emailError}</Alert>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {passwordError.length > 0 && (
            <Alert variant="danger">{passwordError}</Alert>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {/* Email entered: {email}
      <br />
      Password entered: {password} */}
    </div>
  );
}

export default UserForm;
