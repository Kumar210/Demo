import { useState } from 'react';
import { MantineProvider, } from '@mantine/core';

const AppWrapper = ({ children }: any) => {



    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: 'dark',
                breakpoints: {
                    xs: 500,
                    sm: 800,
                    md: 1000,
                    lg: 1200,
                    xl: 1400,
                },
            }}
        >
            {children}
        </MantineProvider>

    )
}
export default AppWrapper
