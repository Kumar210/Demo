import React from 'react'
import { Text, Button, Select, TextInput, SegmentedControl, Badge } from '@mantine/core';
import { useStyles } from './Style'
import { IconArrowNarrowRight, IconSearch, IconChevronDown } from '@tabler/icons'
import Card from './Card'

const Farms = () => {
    const { classes, theme } = useStyles()
    const [Data, setData] = React.useState([
        {
            Peername: "YOC/BNB",
            Earned: '25',
            APR: '25.2%',
            Liquidity: "458767",
            Multiplier: '10x'
        },
        {
            Peername: "BTC/USDC",
            Earned: '25',
            APR: '25.2%',
            Liquidity: "857489",
            Multiplier: '10x'
        },
        {
            Peername: "Lorum Ipsum 1 /Lorum Ipsum ",
            Earned: '30',
            APR: '0.5%',
            Liquidity: "368789",
            Multiplier: '420x'
        }
    ])



    return (
        <div className={classes.Parent_Cointainer} >
            <div className={classes.Cointainer} >
                <>
                    <div className={classes.Sub_Cointainer} >
                        <h2>YOC Liquidity Mining</h2>
                        <p className={classes.text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor felis nulla sit. Pretium fusce nisi, rutrum semper quam a amet a.
                            Elit a venenatis mattis massa sodales nec tellus. Nisl velit vel est, a mattis facilisi. </p>
                        <div className={classes.BtnCointainer} >
                            <Button variant='outline'
                                color='cyan.4'
                                rightIcon={<IconArrowNarrowRight />}
                            ><Text>Read More...</Text></Button>
                        </div>
                    </div>

                    <div className={classes.textCointainer} >
                        <h3>Participating Pools</h3>
                        <h3>The Rewards Never Ends</h3>
                    </div>
                    <div className={classes.fieldCointainer} >
                        <SegmentedControl
                            radius='md'
                            bg='transparent'
                            style={{
                                border: '1px solid #97FBFF',
                                width: '25%',
                                padding: '6px',
                            }}
                            color='gray.7'
                            data={[
                                { label: 'Live', value: 'Live' },
                                { label: 'Finished', value: 'Finished' },
                            ]}
                            onChange={(e) => console.log(e)}
                        />
                        <Select
                            variant='unstyled'
                            placeholder="Sortby"
                            data={['APR', 'HOT', 'Multiplier', 'Earned', 'Liquidity']}
                            rightSection={<IconChevronDown size={14} />}
                            className={classes.select}
                            onChange={(e) => console.log(e)}

                        >
                        </Select>
                        <TextInput
                            variant='unstyled'
                            placeholder='Search Forms'
                            rightSection={<IconSearch size={14} />}
                            className={classes.textInput}
                        />
                    </div>
                    {
                        Data ? Data.map((item, i) => {
                            return (
                                <Card
                                    key={i}
                                    Peername={item.Peername}
                                    Earned={item.Earned}
                                    APR={item.APR}
                                    Liquidity={item.Liquidity}
                                    Multiplier={item.Multiplier}
                                />
                            )
                        }) : null
                    }


                </>

            </div>


        </div>
    )
}

export default Farms

