function hasLoadedKpiSettings() {
    return true;
}

function appStateReducer(state) {
    const ready = hasLoadedKpiSettings(state)

    if (!ready) {
        return { ...state, ready }
    }

    if (state === null) {
        return { count: 0, isSyncing: true }
    }
    return state
}

export default appStateReducer;