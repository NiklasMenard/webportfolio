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
        transition: {delay: 0, duration: 1}
    }
}

const TransitionEffect = (props) => {

    return(
    <motion.div
        variants = {containerVariants}
        initial = "hidden"
        animate = "visible"
        exit = "exit">
        {props.children}
    </motion.div>
    )
}

export default TransitionEffect
