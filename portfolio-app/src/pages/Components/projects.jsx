import React from 'react'
import { ClinkCityProject } from './clinkCityProject'
import { PlatefulsProject } from './platefulsProject'
import { FFXAPIProject } from './ffApiProject'
import { TriviaProject } from './triviaGame'
import './styles.css'
import  { ProficiencyBar } from "./proficiencyBar";
import { MeredithPortfolio } from './meredithPortfolio'

export const Projects = () => {
    const projectImageStyle = 'border-2 rounded-xl object-contain h-60 object-fill'
    return (
        <div className="App 
        flex 
        flex-col 
        justify-center 
        items-center
        h-screen
        w-screen">

        <div className='flex 
        flex-col 
        items-center 
        sm:px-8 
        md:px-12 
        lg:px-20 
        h-full'>

            <h1 className='text-3xl 
            sm:text-4xl 
            md:text-5xl 
            font-bold 
            text-gray-700
            mb-6'>Projects</h1>

            <div className='project-container 
            flex flex-col 
            sm:flex-row 
            border-2 
            border-slate-400
            p-2 
            pb-6
            rounded-md 
            overflow-visible 
            shadow-inner 
            shadow-slate-500
            space-x-1 
            sm:overflow-x-auto 
            overflow-y-auto 
            max-h-screen 
            max-w-screen-lg'>
                <MeredithPortfolio projectImageStyle={projectImageStyle}/>
                <ClinkCityProject projectImageStyle={projectImageStyle}/>
                <PlatefulsProject projectImageStyle={projectImageStyle}/>
                <FFXAPIProject projectImageStyle={projectImageStyle}/>
                <TriviaProject projectImageStyle={projectImageStyle}/>
            </div>
            <div className='text-3xl 
            sm:text-4xl 
            md:text-5xl 
            font-bold 
            text-gray-700
            my-6'>Skills</div>
            <div className='grid grid-cols-4 gap-12 pt-5'>
                <ProficiencyBar skill="JavaScript" confidence={90} />
                <ProficiencyBar skill="HTML" confidence={100} />
                <ProficiencyBar skill="ReactJS" confidence={90} />
                <ProficiencyBar skill="CSS" confidence={70} />
                <ProficiencyBar skill="OOP" confidence={50} />
                <ProficiencyBar skill="Python" confidence={50} />
                <ProficiencyBar skill="MongoDB" confidence={70} />
                <ProficiencyBar skill="PostgreSQL" confidence={60} />
            </div>
        </div>
        </div>
    )
}
