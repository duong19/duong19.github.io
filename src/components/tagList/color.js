const darkColor = {
    red: '#f5222d',
    volcano: '#fa541c',
    green: '#52c41a',
    cyan: '#13c2c2',
    blue: '#1890ff'
};

const lightColor = {
    red: 'red',
    volcano: 'volcano',
    green: 'green',
    cyan: 'cyan',
    blue: 'blue'
};

function getTagColor(tagName, theme) {
    const color = theme === 'light' ? lightColor : darkColor;
    const colorNameList = Object.keys(color);
    return color[
        colorNameList[Math.floor(Math.random() * colorNameList.length)]
    ];
}

export default getTagColor;