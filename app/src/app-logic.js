import React, { useCallback } from 'react'
import { AragonApi, useApi, useAppState } from '@aragon/api-react'
import appStateReducer from './app-state-reducer'
import usePanelState from './hooks/usePanelState'
import { noop } from './utils'

export function useIncrementAction(onDone = noop) {
    const api = useApi()
    return useCallback(
        (step = 1) => {
            api.increment(2).toPromise()
            onDone()
        },
        [api, onDone]
    )
}

export function useDecrementAction(onDone = noop) {
    const api = useApi()
    return useCallback(
        (step = 1) => {
            api.decrement(2).toPromise()
            onDone()
        },
        [api, onDone]
    )
}

export function useCreateKpiAction(onDone = noop) {
    const api = useApi()
    return useCallback(
        ({ name, symbol, rewardAmount, rewardToken, expiration, payoutType }) => {
            api.createKpiOption(name, symbol, rewardAmount, expiration, rewardToken, payoutType).toPromise().then(
                result => {
                    api.call('name').toPromise().then(
                        r => console.log(r)
                    );
                    onDone();
                }
            )
        },
        [api, onDone]
    )
}

export function useAppLogic() {
    const { kpis, count, isSyncing, ready } = useAppState()

    const newKpiPanel = usePanelState();

    const actions = {
        increment: useIncrementAction(),
        decrement: useDecrementAction(),
        createKpi: useCreateKpiAction()
    }

    return {
        actions,
        isSyncing: isSyncing || !ready,
        count,
        kpis,
        newKpiPanel
    }
}

export function AppLogicProvider({ children }) {
    return <AragonApi reducer={appStateReducer}>{children}</AragonApi>
}