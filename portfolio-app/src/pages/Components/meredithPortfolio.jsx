import React, {useState} from 'react'
import homePageImage from '../../utils/imgs/Meredith-portfolio.png'

export const MeredithPortfolio = ({projectImageStyle}) => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='space-y-0 text-lg font-bold text-gray-700'>
                Dr. Meredith Clements Portfolio
            </h1>
            <div className='w-96'>
                <img className={projectImageStyle} src={homePageImage} alt="img" 
                        onMouseEnter={() => setShowDescription(true)}
                        onMouseLeave={() => setShowDescription(false)} />
                {showDescription && (
                    <div>
                        <p className="indent-5">
                        A professional portfolio for Dr. Meredith Clements at University of Tampa. Developed to advertise her expertise and area of research.
                        </p>
                        <p className="indent-5 mt-1">
                        Utilized ReactJS for front-end development, Cloudinary for image storage and management, and Netlify for deployment.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

