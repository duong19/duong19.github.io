import { Tag } from 'antd';
import React, { useContext } from 'react';
import getTagColor from './color';
import ThemeContext from '../../context/ThemeContext';

import * as PropTypes from 'prop-types';

const TagList = ({ keyword, closable, onTagClose }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            {keyword.map((word, index) => (
                <Tag
                    key={index}
                    color={getTagColor(word, theme)}
                    closable={closable}
                    onClose={onTagClose(word)}
                >
                    {word}
                </Tag>
            ))}
        </>
    );
};

TagList.propTypes = {
    keyword: PropTypes.arrayOf(PropTypes.string).isRequired,
    closable: PropTypes.bool,
    onTagClose: PropTypes.func,
};

TagList.defaultProps = {
    closable: false,
    onTagClose: () => {},
};

export default TagList;