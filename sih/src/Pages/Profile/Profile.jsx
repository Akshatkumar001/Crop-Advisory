import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <>
    <div id='pbdy'>
        <div id='pcnt'>
            <div id='pcnt1'>
                <div id='pcnt11'>

                    <div id='proI'>
                        <div id='proImg'>

                        </div>
                    </div>

                    <div id='igbtn'>
                        <button>change image</button>
                    </div>

                </div>
                <div id='pcnt12'>

                    <div>
                        <h3>Ramesh</h3>
                    </div>

                    <div>
                        <h4>your location</h4>
                    </div>
                </div>
            </div>

            <div id='pcnt2'>
                <div id='pcnt21'>
                    <div className="things">
                        <h2>Crop History</h2>
                    </div>
                    <div className="things">
                        <h2>Achievements</h2>
                    </div>
                </div>
                <div id='pcnt22'>
                    <div className="crops">
                        <div className="crp">
                            <h2>Rice</h2>
                            <h4>Kharif</h4>
                        </div>
                    </div>
                    <div className="crops">
                        <div className="crp">
                            <h2>Wheat</h2>
                            <h4>Rabi</h4>
                        </div>
                    </div>
                    <div className="crops">
                        <div className="crp">
                            <h2>Maize</h2>
                            <h4>kharif</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile