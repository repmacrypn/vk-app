import { NavLink } from 'react-router-dom'

import styles from './styles.module.scss'

import { INavButton } from './interface'

export const NavButton = ({ text, callBack, className }: INavButton) => {
    return (
        <NavLink
            onClick={callBack}
            className={`${styles.navButton} ${styles[className]}`}
            to='/main'
        >
            {text}
        </NavLink>
    )
}