export const stateSetter = (context) => {
    let cancelled = false;
    return {
        cancel: () => {
            cancelled = true
        },
        setState: (newState, callback = () => { }) => {
            console.log(cancelled)
            if (!cancelled) {
                context.setState(newState, callback);
            }
        }
    }
}

export const types = ['atm', 'bank', 'pharmacy', 'hospital', 'airport', 'local_government_office', 'train_station', 'bus_station'] 