import React from 'react'
import { Button, EmptyStateCard, GU, LoadingRing } from '@aragon/ui'
import noKpisPng from '../assets/no-kpis.png'

const NoKpis = React.memo(function NoKpis({ onNewKpi, isSyncing }) {
    return (
        <EmptyStateCard
            text={
                isSyncing ? (
                    <div
                        css={`
              display: grid;
              align-items: center;
              justify-content: center;
              grid-template-columns: auto auto;
              grid-gap: ${1 * GU}px;
            `}
                    >
                        <LoadingRing />
                        <span>Syncing…</span>
                    </div>
                ) : (
                    'No KPI Options here!'
                )
            }
            action={
                <Button wide mode="strong" onClick={onNewKpi}>
                    Create a new KPI Option
                </Button>
            }
            illustration={
                <img
                    css={`
            margin: auto;
            height: 170px;
          `}
                    src={noKpisPng}
                    alt="No KPI Option here"
                />
            }
        />
    )
})

export default NoKpis