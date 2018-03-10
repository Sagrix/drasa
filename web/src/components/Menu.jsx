import React from 'react'
import styled from 'styled-components'

class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          providedUid: ''
        }
    }


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
        const{
            providedUid
        } = this.state
    
        const {
            history
        } = this.props

        return (
            <Wrapper>
                <Form>
                    <Current type = 'View Current Tests'
                    onClick={() => this.handleCurrentClick()}></Current>
                    <Past type = 'View Past Tests'
                    onClick={() => this.handlePastClick()}></Past>
                    <Request type = 'Request New Test'
                    onClick={() => this.handleRequestClick()}></Request>
                </Form>
            </Wrapper>
        )
    
    }

}

export default Menu


const Wrapper = styled.div`
    background: linear-gradient(#3f5d83, #323e4f);
    margin: 0;
    padding: 0;
    height: 100vh;
`

const Form = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 5vh 5%;
    border-radius: 3px;
    padding-top: 50vh;
    height: 50vh;
`

const Current = styled.input`
    font-size: 16px;
    font-family: Oswald;
    width: 60%;
    text-align: center;
    background: #49c5b6;
    border: 0px;
    color: #fff;
    margin: 0 auto;
    margin-top: 12px;
    display: block;
    padding: 6px;
`

const Past = styled.input`
    font-size: 16px;
    font-family: 0swald;
    width: 60%;
    text-align: center;
    background: #49c5b6;
    border: 0px;
    color: #fff;
    margin: 0 auto;
    margin-top: 12px;
    display: block;
    padding: 6px;
`

const Request = styled.input`
    font-size: 16px;
    font-family: 0swald;
    width: 60%;
    text-align: center;
    background: #49c5b6;
    border: 0px;
    color: #fff;
    margin: 0 auto;
    margin-top: 12px;
    display: block;
    padding: 6px;
`



