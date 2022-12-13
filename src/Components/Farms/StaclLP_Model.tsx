import React from 'react'
import { Button, Card, Text, Image, Modal, NumberInput, Space } from '@mantine/core';
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
            title='Stake LP Tokens'
        >
            <div className={classes.modelCointainer} >
                <div className={classes.modelFieldCointainer}>
                    <Text>Stack</Text>
                    <Text>Balance : 0.417</Text>
                </div>
                <div className={classes.modelFieldCointainer} >
                    <NumberInput
                        placeholder="0.987657809678"
                        size='lg'
                        hideControls
                    />
                    <Button>Max</Button>
                </div>

                <Text>Lorum Ipsum 1 & Lorum Ipsum 2 LP</Text>
                <Space h="xs" />

                <Text c='#2AF6FF' >Get LP</Text>
                <Space h="xs" />
                <div className={classes.modelBtnCointainer} >
                    <Button className={classes.conformBtn} >Confirm</Button>
                    <Button bg='gray.5' className={classes.conformBtn}  >Reject</Button>

                </div>
            </div>

        </Modal>
    )
}

export default Model