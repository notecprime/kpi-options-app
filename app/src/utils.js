export function noop() { }

export function toTimestamp(value) {
    if (!value) return 0;
    const [y, m, d] = value.split('-');
    return Date.UTC(y, m - 1, d);
}

export function getAddress(contract) {
    if (contract == 'ANT') {
        return '0x55Bfae77D9980702e5b60D984983AE3B776Ab91C';
    }
}