import { useEffect, useState } from 'react'
import { Subscription } from 'rxjs'

import {
    ModalProps,
    WritingModal,
    WritingModalProps,
} from './components/common/WritingModal'
import { eventBus, EventBusData } from './services/event-bus/eventBus.service'
import { OpenWritingModal } from './services/event-bus/events'

export const Portal = () => {
    const [writingModalProps, setWritingModalProps] = useState<
        ModalProps & WritingModalProps
    >(null!)

    useEffect(() => {
        const subscription: Subscription = eventBus
            .getObservable()
            .subscribe((event: EventBusData) => {
                switch (event.action) {
                    case OpenWritingModal.action: {
                        setWritingModalProps({
                            ...(event.payload as WritingModalProps),
                            open: true,
                            onClose: () => {
                                setWritingModalProps(null!)
                            },
                        })
                        break
                    }
                }
            })

        return () => {
            subscription.unsubscribe()
        }
    }, [])

    return <>{writingModalProps && <WritingModal {...writingModalProps} />}</>
}
