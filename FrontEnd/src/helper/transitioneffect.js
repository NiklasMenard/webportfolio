import React from 'react';
import {motion} from 'framer-motion'

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: 0, duration: 1}
    },
    exit: {
        transition: {ease: 'easeInOut'}
    }
}

const TransitionEffect = (props) => {
    return(
    <motion.div
        variants = {containerVariants}
        initial = "hidden"
        animate = "visible"
        exit = "hidden">
        {props.children}
    </motion.div>
    )
}

export default TransitionEffect
