import React from 'react'
import Layout from '../Components/Layout'
import { Link } from 'react-router-dom'
import Main from '../Images/main.png.png';
import '../Styles/HomeStyle.css';
const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Main})`}}>
   <div className='headerContainer'>
      <h1>Food Website</h1>
      <p>Best Food In India</p>
      <Link to="/menu">
          <button>
            ORDER NOW!
          </button>
      </Link>
   </div>
      </div>
    </Layout>
  )
}

export default Home
