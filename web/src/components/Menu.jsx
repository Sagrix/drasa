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

    handleChatClick(){
        this.props.history.push('/chat/0')
    }

    render(){
        return (
            <Wrapper>
                    <Row
                    onClick={() => this.handleChatClick()}>
                        <VerticalMiddle>Live Chat</VerticalMiddle>
                    </Row>
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
    background-image: url("https://i.pinimg.com/originals/c4/d5/66/c4d566ef5b0b556b03b8917e83351d20.jpg");
    background-size: contain;
    margin: 0;
    padding: 0;
    height: calc(100vh - 50px);
`

const Row = styled.div`
    font-size: 32px;
    font-family: Oswald;
    width: 100%;
    height: calc(25vh - 12.5px);
    text-align: center;
    background: rgba(33, 58, 90, 0.9);
    border-bottom: rgba(255,255,255, 0.5);
    border-bottom: 1px solid rgba(255,255,255,0.3);
    color: #f4f7f6;
    display: table;
`

const VerticalMiddle = styled.div`
    display: table-cell;
    vertical-align: middle;
`



