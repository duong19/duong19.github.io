import React from "react"
import {Avatar} from 'antd'
import Layout from '../components/layout/layout'
import style from './about.module.scss'
import avatar from '../assets/images/avatar.jpg'
import SEO from '../components/seo'

export default function About() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={["programming", "music", "blogging", "machine-learning", "math", "movies"]}
      />
      <div className={style.about}>
        <Avatar size={256} src={avatar} className={style.avatar + ' ' + style.block}/>
        <div className={style.bio + " " + style.block}>
                    <h2>Nguyễn Lý Thái Dương</h2>
                    <ul>
                        <li>
                            <h4>🗓: 30/11/1999</h4>
                        </li>
                        <li>
                            <h4>✉️: duonghust1919@gmail.com</h4>
                        </li>
                        <li>
                            <h4>👨‍🎓: Hanoi University of Science and Technology</h4>
                        </li>
                        <li>
                            <h4>🏠: Hanoi, Vietnam</h4>
                        </li>
                    </ul>
                </div>
          <hr/>
          <div>
            <h1>About this blog</h1>
            <p>A place to keep track of my knowledge and practice my English writing skill.</p>
          </div>
      </div>
    </Layout>
  )
}
