import {Button} from 'antd';
import Icon from '@ant-design/icons';
import Moon from '../../../assets/svg/moon.svg';
import Sun from '../../../assets/svg/sun.svg';
import React, { useContext } from 'react';
import ThemeContext from '../../../context/ThemeContext'
import style from './button.module.scss';
const lightButtonStyle = {
    backgroundColor: 'black',
    border: 'black',
};
const darkButtonStyle = {
    backgroundColor: 'white',
    border: 'white',
};



const ThemeButton = () => {
    const { theme, switchTheme } = useContext(ThemeContext);

    return (
        <Button
            className={style.button}
            style={theme === 'light' ? lightButtonStyle : darkButtonStyle}
            // style={lightButtonStyle}
            shape="circle"
            aria-label="Theme Button"
            onClick={switchTheme}

        >
            <Icon
                className={`${style.icon} ${style.moon}`}
                style={theme === 'dark' ? { opacity: 0 } : { opacity: 1 }}
                // style={{opacity: 1, cursor: 'pointer'}}
                component={Moon}
            />
            <Icon
                className={`${style.icon} ${style.sun}`}
                style={theme === 'light' ? { opacity: 0 } : { opacity: 1 }}
                // style={{opacity: 1, cursor: 'pointer'}}
                component={Sun}
            />
        </Button>
        
    );
};

export default ThemeButton;