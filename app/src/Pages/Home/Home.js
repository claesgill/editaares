import React, { useRef, useState } from "react";
import { Button } from 'react-bootstrap';
// import history from '../../history';
// import "./Home.css";
import Loader from "../../Components/Loader/loader"
import axios from 'axios'
import "../../css/style.css" 

const apiUrl = "http://localhost:8080/post/url"


const Home = () => { 
  const urlRef = useRef()
  let buttonRef = useRef()
  const [loader, setLoader] = useState(false)
  
  const handleUrl = async () => {
    let url = urlRef.current.value
    // buttonRef.current.setAttribute("disabled", "disabled")
    setLoader(!loader)
    if(url === '') return
  
    // const data = await axios.get("http://localhost:8080")
    // console.log(data)
    
    // TODO: More checks for valid links/error handle!  
    // TOOD: Check that it is a valid repo before making post request!
    // TODO: Add prefix
    if(!url.startsWith("http")){
      url = `https://github.com/${url}.git`
    }
    // TODO: API call to backend here
    const respons = await axios.post(apiUrl, {"url": url})
    if(respons.status === 200){
      console.log(respons.data)
      // history.push('/editaare')
    }

    // TODO: Add loading screen after botton-click (should only response button-click onces)

  }

  return (
    <>
      <div className="center-div">
        <input className="input" ref={ urlRef } size="50" placeholder='i.e https://github.com/claesgill/editaares'/>
        <br></br>
        <Button className="button" ref={ buttonRef } variant="btn btn-success" onClick={ handleUrl }>Editåre</Button>
      </div>
      <Loader active={loader} />
    </>
  )
}

export default Home