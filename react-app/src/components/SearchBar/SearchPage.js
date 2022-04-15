import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import "./SearchBar.css"



const SearchPage = () => {
    const user = useSelector((state) => state.session.user)
    const users = useSelector((state) => state.users)
    const location = useLocation()

    const usersArr = Object.values(users)

    const searchArr = usersArr.filter(({ username, id }) => {
        return username.toLowerCase().includes(location.state.detail.toLowerCase()) && id !== user?.id
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    })


    return (
        <div className='search-page-container'>
            <p>Search Results: </p>
            {searchArr.length ? searchArr?.map(({ username, id }) => (
                <Link className='searchLink' to={`profiles/${id}`} key={id}>
                    <p>
                        <i id="search-icon" className="fa-solid fa-user search-icon"></i>
                        {username}
                    </p>
                </Link>
            )) : <><p>No results found!</p></>}
        </div>
    )
}

export default SearchPage
