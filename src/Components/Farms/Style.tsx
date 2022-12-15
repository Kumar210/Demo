import { createStyles } from '@mantine/core';
const useStyles = createStyles((theme) => ({
    Parent_Cointainer: {
        width: '100%',
        padding: '5px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    Cointainer: {
        width: '80%',
        background: theme.fn.linearGradient(180, 'rgba(0, 220, 159, 0.3)', 'rgba(188, 44, 216, 0.06)'),
        borderRadius: '5px',
        padding: '20px',
    },
    Sub_Cointainer: {
        background: theme.fn.linearGradient(90.46, 'rgba(30, 30, 30, 0.4)', 'rgba(173, 173, 173, 0.4)'),
        padding: '10px',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
    },
    BtnCointainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    text: {
        fontSize: '17px',
    },
    textCointainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10px',
    },
    button: {
        borderRadius: '20px',
        background: 'transparent',
        color: '#97FBFF'
    },
    fieldCointainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'

    },
    textInput: {
        marginLeft: '5px',
        border: '1px solid #97FBFF',
        borderRadius: '5px',
        width: '25%',
        padding: '3px',


    },
    select: {
        marginLeft: '5px',
        border: '1px solid #97FBFF',
        borderRadius: '5px',
        width: '25%',
        padding: '3px',
        '&:placeholder': {
            color: 'red'
        },
    },
    // Card
    CardCointainer: {
        background: theme.fn.linearGradient(90.46, 'rgba(0, 220, 159, 0.1)', 'rgba(173, 173, 173, 0.1)'),
        display: 'flex',
        padding: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    Icon: {
        alignSelf: 'flex-start',
        height: '25px',
        width: '25px',
        // marginRight: '10px'
        marginTop: '15px'
    },
    CardTextCointainer: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    Card_img_txt_Cointainer: {
        display: 'flex',
        width: '20%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    cardButton1: {
        borderRadius: '50px',
        border: '2px solid #87DFE3',
        marginLeft: '5px',
        '&:hover': {
            background: '#A4A2A8',
        },
    },
    iconCointainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    // hoverCard
    hoverCardCointainer: {
        padding: '10px',


    },
    hoverCardSubCointainer: {
        background: theme.fn.linearGradient(90.46, 'rgba(118, 118, 118, 0.1)', 'rgba(173, 173, 173, 0.1)'),
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
    },
    hoverCardSubCointainer2: {
        background: theme.fn.linearGradient(90.46, 'rgba(118, 118, 118, 0.1)', 'rgba(173, 173, 173, 0.1)'),
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
    },
    hoverCardBtn: {
        width: '10em',
        marginLeft: '10em',

    },
    hoverCardBtn2: {
        width: '10em',
        marginLeft: '10em',
        background: '#7212EF',
        marginTop: '25px',
        '&:hover': {
            background: '#7212EF',
        },
    },
    modelFieldCointainer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px'

    },
    modelCointainer: {
        padding: '10px',
    },
    modelBtnCointainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    conformBtn: {
        width: '15em'
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
    cardBadge_btn: {
        '&:hover': {
            backgroundColor: theme.colors.gray[7]
        }
    }


}));

export { useStyles }