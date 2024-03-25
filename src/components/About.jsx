import {Tilt}  from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon}) => {
  return (
    <p>
      <Tilt className="xs:w-[250px] w-full">
          <motion.div variants={fadeIn('right', 'spring', 0.5*index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450
              }}
              className='
                bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center
                flex-col
              '
            >
              <img src={icon} alt={title} 
                className='w-16 h-16 object-contain'
              />
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>
          </motion.div>
      </Tilt>
    </p>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={
          styles.sectionSubText
        }>Introduction</p>
        <h2 
          className={
            styles.sectionHeadText
          }
        >Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn('down', 'spring', 0.5, 1.5)} className="
        mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]
      "> 
        I'm a Full Stack Developer, Computer Vision Researcher and Tech Enthusiast. I'm passionate about building applications that are user-friendly and scalable. I have experience in developing web applications using React, Node.js, Express.js, and MongoDB. I have also worked on various projects related to computer vision and machine learning. I'm always eager to learn new technologies and improve my skills.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 '>
          {
            services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))
          }
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")