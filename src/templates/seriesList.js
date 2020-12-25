import React from "react";
import Layout from "../components/layout/layout";
import style from "./seriesList.module.scss"
import { Link } from "gatsby";
import _ from "lodash";
import SEO from "../components/seo";

const SeriesEntry = ({ series, name }) => {
    return (
        <>

            <div className={style["blogPostPreview"]}>
                <h2>
                    <Link to={"/series/" + series.slug}>{name}</Link>
                </h2>
                <p>{series.description}</p>
                <b>{series.posts.length} Posts</b>
                <br />
                <br />
            </div>
            <hr />
        </>
    );
};

export default function SeriesListTemplate({ pageContext }) {
    const { seriesList } = pageContext;
    return (
        <Layout>
            <SEO title="My series"/>
            <div className={style.list}>
            <h1>My series</h1>
            <hr />
            {_.map(seriesList, (series, name) => (
                <SeriesEntry name={name} series={series} key={name} />
            ))}
            </div>
        </Layout>
    );
}