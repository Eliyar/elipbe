import classNames from 'classnames'
import styled from 'styled-components'

interface Props {
    className?: string
}

const Styles = styled.div``

export const App = ({ className }: Props) => {
    return <Styles className={classNames(className)}>App</Styles>
}
