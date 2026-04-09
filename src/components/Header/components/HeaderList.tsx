import type React from "react";
import styles from '../Header.module.css';

const HeaderList = ({children, ...rest}:
    React.HTMLAttributes<HTMLUListElement>) => {
    return (
        <ul className={styles.cabecalho} {...rest}>{children}</ul>
    );
}

export default HeaderList;