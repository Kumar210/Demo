import React from 'react'
import { useStyles } from './Style'
import { Button, Grid, GroupedTransition, Space, Text, OptionalPortal, Collapse, Badge, Avatar } from '@mantine/core'
import { IconCheck, IconChevronDown, IconChevronUp } from '@tabler/icons'
import Model from './StaclLP_Model'
import Transfermodal from './TransferModel'
import CountUp from 'react-countup';
type CardProps = {
    Peername: string;
    Earned: any
    APR: any
    Liquidity: any
    Multiplier: any

}
const Card: React.FC<CardProps> = (props) => {
    const { Peername, Earned, APR, Liquidity, Multiplier } = props;

    const { classes, theme } = useStyles()
    const [hoverCard, setHoverCard] = React.useState<boolean>(false)
    const [model, setModel] = React.useState<boolean>(false)
    const [transferModel, setTransferModel] = React.useState<boolean>(false)
    return (
        <>
            <Grid className={classes.CardCointainer} onClick={() => setHoverCard(!hoverCard)} >
                <Grid.Col md={4} lg={3} className={classes.Card_img_txt_Cointainer} >
                    <center>

                        <img
                            src='/logo 1.png'
                            className={classes.Icon}
                        />
                        {/* <Avatar.Group spacing="xs" >
                            <Avatar src="/logo 1.png" radius="xl" />
                            <Avatar src="/logo 1.png" radius="xl" />
                        </Avatar.Group> */}
                    </center>
                    <p>{Peername}</p>
                    <Button
                        size='xs'
                        color='gray.6'
                        className={classes.cardButton1}
                        rightIcon={<IconCheck />}

                    >Core</Button>

                </Grid.Col>

                <Grid.Col md={4} lg={6} className={classes.CardTextCointainer} >

                    <div  >
                        <p>Earned</p>
                        <p>{Earned}</p>
                    </div>
                    <div>
                        <p>APR</p>
                        <p>{APR}</p>

                    </div>
                    <div>
                        <p>Liquidity</p>
                        <p>$<CountUp delay={0} start={0.001} end={parseInt(Liquidity)} /></p>


                    </div>
                    <div>
                        <p>Multiplier</p>
                        <p>{Multiplier}</p>
                    </div>

                </Grid.Col>
                <Grid.Col md={4} lg={3} className={classes.iconCointainer} >
                    {
                        hoverCard ?
                            <IconChevronUp

                                style={{
                                    cursor: 'pointer'
                                }} />
                            :
                            <IconChevronDown
                                style={{
                                    cursor: 'pointer'
                                }}
                            />
                    }
                </Grid.Col>
            </Grid>

            <Model
                onClose={() => setModel(!model)}
                show={model}
            />
            <Transfermodal
                onClose={() => setTransferModel(!transferModel)}
                show={transferModel}
            />


            <Collapse in={hoverCard} transitionDuration={400} transitionTimingFunction="linear"  >
                <Grid className={classes.hoverCardCointainer} >
                    <Grid.Col md={4} lg={4}  >
                        <Text c='#2AF6FF' size='md' style={{
                            cursor: 'pointer'
                        }} >Get LP</Text>
                        <Space h="xs" />
                        <Text c='#2AF6FF' size='md' style={{
                            cursor: 'pointer'
                        }} >Contract Details</Text>
                        <Space h="xs" />
                        <Text c='#2AF6FF' size='md' style={{
                            cursor: 'pointer'
                        }} >Pair Info</Text>
                    </Grid.Col>
                    <Grid.Col md={4} lg={4}  >
                        <div className={classes.hoverCardSubCointainer}>
                            <Text size='lg' >Earned</Text>
                            <Text>0.000000</Text>
                            <Button variant='outline' color='gray.4' size='sm' radius='xl' className={classes.hoverCardBtn} onClick={() => setTransferModel(true)} >Transfer</Button>
                        </div>
                    </Grid.Col>
                    <Grid.Col md={4} lg={4}>
                        <div className={classes.hoverCardSubCointainer2}>
                            <Text size='lg' >Start Farming</Text>
                            <div  >
                                <Button size='sm' className={classes.hoverCardBtn2} onClick={() => setModel(true)}  >Connect Wallet</Button>
                            </div>
                        </div>
                    </Grid.Col>

                </Grid>
            </Collapse>

        </>
    )
}

export default Card