import classNames from 'classnames'
import Popup from 'reactjs-popup'
import styled from 'styled-components'

import { AlphabetItem } from '../../constants'

export interface ModalProps {
    open: boolean
    onClose(): void
}

export interface WritingModalProps {
    className?: string
    alphabetItem: AlphabetItem
}

const Styles = styled.div``

export const WritingModal = ({
    className,
    alphabetItem,
    open,
    onClose,
}: WritingModalProps & ModalProps) => {
    return (
        <Popup
            className={classNames(className)}
            open={open}
            closeOnDocumentClick
            modal
            onClose={onClose}
        >
            <Styles>
                <div className="modal">
                    <a className="close" onClick={onClose}>
                        &times;
                    </a>
                    <div>{alphabetItem.alphabet}</div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae magni omnis delectus nemo, maxime molestiae dolorem
                    numquam mollitia, voluptate ea, accusamus excepturi deleniti
                    ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
                </div>
            </Styles>
        </Popup>
    )
}
