import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { doSignIn } from "../../store/actions/act_user";

const SignIn = ({ signin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    let history = useHistory();

    const submitHandle = event => {
        event.preventDefault()
        signin(formData)
        history.push("/home");
    };


    const changeFieldHandle = event => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
    }
    return (
        <div className="container-singin">
            <form onSubmit={submitHandle}>
                <div className="form-signIn">
                    <div className="label-signInUp">
                        <br></br>
                    </div>
                    <div className="label-signInUp">
                    </div>
                    <div className="label-signInUp text-right">
                        <label >Email:</label>
                    </div>
                    <div className="label-signInUp">
                        <input type="text" className="textarea-input" name='email' placeholder='helenjohnson@gmail.com' onChange={changeFieldHandle} />
                    </div>
                    <div className="label-signInUp text-right">
                        <label >Password:</label>{' '}
                    </div>
                    <div className="label-signInUp">
                        <input type="password" className="textarea-input" name='password' placeholder='**********' onChange={changeFieldHandle} />
                    </div>
                    <div className="label-signInUp">
                        <br></br>
                    </div>
                </div>
                <hr />
                <div className="butttext">
                    <p className="text-footnote">By clicking "Submit", you are agree to us processing your information in accordance with <span className="underlinedText">these terms.</span></p>
                    <div className="ssbutt">
                        <button className="btn btn-white button-right"> Cancel </button>
                        <button type="submit" className="btn btn-green button-right"> Submit </button>
                    </div>
                </div>
            </form>
        </div >
    )
};
const mapDispatchToProps = (dispatch) => {
    return {
        signin: (user) => dispatch(doSignIn(user)),
    };
};

export default connect(null, mapDispatchToProps)(SignIn)