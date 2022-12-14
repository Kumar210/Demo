import { createStyles } from '@mantine/core';
const useStyles = createStyles((theme) => ({
    SwapCointainer: {
        padding: "2px",
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-around',
        flexDirection: "column",
        fontSize: "15px"
    },
    SwapSubCointainer1: {
        border: "1px solid #97FBFF",
        borderRadius: "10px",
        padding: "10px",
        width: "100%",
        marginBottom: "10px",
        background: theme.fn.linearGradient(
            90.46,
            "rgba(30, 30, 30, 0.4)",
            "rgba(173, 173, 173, 0.4)"
        ),
        opacity: "1",
        backdropFilter: "blur(50px)",
    },
    InputCointainer: {
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
    },

    Btn: {
        width: "100%",
        backgroundColor: "#43E3E091",
        marginTop: "2em",
        "&:hover": {
            backgroundColor: "#43E3E091",
        },
    },
    IconImage: {
        marginTop: "-2em",
        alignSelf: 'self-end'
    },
    input: {
        border: '1px solid #97FBFF',
        color: '#97FBFF',
        fontSize: '15px',
        background: 'transparent',
        borderRadius: '5px',
        // width: '10em',
        padding: '10px',
        '::placeholder': {
            color: '#97FBFF',
            fontSize: '1em'
        }
    },
    conformBtn: {
        width: '15em',
        '&:hover': {
            background: '#43E3E0'
        }
    },
    transferModelCointainer: {
        padding: '10px',
        lineHeight: '5px'

    },
    transferModelHeading: {
        padding: '10px'
    },
    transferModelFld_Cointainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',

    },
    transferModelFields: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    modelBtnCointainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    ModelheadingCointainer: {
        display: 'flex',
        alignItems: 'center',

    },
    select: {
        display: 'flex',
        marginLeft: '5px',
        border: '1px solid #97FBFF',
        borderRadius: '5px',
        color: '#3c524f',
        background: 'transparent',
        // width: '10em',
        fontWeight: 'bold'
    },


}));

export { useStyles }