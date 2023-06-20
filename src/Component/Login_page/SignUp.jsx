import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


export default function SignUp () {





    return(
        <>
        <div className='loginPage'>
            <div className='loginPageBorder'>

                <div className="loginHeader">
                    <h3>Login to your account</h3>
                    <p>Don't Have Account? Sign up.</p>

                </div>

                <div className='loginInput'>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <Button className='loginButton'>Login</Button>
                {/* <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                </div>

            </div>
        </div>


    </>

    )
}