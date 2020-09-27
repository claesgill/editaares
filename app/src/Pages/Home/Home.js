import React, { useRef } from "react";
import { Button } from 'react-bootstrap';
import history from '../../history';
// import "./Home.css";
import axios from 'axios'

const apiUrl = "http://localhost:8080/post/url"


const Home = () => { 
  const urlRef = useRef()
  
  const handleUrl = async () => {
    const url = urlRef.current.value
    if(url === '') return
  
    // const data = await axios.get("http://localhost:8080")
    // console.log(data)
    
    // TODO: More checks for valid links/error handle!  
    // TOOD: Check that it is a valid repo before making post request!
    // TODO: Add prefix
    let newUrl = `https://github.com/${url}.git`
    // TODO: API call to backend here
    const respons = await axios.post(apiUrl, {"url": newUrl})
    if(respons.status === 200){
      console.log(respons.data)
      // history.push('/editaare')
    }
  }

  return (
    <>
      <div className="Home">
        <input ref={ urlRef } placeholder='I.e claesgill/git_prettier'/>
        <Button variant="btn btn-success" onClick={ handleUrl }>Editåre</Button>
      </div>
    </>
  )
}

export default Home