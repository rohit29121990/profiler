import React from "react"
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import {styles} from "../styles";
import {experiences} from "../constants";
import {SectionWrapper} from "../hoc";
import {textVariant} from "../utils/motion";
import { div } from "framer-motion/client";

const ExperienceCard=({exprience})=>(
  <VerticalTimelineElement
  contentStyle={{background:"#1d1836", color:"#fff"}}
  contentArrowStyle={{borderRight:"7x solid #232631"}}
  date={exprience.date}
  
    iconStyle={{background:exprience.iconBg}}
    icon={
      <div className="flex justify-center 
      items-center w-full h-full">
        <img 
        src={exprience.icon}
        alt={exprience.company_name}
        className="w-[60%] h-[60%]
        object-contain "/>
         </div>}
         >
    
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {exprience.title}
      </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>
        {exprience.company_name}
        </p>
    </div>
   
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        What I have done so far
      </p>
      <h2 className={styles.sectionHeadText}>Work Exprience.</h2>

    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((exprience,index)=>(
         <ExperienceCard key={index} exprience={exprience}/>
        )
        )}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")