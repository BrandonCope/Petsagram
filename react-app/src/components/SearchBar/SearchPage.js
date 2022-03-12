import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import "./SearchBar.css"



const SearchPage = () => {

    const users = useSelector((state) => state.users)
    const location = useLocation()

    const usersArr = Object.values(users)

    console.log(usersArr)

    const searchArr = usersArr.filter(({ username }) => {
        return username.toLowerCase().includes(location.state.detail.toLowerCase())
    })

    console.log(searchArr)
    useEffect(() => {
        window.scrollTo(0, 0)
    })


    return (
        <div className='search-page-container'>
            {searchArr?.map(({ username, id }) => (
                <Link className='searchLink' to={`profiles/${id}`} key={id}>
                    <p>
                        {username}
                    </p>
                </Link>
            ))}
        </div>
    )
}

export default SearchPage
