import './AuthContainer.scss'

const AuthContainer = ({children}) => {
    return (
        <section className="auth">
           <div className="auth__preview">
               <img src="https://static.vecteezy.com/system/resources/previews/013/939/288/original/online-account-registration-and-login-concept-woman-who-registers-or-logs-in-to-an-online-account-with-a-user-interface-secure-login-and-password-flat-illustration-vector.jpg" alt="Auth"/>
           </div>
            <div className="auth__content">
                {children}
            </div>
        </section>

    )
}
export default AuthContainer