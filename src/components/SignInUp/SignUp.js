import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewUser } from "../../store/actions/act_user";

const SignUp = ({ addUser }) => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: ''
    })
    let history = useHistory();

    const submitHandle = event => {
        event.preventDefault()
        addUser(formData);
        history.push("/signin");
    };


    const changeFieldHandle = event => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
    }
    return (
        <div className="container-singin">
            <form onSubmit={submitHandle}>
                <div className="form-signUp">
                    <div className="label-signInUp text-right">
                        <label >Name:</label>
                    </div>
                    <div className="label-signInUp">
                        <input type="text" className="textarea-input" placeholder='Helen Johnson' name='fullName' onChange={changeFieldHandle} />
                    </div>
                    <div className="label-signInUp text-right">
                        <br></br>
                    </div>
                    <div className="label-signInUp text-right">
                        <label >Email:</label>
                    </div>
                    <div className="label-signInUp">
                        <input type="text" className="textarea-input" name='email' placeholder='helenjohnson@gmail.com' onChange={changeFieldHandle} />
                    </div>
                    <div className="label-signInUp">
                        <br></br>
                    </div>
                    <div className="label-signInUp text-right">
                        <label >Password:</label>{' '}
                    </div>
                    <div className="label-signInUp">
                        <input type="password" className="textarea-input" name='password' placeholder='**********' onChange={changeFieldHandle} />
                    </div>
                    <div className="label-signInUp">
                        <p className="text-footnote">Password must have at least 8 characters with at least one Capital letter, at least one lower case letter and at least one number or special character.</p>
                    </div>
                    <div className="label-signInUp text-right">
                        <label >Password:</label>{' '}
                    </div>
                    <div className="label-signInUp">
                        <input type="password" className="textarea-input" name='password' placeholder='**********' onChange={changeFieldHandle} />
                    </div>

                    <div className="label-signInUp">
                        <p className="text-footnote text-center">Please re-enter your password</p>
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
        addUser: (user) => dispatch(addNewUser(user)),
    };
};

export default connect(null, mapDispatchToProps)(SignUp)