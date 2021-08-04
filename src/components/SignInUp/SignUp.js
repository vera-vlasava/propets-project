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
                <div className="form-signInUp">
                    <div className="label-signInUp">
                        <label >Name:</label>
                    </div>
                    <div className="label-signInUp">
                        <input type="text" placeholder='Helen Johnson' name='fullName' onChange={changeFieldHandle} />
                    </div>
                    <div className="label-signInUp">
                        <label >Email:</label>
                    </div>
                    <div className="label-signInUp">
                        <input type="text" className="textarea-input" name='email' placeholder='helenjohnson@gmail.com' onChange={changeFieldHandle} />
                    </div>
                    <div className="label-signInUp">
                        <label >Password:</label>{' '}
                    </div>
                    <div>
                        <input type="password" className="textarea-input" name='password' placeholder='**********' onChange={changeFieldHandle} />
                    </div>
                    <div className="label-sing">
                        <label >Password:</label>{' '}
                    </div>
                    <div>
                        <input type="password" className="textarea-input" name='password' placeholder='**********' onChange={changeFieldHandle} />
                    </div>
                </div>
                <hr />
                <div>
                    <p className="text-footnote">By clicking "Submit", you are agree to us processing your information in accordance with <span className="underlinedText">these terms.</span></p>
                    <div>
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