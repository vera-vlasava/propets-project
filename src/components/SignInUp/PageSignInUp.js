import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const PageSingInUp = () => {

    const [signPage, setSignPage] = useState(0)

    return (<div className="container-pageSingInUp">
        <div> <strong>Welcome !</strong> Please sign in/sign up to continue or</div>
        <div class="tabs">
            <nav class="tabs_items">
                <a href="#tab_signUp" class="tabs_item" onClick={() => setSignPage(0)}>Sign up</a>
                <a href="#tab_signIn" class="tabs_item" onClick={() => setSignPage(1)}> Sign in</a>
            </nav>
            {signPage ? < SignIn /> : < SignUp />}
            {/* < div class="tabs_body"> <div class="tabs_block">
               
            </div>

            </div> */}
        </div>
    </div >);
};
export default PageSingInUp;