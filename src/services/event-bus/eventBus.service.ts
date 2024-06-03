import { Subject } from 'rxjs'

export interface EventBusData {
    action: string
    payload?: any
}

const subject = new Subject<EventBusData>()

export const eventBus = {
    emit: (event: EventBusData) => {
        subject.next(event)
    },

    getObservable: () => {
        return subject.asObservable()
    },
}
