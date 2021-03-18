/* Copyright Contributors to the Open Cluster Management project */

import React from 'react'
import { MemoryRouter } from 'react-router'
import { Page as PageStory, PageStoryDefaults } from '../AcmPage/AcmPage.stories'
import { AcmHeader, AcmRoute } from './AcmHeader'

export default {
    title: 'Demo',
    component: AcmHeader,
}

export const Demo = () => {
    return (
        <div style={{ height: '100vh' }}>
            <MemoryRouter>
                <AcmHeader route={AcmRoute.Welcome}>
                    <PageStory {...PageStoryDefaults} />
                </AcmHeader>
            </MemoryRouter>
        </div>
    )
}
