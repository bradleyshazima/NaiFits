import React from 'react'
import { FiSearch } from "react-icons/fi";
import styles from '../styles';

const NavIcons = () => {

    return (
        <span className="text-white">
            <FiSearch className={`${styles.icon}`}/>
        </span>
    );
};

export default NavIcons;