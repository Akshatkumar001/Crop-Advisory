import React, { useEffect, useState } from 'react'
import './Ui.css'
import { Link } from 'react-router-dom'
import leaf from './leaf.png'
import soil from './soil.png'
import pest from './pest.png'
import mrkt from './market.webp'
import cmty from './cmty.png'
import cloud from './cloud.webp'
import Wdr from './Wdr.jsx'

const Ui = () => {
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const storedName = localStorage.getItem("userName")
    if (storedName) {
      setUserName(storedName)
    } else {
      setUserName("Guest User")
    }
  }, [])

  return (
    <>
      <div id='uib'>
        <div id='uiCnt'>
          <div id='nme'>
            <div id='nme1'>
              <Link to={'/pro'}>
              <div id='pro'>
                
                <div id='prof'>

                </div>
                
              </div></Link>
              
              <Link to={"/"}>
                <div id='icon'>
                  <h3>Logout</h3>
                </div>
              </Link>
            </div>
            <div id='nme2'>
              <h3>{userName}</h3> 
            </div>
          </div>

          <div className="uiCnt">
            <Link to={"/crop-advice"}>
              <div className="cntBox" id='B1'>
                <div className='uimg' id='leafimg'>
                  <img src={leaf} alt="" className='imge'/>
                </div>
                <div className='uw' id='B11'><h4>Crop Advisory</h4></div>
                <div className='uw' id='B12'><h5>personalized tips</h5></div>
              </div>
            </Link>

            <div className="cntBox" id='B3'>
              <div className='uimg' id='wdr'>
                <img src={cloud} alt="" className='imge' id='wdrI'/>
              </div>
              <div className='uw' id='B32'>
                <Wdr/>
              </div>
            </div>
          </div>

          <div className="uiCnt">
            <Link to={'/soil&fertilizer'}>
              <div className="cntBox" id='B2'>
                <div className='uimg' id="soilimg">
                  <img src={soil} alt='' className='imge'></img>
                </div>
                <div className='uw' id='B21'><h4>Soil & Fertilizer</h4></div>
                <div className='uw' id='B22'><h5>guidance</h5></div>
              </div>
            </Link>

            <Link to={'/pest-detection'}>
              <div className="cntBox" id='B4'>
                <div className='uimg' id="pestimg">
                  <img src={pest} alt='' className='imge'></img>
                </div>
                <div className='uw' id='B41'><h4>Pest detection</h4></div>
                <div className='uw' id='B42'><h5>upload image</h5></div>
              </div>
            </Link>
          </div>

          <div className="uiCnt">
            <Link to={"/market-place"}>
              <div className="cntBox" id='B5'>
                <div className='uimg'>
                  <img src={mrkt} alt='' className='imge'></img>
                </div>
                <div className='uw' id='B51'><h4>Marketplace</h4></div>
                <div className='uw' id='B52'><h5>products</h5></div>
              </div>
            </Link>

            <Link to={"/community"}>
              <div className="cntBox" id='B6'>
                <div className='uimg'>
                  <img src={cmty} alt='' className='imge'></img>
                </div>
                <div className='uw' id='B61'><h4>Community</h4></div>
                <div className='uw' id='B62'><h5>ask / share</h5></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ui