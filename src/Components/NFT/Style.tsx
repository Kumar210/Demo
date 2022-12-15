import { createStyles } from '@mantine/core';
const useStyles = createStyles((theme) => ({
    land: {
        width: "98%",
        height: "70%",
    },
    button: {
        marginLeft: '2em',
        width: '10em',
        marginBottom: '10px'
    },
    textInput: {
        marginLeft: '5px',
        border: '1px solid #97FBFF',
        borderRadius: '5px'

    },
    navCointainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'self-end'
    }

}));

export { useStyles }