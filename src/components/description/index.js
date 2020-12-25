import React from 'react'
import { Link } from 'gatsby';
import style from './style.module.scss'

const Description = () => {
    return (
        <>
        <div className={style.description}>
            <h4>
                    Personal blog of <Link to="/about">Duong Nguyen</Link>
                </h4>
                <h4>
                    <i style={{fontSize: 14}}>  "Keep Moving Forward" </i>
                </h4>
               
        </div>
        </>
    )
}

export default Description