"use client";
import React from 'react';
import Handlayout from './Handlayout';
import { motion } from "framer-motion";

const Motions = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        
        >

            <Handlayout></Handlayout>
            
        </motion.div>
    );
};

export default Motions;