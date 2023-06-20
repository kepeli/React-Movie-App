import { useRef, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';


export default function Login() {
    let mailRef = useRef(null)
    let passwordRef = useRef(null)

    const [wrongCred, setWrongCred] = useState(false)

    function formHandler(e) {
        e.preventDefault()
        console.log("Hello");

        fetch("http://localhost:3000/api/login", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: mailRef.current.value, password: passwordRef.current.value })
        })
            .then(response => response.json()).then(data => {
                if (data.status) {
                    // setWrongCred(false);
                    window.location = `/?name=${mailRef.current.value}`
                }
                else {
                    setWrongCred(true);
                    console.log('Email or Password Incorrect');
                }
            })
    }

    return (
        <>

            <div className='loginPage'>


                <div className='loginPageBorder'>
                    <div className="loginHeader">


                        <h3>Login to your account</h3>
                        <p>Don't Have Account? Sign up.</p>

                    </div>
                    <Form onSubmit={formHandler}>

                        <div className='loginInput'>
                            {wrongCred && <label className='wrongDetails'><i>Incorrect email or password!!!</i></label>}
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control ref={mailRef} name='email' type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control ref={passwordRef} name="password" type="password" placeholder="Password" />
                            </FloatingLabel>
                            <button type="submit" className='loginButton'>Login</button>
                            {/* <Button onClick={formHandler} type="submit" className='loginButton'>Login</Button> */}
                            {/* <div className='loginPage'> */}
                                {/* <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}

                            {/* </div> */}
                        </div>

                    </Form>
                </div>
            </div>


        </>
    );
}