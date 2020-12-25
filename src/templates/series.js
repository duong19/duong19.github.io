import React from "react";
import Layout from "../components/layout/layout"
import style from "./series.module.scss";
import { Link } from "gatsby";
import _ from "lodash";
import SEO from "../components/seo";


const PageEntry = ({ post }) => {
    const { title, keyword, date, description } = post.frontmatter;
    return (
        <>
            <div className={style["blogPostPreview"]}>
                <h2>
                    <Link to={post.fields["slug"]}>{title}</Link>
                </h2>
                <i>
                    {new Date(date).toDateString()}
                    {" • "}
                    {post["fields"]["readingTime"]["text"]}
                </i>
                <br />
                <br />
                {/* <TagList keyword={keyword} /> */}
                <br />
                <br />
                <h4>{description}</h4>
                <br />
                <br />
                <p ><Link to={post.fields["slug"]} className={style.more}>Read more →</Link></p>

            </div>
            <hr />
        </>
    );
};

export default function Template({ pageContext }) {
    return (
        <>
            <Layout>
                <SEO title={pageContext.name}/>
                <div className={style.series}>
                <h1>{pageContext.name}</h1>
                <hr />
                {pageContext.postList.map((post, id) => (
                    <PageEntry post={post} key={id} />
                ))}
                </div>
            </Layout>
        </>
    );
}