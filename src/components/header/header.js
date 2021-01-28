import React from 'react';
import { Link } from 'gatsby';
import * as PropTypes from 'prop-types';
import style from './header.module.scss'
import ThemeButton from './button'
const Header = ({ siteTitle, siteDescription }) => {
    return (
        <header className={style.header}>
            <div className={style.inner}>
                <Link to='/' className={style.Link}>
                    <div>            
                            <span className={style.mark}>{'>'} </span>
                            <span className={style.text}>{siteTitle} </span>
                    </div>
                </Link>
                <div className={style.right}>
                    <div>
                        <ul className={style.menu}>
                            <li><Link to='/about' >About me</Link></li>
                            <li><Link to='/series'>My series</Link></li>
                        </ul>
                    </div>
                    <ThemeButton/>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
    siteDescription: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: `A weirdo's corner`,
    siteDescription: ``,
};
export default Header;
