import React, {useState, useEffect} from "react";
import axios from 'axios';
import './userName.css'

const ApiUsername = () => {
   const [posts, setPost] = useState({})
   console.log(posts);
   const [id, setId] = useState()
   const [idButtonClick, setidButtonClick] = useState()

    const handleClick = () => {
        setidButtonClick(id) 
    }

    useEffect(() =>{
        axios
            .get(`https://api.github.com/users/${id}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    },[idButtonClick])
   
    return (
        <div>

            <label htmlFor="user">Github Usernameni kiriting: </label>
            <input type="text" value={id} onChange={e => setId(e.target.value)} id="user"/> &nbsp;&nbsp;
            <button type="button" onClick={handleClick}>Fetch post</button>
            
            <div className="card">
                <div className="photo">
                    <img src={posts.avatar_url} alt="" width={200} height={200}/>
                </div>
                <div className="">
                    <p key={posts.id}className="show"><span>Name:</span>{posts.name}</p>
                    <p className="show"><span>Username:</span>{posts.login}</p>
                    <p className="show"><span>Followers_url: </span>{posts.followers_url}</p>
                    <p className="show"><span>Location:</span>{posts.location}</p>
                    <p className="show"><span>Url: </span>{posts.url}</p>
                    <p className="show"><span>Html url: </span>{posts.html_url}</p>
                    <p className="show"><span>Bio: </span>{posts.bio}</p>
                    <p className="show"><span>Email: </span>{posts.email}</p>
                    <p className="show"><span>Public_repos: </span>{posts.public_repos}</p>
                    <p className="show"><span>Organizations_url: </span>{posts.organizations_url}</p>
                    <p className="show"><span>Gists_url: </span>{posts.gists_url}</p>
                </div>
            </div>

        </div>
    )
}

export default ApiUsername;

// Codevolution 55 56 57$