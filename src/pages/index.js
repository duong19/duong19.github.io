import React, {useState} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Description from "../components/description"
import style from './index.module.scss'
import SEO from '../components/seo'
import {Pagination} from 'antd'
const PAGE_SIZE = 3;

const PageEntry = ({post}) => {
  const { title, keyword, date, description } = post.frontmatter;
  return (
    <>
      <div className={style["blogPostPreview"]}  key={post.id}>
        
        <h2>
          <Link to={post.fields["slug"]}>{title}</Link>
        </h2>
        <i>
          {new Date(date).toDateString()}
          {" • "} 
          {post.fields.readingTime.text}
        </i>
        
        <br />
        <br />
        {/* <TagList keyword={keyword} /> */}
        <br />
        <h4>{description}</h4>
        <br />
        <br />
        <p ><Link to={post.fields["slug"]} className={style.more}>Read more →</Link></p>
      </div>
      <hr />
    </>
  )
  
}

const IndexPage = ({data}) => {
  let { edges: posts } = data["allMarkdownRemark"];
  posts = posts.filter(post => post.node.frontmatter.title.length > 0);
  const [page, setPage] = useState(1);
  return (
      <Layout>
        <SEO
        title="Home"
        keywords={["programming", "music", "blogging", "machine-learning", "math", "movies"]}
      />
          <Description/>

          {/* <h1>Latest Posts</h1>
          
          <hr/>
          <br/>
          <br/> */}
          <div>
            {posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map(({node: post}, idx) => (<PageEntry key={idx} post={post}/>))}
          </div>
          <Pagination
        className={style.pagination}
        total={posts.length}
        pageSize={PAGE_SIZE}
        onChange={page => setPage(page)}
      />
      </Layout>
    )
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date
            description
            keyword
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;

export default IndexPage