import React, {useState} from 'react'
import homePageImage from '../../utils/imgs/home-page.png'

export const ClinkCityProject = ({projectImageStyle}) => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div className='flex flex-col justify-center items-center'
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}>
            <h1 className='space-y-0'>
                Clink City
            </h1>
            <div className='w-96'>
                <img className={projectImageStyle} src={homePageImage} alt="img" />
                {showDescription && (
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel unde corporis, rerum nulla veritatis laborum. Explicabo, dolorum doloremque consectetur nulla veniam facilis perspiciatis illo quidem animi at dolore mollitia velit.</p>
                )}
            </div>
        </div>
    )
}

