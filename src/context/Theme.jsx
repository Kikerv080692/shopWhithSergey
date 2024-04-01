import {createContext, useState, useEffect} from "react";


export const  ContextTheme = createContext()
const Theme = ({children}) => {
    const [theme, setTheme] = useState(() => JSON.parse(localStorage.getItem('theme')))
   


    useEffect(() => {
        const body = document.querySelector('body')

    
        if(theme === 'light') {
            body.classList.add('dark')
            body.classList.remove('light')
        } else{
            body.classList.add('light')
            body.classList.remove('dark')
        }

    },[])


    const switchTheme = () => {
       const newTheme = theme === 'light' ? 'dark' : 'light'
       setTheme(newTheme)
       localStorage.setItem('theme', JSON.stringify(newTheme))

    }

    return(
        <ContextTheme.Provider value={{theme, switchTheme}}>
            {children}
        </ContextTheme.Provider>
    )
}

export default Theme