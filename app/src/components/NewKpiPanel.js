import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import {
    Button,
    Field,
    GU,
    Info,
    SidePanel,
    TextInput,
    DropDown,
    DateRangePicker,
    useSidePanelFocusOnReady,
} from '@aragon/ui'
import { toTimestamp, getAddress } from '../utils'

const NewKpiPanel = React.memo(function NewKpiPanel({
    panelState,
    onCreateKpi,
}) {
    return (
        <SidePanel
            title="New KPI Option"
            opened={panelState.visible}
            onClose={panelState.requestClose}
        >
            <NewKpiPanelContent onCreateKpi={onCreateKpi} />
        </SidePanel>
    )
})

function NewKpiPanelContent({ onCreateKpi }) {
    const inputRef = useSidePanelFocusOnReady()

    const [name, setName] = useState('')
    const [symbol, setSymbol] = useState('')
    const [rewardAmount, setRewardAmount] = useState(1)
    const [rewardToken, setRewardToken] = useState(0)
    const [expiration, setExpiration] = useState('')
    const [payoutType, setPayoutType] = useState(0)

    const handleSubmit = useCallback(
        event => {
            event.preventDefault()
            const timestamp = toTimestamp(expiration);
            onCreateKpi({
                name: name.trim(),
                symbol: symbol.trim(),
                rewardAmount: rewardAmount,
                rewardToken: getAddress('ANT'),
                expiration: timestamp,
                payoutType: payoutType === 0 ? 'BinaryOption' : 'Linear'
            })
        },
        [onCreateKpi, name, symbol, rewardAmount, rewardToken, expiration, payoutType]
    )

    const handleNameChange = useCallback(event => {
        setName(event.target.value)
    }, [])

    const handleSymbolChange = useCallback(event => {
        setSymbol(event.target.value)
    }, [])

    const handleRewardAmountChange = useCallback(event => {
        setRewardAmount(parseInt(event.target.value))
    }, [])

    const handleRewardTokenChange = useCallback(event => {
        setRewardToken(event.target.value)
    }, [])

    const handleExpirationChange = useCallback(event => {
        setExpiration(event.target.value)
    }, [])

    const handlePayoutTypeChange = useCallback(event => {
        setPayoutType(event.target.value)
    }, [])

    return (
        <div>
            <form
                css={`
          margin-top: ${3 * GU}px;
        `}
                onSubmit={handleSubmit}
            >
                <Field label="Name">
                    <TextInput
                        ref={inputRef}
                        value={name}
                        onChange={handleNameChange}
                        required
                        wide
                    />
                </Field>
                <Field label="Symbol">
                    <TextInput
                        value={symbol}
                        onChange={handleSymbolChange}
                        required
                        wide
                    />
                </Field>
                <Field label="Reward Per KPI Option">
                    <TextInput.Number
                        value={rewardAmount}
                        onChange={handleRewardAmountChange}
                        required
                        wide
                    />
                </Field>
                <Field label="Reward Token">
                    <DropDown
                        items={['ANT']}
                        selected={rewardToken}
                        onChange={handleRewardTokenChange}
                        wide
                    />
                </Field>
                <Field label="Reward Payout Type">
                    <DropDown
                        items={['Binary', 'Linear']}
                        selected={payoutType}
                        onChange={handlePayoutTypeChange}
                        wide
                    />
                </Field>
                <Field label="Option Expiration Date">
                    <TextInput
                        type="date"
                        value={expiration}
                        onChange={handleExpirationChange}
                        wide
                    />
                </Field>
                <div
                    css={`
            margin-bottom: ${3 * GU}px;
          `}
                >
                </div>
                <Button disabled={!name || !symbol || rewardAmount <= 0 || !expiration} mode="strong" type="submit" wide>
                    Create new KPI Option
                </Button>
            </form>
        </div>
    )
}

NewKpiPanelContent.propTypes = {
    onCreateKpi: PropTypes.func,
}

NewKpiPanelContent.defaultProps = {
    onCreateKpi: () => { },
}

export default NewKpiPanel
