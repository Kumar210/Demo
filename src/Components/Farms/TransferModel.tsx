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
        >
            <div className={classes.transferModelCointainer} >
                <div className={classes.transferModelHeading} >
                    <Text size='xl' >Allow <span style={{ color: '#2AF6FF' }} >yoc.com</span>  to spend your Lorum Ipsum &
                        Lorum Ipsum 2 LP?</Text>
                    <Space h="xs" />
                    <Text size='sm'>Do you trust this site? By granting this permission, you’re
                        allowing to withdraw your Lorum Ipsum & Lorum Ipsum 2 LP
                        and automate transaction for you.</Text>
                    <Divider my='sm' />
                </div>
                <div className={classes.transferModelFld_Cointainer} >
                    <div className={classes.transferModelFields} >
                        <Text>Transaction Fee</Text>
                        <Text>0.17 USD</Text>
                    </div>
                    <div className={classes.transferModelFields} >
                        <Text>A fee is associated with this request.</Text>
                        <Text>0.0023</Text>
                    </div>
                </div>
                <Space h="lg" />

                <div className={classes.modelBtnCointainer}>
                    <Button bg='#43E3E0' className={classes.conformBtn} >Confirm</Button>
                    <Button className={classes.conformBtn} >Reject</Button>
                </div>
            </div>


        </Modal>
    )
}

export default Model