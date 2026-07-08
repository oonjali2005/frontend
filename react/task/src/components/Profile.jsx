import React from 'react'
import profile from '../assets/ponnunjali.jpeg'

const Profile = () => {
    return (
        <>
            
                <div className='bg-amber-200 text-black w-100 h-80 text-center p-3 justify-center'>
                    <div>
                        <img src={profile} className='w-150 h-50' />
                    </div>
                    <h2>Ponnunjali Veeramani</h2>
                    <h5>Front-end developer</h5>
                </div>
        
        </>
    )
}

export default Profile