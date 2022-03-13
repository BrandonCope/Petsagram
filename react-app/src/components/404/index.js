import React,{useEffect} from "react";
import './ErrorPage.css'

const ErrorPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <div className='error-page-container'>
            <h1>404 Page Not Found</h1>
        </div>
    )
}

export default ErrorPage