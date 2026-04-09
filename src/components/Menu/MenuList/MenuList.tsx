import React from "react";
import styles from './MenuList.module.css';

const MenuList = ({children}: React.HTMLAttributes<HTMLUListElement>) => {
    return (
        <ul className={styles.navegacao}>{children}</ul>
    );
}

export default MenuList;