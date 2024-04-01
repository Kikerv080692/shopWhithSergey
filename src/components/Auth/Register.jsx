import AuthContainer from "./AuthContainer.jsx";
import {Link} from "react-router-dom";

const Register = () => {

    return (
        <AuthContainer>
            <div className="register">
                <h1 className="register__title">Register</h1>
                <form className="register__form">
                    <div className="form__control">
                        <input className="register__input" type="email" placeholder='E-mail'/>
                    </div>
                    <div className="form__control">
                        <input className="register__input" type="password" placeholder='Password'/>
                    </div>
                </form>
                <p className="register__info">
                    <span>You have account?</span>
                    <Link to='/login'>Sign in</Link>
                </p>
            </div>
        </AuthContainer>
    )
}
export default Register