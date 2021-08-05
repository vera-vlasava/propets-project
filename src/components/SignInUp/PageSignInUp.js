import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const PageSingInUp = () => {

    const [signPage, setSignPage] = useState(0)

    return (<div className="container-pageSingInUp">
        <div className="supsig">
            <img src="/assets/images/main-logo-color.svg" />
            <div className="welcome"> <strong>Welcome !</strong> Please sign in/sign up to continue or</div>
            <div className="tabs">
                <nav className="tabs_items">
                    <a href="#tab_signUp" className="tabs_item1 signInUp" onClick={() => setSignPage(0)}>Sign up</a>
                    <a href="#tab_signIn" className="tabs_item2 signInUp" onClick={() => setSignPage(1)}> Sign in</a>
                </nav>
                {signPage ? < SignIn /> : < SignUp />}
                {/* < div class="tabs_body"> <div class="tabs_block">
               
            </div>

            </div> */}
            </div>
        </div>
    </div >);
};
export default PageSingInUp;