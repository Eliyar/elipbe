import classNames from 'classnames'
import styled from 'styled-components'

interface Props {
    className?: string
    icon: string
}

const Styles = styled.span``

export const Icon = ({ className, icon }: Props) => {
    return (
        <Styles className={classNames(className, 'material-symbols-outlined')}>
            {icon}
        </Styles>
    )
}
