import React from 'react'
import { useGuiStyle } from '@aragon/api-react'
import { AppLogicProvider, useAppLogic } from './app-logic'
import NoKpis from './screens/NoKpis'
import {
    Box,
    Button,
    GU,
    Header,
    IconMinus,
    IconPlus,
    Main,
    SyncIndicator,
    Text,
    textStyle,
} from '@aragon/ui'
import NewKpiPanel from './components/NewKpiPanel'

const App = React.memo(function App() {
    const { appearance } = useGuiStyle();
    const {
        actions,
        isSyncing,
        count,
        newKpiPanel,
        kpis
    } = useAppLogic();
    const step = 2

    return (
        <Main theme={appearance} assetsUrl="./aragon-ui">
            <React.Fragment>
                {!kpis && (
                    <div
                        css={`
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        `}
                    >
                        <NoKpis onNewKpi={newKpiPanel.requestOpen} isSyncing={isSyncing} />
                    </div>
                )}
                {kpis && (
                    <React.Fragment>
                        <SyncIndicator visible={isSyncing} />
                        <Header
                            primary="KPI Options"
                            secondary={
                                <Text
                                    css={`
                    ${textStyle('title2')}
                    `}
                                >
                                    {count}
                                </Text>
                            }
                        />
                        <Box
                            css={`
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                height: ${50 * GU}px;
                ${textStyle('title3')};
                `}
                        >
                            Count: {count}
                        </Box>
                        <Box>
                            <div>
                                <Button
                                    display="icon"
                                    icon={<IconMinus />}
                                    label="Decrement"
                                    onClick={() => actions.decrement(step)}
                                />
                                <Button
                                    display="icon"
                                    icon={<IconPlus />}
                                    label="Increment"
                                    onClick={() => actions.increment(step)}
                                    css={`
                    margin-left: ${2 * GU}px;
                    `}
                                />
                            </div>
                        </Box>
                    </React.Fragment>
                )}
                <NewKpiPanel
                    onCreateKpi={actions.createKpi}
                    panelState={newKpiPanel}
                />
            </React.Fragment>
        </Main>
    )
})

export default () => (
    <AppLogicProvider>
        <App />
    </AppLogicProvider>
)