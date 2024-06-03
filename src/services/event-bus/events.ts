import { WritingModalProps } from '../../components/common/WritingModal'
import { eventBus } from './eventBus.service'

export class OpenWritingModal {
    static action = 'OpenWritingModal'
    static emit = (payload: WritingModalProps) =>
        emit(OpenWritingModal.action, payload)
}

const emit = (action: string, payload?: any) => {
    eventBus.emit({
        action,
        payload,
    })
}
