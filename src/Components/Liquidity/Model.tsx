import React from 'react'
import { Button, Card, Text, Image, Modal, NumberInput, Space, Divider } from '@mantine/core';
import { useStyles } from './Style'
type ModelProps = {
    onClose: any
    show: boolean

}
const Model: React.FC<ModelProps> = (props) => {
    const { classes, theme } = useStyles()
    const { onClose, show } = props
    console.log(onClose, show);

    return (

        <Modal
            transition="fade"
            transitionDuration={300}
            transitionTimingFunction="ease"
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size="lg"
            opened={show}
            onClose={onClose}
            overflow="outside"
            style={{
                borderRadius: '20px'
            }}
            title='BNB/BELT Tokens'
        >
            <div className={classes.transferModelCointainer} >
                <div className={classes.transferModelHeading} >
                    <div className={classes.ModelheadingCointainer} >
                        <h2 >232.09 </h2>
                        <Text style={{ marginLeft: '20px' }} size='sm'  >(Estimated LP Tokens you will receive)</Text>
                        <Space h="sm" />
                    </div>

                    <Divider size='md' c='#fff' />
                </div>
                <div className={classes.transferModelFld_Cointainer} >
                    <div className={classes.transferModelFields} >
                        <Text>BNB Deposited </Text>
                        <Text>200.1</Text>
                    </div>
                    <Space h="sm" />
                    <div className={classes.transferModelFields} >
                        <Text>BELT Deposited</Text>
                        <Text>32.55</Text>
                    </div>
                    <Space h="md" />
                    <div className={classes.transferModelFields} >
                        <Text>Rate</Text>
                        <div>
                            <Text>1 BNB  =0.00234 BELT</Text>
                            <Space h="sm" />
                            <Text>1 BELT  =0.09 BNB</Text>

                        </div>
                    </div>
                </div>
                <Space h="lg" />

                <div className={classes.modelBtnCointainer}>
                    <Button bg='#43E3E0' className={classes.conformBtn} >Confirm Deposite</Button>
                </div>
            </div>


        </Modal>
    )
}

export default Model