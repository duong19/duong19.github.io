import React from 'react';
import { Link } from 'gatsby';
import style from './style.module.scss';
const LinkTo = ({ node, className, children, type }) => {
    if (node)
        return (
            <div className={className}>
                <Link to={node.fields['slug']}>
                {type === 'prev' ? '<<  ' : null}{node.frontmatter.title}{type === 'next' ? '  >>' : null}
                </Link>
            </div>
        );
    return null;
};
const Navigation = ({ older, newer }) => {
    return (
        <div className={style.navbar}>
            <LinkTo node={older} className={style.older} type='prev'>
                
            </LinkTo>
            <LinkTo node={newer} className={style.newer} type='next'>
                
            </LinkTo>
        </div>
    );
};
export default Navigation;