import React from 'react'

const About = () => {
  return (
    <div id='about' className='flex justify-center items-center'>
      <div className='container pt-32'>
        <div className='flex lg:grid-cols-2 gap-20 justify-center items-center'>
            <div>
                <h1 className='text-6xl font-bold text-center text-blue-400 mb-10'>About Me</h1>
                <p className='text-2xl text-blue-200 text-center'>
                  I am a student at GIAIC, pursuing a course in 
                  <b className='text-blue-300'>Artificial Intelligence, Web 3.0 Metaverse</b>.
                  Passionate abiut technologies and constantly learning new skills to stay up-to-date with
                  the latest advancements in the field.
                </p>
            </div>
        </div>
      </div>
    </div>
     
  )
}

export default About