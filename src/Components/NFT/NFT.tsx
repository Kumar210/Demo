import { Button, Grid, TextInput, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { useStyles } from './Style'

const NFT = () => {
    const { classes, theme } = useStyles();

    return (
        <div className={classes.land}>
            <Grid grow gutter="xs">
                <Grid.Col span={6}>
                    {" "}
                    <p
                        style={{
                            color: "white",
                            fontSize: "3em",
                            marginTop: "3em",
                            fontWeight: "bold",
                            padding: '20px'
                        }}
                    >
                        Buy, Sell and Trade
                        Your NFTs
                    </p>
                </Grid.Col>
                <Grid.Col span={6}>
                    <img
                        src="/projectBG3.svg"
                        width="100%"
                        height="120%"
                        alt="ImageName"
                        style={{
                            marginBottom: "15em",
                            marginTop: "-4em",
                        }}
                    />
                </Grid.Col>
            </Grid>

            <Grid grow gutter="xs" >
                <div style={{
                    padding: '50px'
                }} >
                    <Button size='xl'
                        variant="gradient"
                        gradient={{
                            from: ' rgba(0, 220, 159, 0.3)',
                            to: 'rgba(188, 44, 216, 0.06)'
                        }}
                        className={classes.button}
                    >Explore</Button>
                    <Button size='xl'
                        variant="gradient"
                        gradient={{
                            from: 'rgba(83, 75, 177, 0.4)',
                            to: 'rgba(228, 204, 81, 0.4)'
                        }}
                        className={classes.button}

                    >Create</Button>
                </div>
            </Grid>
            <Grid>
                <Grid.Col md={6} lg={5}>
                    <TextInput
                        variant='unstyled'
                        placeholder='Search Forms'
                        rightSection={<IconSearch size={14} />}
                        className={classes.textInput}
                    /></Grid.Col>
                {/* <Grid.Col span={2}></Grid.Col> */}
                <Grid.Col md={6} lg={5}>
                    <div className={classes.navCointainer} >
                        <Text>Collection</Text>
                        <Text>Stats</Text>
                        <Text>Resources</Text>
                        <Text>Create</Text>
                    </div>
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default NFT