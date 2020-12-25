import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../header/header'
import style from './layout.module.scss'
import './theme.css'
const Layout = ({children}) => {
    return (
        
          <>
          <Header/>
          <div className={style.container}>{children}</div>
          </>
      )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout