import React from 'react'
import styled from 'styled-components'

class Menu extends React.Component{
    handleCurrentClick(){
        this.props.history.push('/view/current')
    }

    handlePastClick(){
        this.props.history.push('/view/past')
    }

    handleRequestClick(){
        this.props.history.push('/request')
    }

    render(){
        return (
            <Wrapper>
                    <Row
                    onClick={() => this.handleCurrentClick()}>
                        <VerticalMiddle>View Current Tests</VerticalMiddle>
                    </Row>
                    <Row
                    onClick={() => this.handlePastClick()}>
                        <VerticalMiddle>View Past Tests</VerticalMiddle>
                    </Row>
                    <Row
                    onClick={() => this.handleRequestClick()}>
                        <VerticalMiddle>Request New Test</VerticalMiddle>
                    </Row>
            </Wrapper>
        )
    
    }

}

export default Menu


const Wrapper = styled.div`
    background: #f4f7f6;
    margin: 0;
    padding: 0;
    height: 100vh;
`

const Row = styled.div`
    font-size: 32px;
    font-family: Oswald;
    width: 100%;
    height: 33.33vh;
    text-align: center;
    background: #f4f7f6;
    border: 0px;
    color: #202121;
    border-bottom: 1px solid #ddd;
    display: table;
`

const VerticalMiddle = styled.div`
    display: table-cell;
    vertical-align: middle;
`



