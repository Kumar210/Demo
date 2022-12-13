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
        // marginLeft: "17em",
        marginTop: "-2em",
        alignSelf: 'self-end'
    },
    input: {
        border: '1px solid #97FBFF',
        width: '250px',

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

    }


}));

export { useStyles }