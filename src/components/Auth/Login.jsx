import AuthContainer from "./AuthContainer.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useForm} from "react-hook-form";


const Login = () => {
    const {
        register,
        formState:{errors, isValid},
        handleSubmit,
        reset,
        watch
    } = useForm({
        mode: "onChange"
    })

    const navigate = useNavigate()
    const user = {
        email: watch('email'),
        password: watch('password')
    }
    const signIn = () => {
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/')
    }


    return (

        <AuthContainer>
            <div className="login">
                <h1 className="login__title">Login</h1>
                <form className="login__form">
                    <div className="form__control">
                            <input
                                {...register('email', {
                                    required: 'It is necessary to fill in',
                                    pattern: {
                                        value:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                                        message: 'invalid email'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'min letters 5'
                                    },
                                })}
                                className="login__input"
                                type="email"
                                placeholder='E-mail'
                                name='email'
                            />
                            <div className="text__error">
                                {errors?.email && <p>{errors?.email?.message || "Error"}</p>}
                            </div>
                    </div>
                    <div className="form__control">
                        <input
                            {...register('password', {
                                required: 'It is necessary to fill in',
                                minLength: {
                                    value: 7,
                                    message: 'min letters 7'
                                },
                            })}
                            className="login__input"
                            type="password"
                            placeholder='Password'
                            name='password'
                        />
                        <div className="text__error" >
                            {errors?.password && <p>{errors?.password?.message || "Error"}</p>}
                        </div>
                    </div>
                    <button className="login__btn" onClick={signIn} type="submit" disabled={!isValid}>
                        Login
                    </button>
                </form>
                <p className="login__info">
                   <span> Have you account?</span>
                    <Link to='/register'>Sign up</Link>
                </p>
            </div>
        </AuthContainer>
    )
}
export default Login