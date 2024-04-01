import {useEffect, useState} from "react";
import { MdOutlineArrowCircleUp } from "react-icons/md"
import './BackToTopButton.scss'
const BackToTopButton= () => {
    const [btnToTop, setBtnToTop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBtnToTop(true)
            } else {
                setBtnToTop(false)
            }
        })
    }, [])
        const scrollUp = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        }

        return btnToTop && <MdOutlineArrowCircleUp size={40} className="btn-on-top" onClick={scrollUp}/>

    }

export default BackToTopButton