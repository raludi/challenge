
const colors = {
    cobalt: '#213d8f',
    topaz: '#1db9de',
    lightBlue: '#909ec7',
    darkGray: '#4a4a4a',
    mediumGray: '#e8ebf3',
    lightGray: '#f6f7fb',
    green: '#8ec03f',
    white: '#ffff'
}

const fonts = {
    sans: 'Source Sans Pro, sans-serif'
}

const fontWeights = {
    thin: 200,
    light: 300,
    normal: 400,
    semibold: 550,
    bold: 700,
    black: 900,
};

const fontSizes = {
    s: '14px',
    m: '16px',
    l: '18px'
}

const theme = {
    colors: {
        ...colors
    },
    fonts: {
        ...fonts
    },
    sizes: {
        ...fontSizes
    },
    weights: {
        ...fontWeights
    }
}

export default theme;