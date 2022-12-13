import { useState } from "react";
import {
    Card,
    Grid,
    Button,
    Text,
    Space,
    NumberInput,
} from "@mantine/core";
import { IconSwitchVertical } from "@tabler/icons";
import { useStyles } from './Style'
import Model from './Model'



const Liquidity = () => {

    const [swapwalletConncet, setSwapwalletConncet] = useState(false);
    const [model, setModel] = useState<boolean>(false)

    const { classes, theme } = useStyles();


    return (
        <div className="ParentCointainer">
            <Grid>
                <Grid.Col span={4}></Grid.Col>
                <Grid.Col span={4}>

                    <Card
                        shadow="sm"
                        p="lg"
                        radius="md"
                        className="SwapPageCointainer"
                    >

                        <div className={classes.SwapCointainer}>
                            <Text size='lg' >Liquidty</Text>
                            <Space h="sm" />
                            <img
                                src='/logo 1.png'
                                width="25px"
                                height="25px"
                                alt="ImageName"
                                className={classes.IconImage}
                            />
                            <Text size='sm'>Lorum Ipsum deposit stir</Text>
                            <Space h="md" />

                        </div>
                        <div>
                            <div
                                className={classes.SwapSubCointainer1}
                            >
                                <div className={classes.InputCointainer}>
                                    <div>
                                        <Text  >Input</Text>
                                        <NumberInput
                                            hideControls
                                            variant='unstyled'
                                            className={classes.input}
                                            placeholder="BNB"
                                            size="xs"
                                        />
                                    </div>
                                </div>
                                <Text>Balance: 0</Text>
                            </div>
                        </div>
                        <center>
                            <Button
                                variant="subtle"
                                style={{ borderRadius: "15px" }}
                            >
                                <IconSwitchVertical size={30} />
                            </Button>

                        </center>
                        <div
                            className={classes.SwapSubCointainer1}
                            style={{
                                background: theme.fn.linearGradient(
                                    95.46,
                                    "rgba(30, 30, 30, 0.4)",
                                    "rgba(228, 204, 81, 0.4)"
                                ),
                                opacity: "0.9",
                                zIndex: 0,
                                backdropFilter: "blur(20px)",
                            }}
                        >
                            <div className={classes.InputCointainer}>
                                <div>
                                    <Text>Input</Text>
                                    <NumberInput
                                        hideControls
                                        variant='unstyled'
                                        className={classes.input}
                                        size="xs"
                                        placeholder="BELT"
                                    />
                                </div>


                            </div>
                            <Text>Balance: 0</Text>
                        </div>
                        <div className={classes.InputCointainer}>
                            <Text size='sm'>LP Tokens</Text>
                            <Text size='sm' c='#42E8E0'>0.00</Text>

                        </div>

                        {swapwalletConncet ? (
                            <Button
                                className={classes.Btn}

                            >
                                Swap
                            </Button>
                        ) : (
                            <Button
                                className={classes.Btn}
                                onClick={() => setModel(!model)}
                            >
                                Connect Wallet
                            </Button>
                        )}

                    </Card>
                </Grid.Col>
            </Grid>

            <Model
                onClose={() => setModel(!model)}
                show={model}
            />


        </div>
    );
};

export default Liquidity;
