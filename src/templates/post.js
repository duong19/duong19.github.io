import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout/layout'
import style from './post.module.scss'
import SEO from '../components/seo'
import Navigation from '../components/navigation'
export const query = graphql`
    query($path: String!) {
        markdownRemark(fields: {slug: { eq: $path } }) {
            frontmatter {
                title
                date
                keyword
                description
            }
            html
            fields {
                slug
            }
            tableOfContents(maxDepth: 3)
        }
    }
`
const SeriesLink = ({ context }) => {
    const { series } = context;
    if (series)
        return (
            <span>
                <i>In series: </i>
                <Link to={`/series/${series.slug}`}>{series.name}</Link>
            </span>
        );
    return null;
};
const Post = (props) => {
    const time = new Date(props.data.markdownRemark.frontmatter.date);
    return (
        <Layout>
         <SEO
        title={props.data.markdownRemark.frontmatter.title}
      />
        <div className={style.content}>
            <div className={style.title}>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <i>{time.toDateString()}</i>
            </div>
            <br />
        
    <SeriesLink context={props.pageContext} />
             <br />
                <br />
                <hr />
                <div className={style.toc}>
                <h2>Table of contents</h2>
                    <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.tableOfContents}}></div>
                </div>
                <hr />
             <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
             
        </div>
        <br />
                <br />
        <hr style={{width: '110%'}}/>
        <Navigation  newer={props.pageContext.next} older={props.pageContext.previous}/>
        </Layout>
    )
}

export default Post