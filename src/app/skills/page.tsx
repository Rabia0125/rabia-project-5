import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='text-4xl text-blue-400 md:text-5xl font-bold'>SKILLS</h2>
                <p className='text-blue-200 text-xl pt-2'>
                    I have a solid foundation in web development, specializing in HTML, CSS & JAVASRIPT. 
                    My experience etxend to using frameworks like React.js & Next.js create dynamic and 
                    user-friendly application. I'm also profficient in Tailwind CSS for efficient styling 
                    & design with a passion for learning. I stay updated on the latest technologies to 
                    enhance my skills & contibute effectively to projects.
                </p>
            </div>
            <div>
                <div className='grid md:grid-cols-2 text-accent-foreground text-5xl sem:text-4xl'>
                    <div className='text-blue-300 space-y-4'>
                        <h2>Node.js</h2>
                        <h2>TypeScript</h2>
                        <h2>React</h2>
                    </div>
                    <div className='text-blue-300 space-y-4'>
                        <h2>Next.js</h2>
                        <h2>Tailwind</h2>
                        <h2>CSS</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
