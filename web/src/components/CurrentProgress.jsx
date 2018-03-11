import React from 'react'
import styled from 'styled-components'

class CurrentProgress extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            expandLines: false
        }
    }

    componentDidMount(){
        setTimeout(() => this.setState({expandLines: true}, 100))
    }

    render(){
        const {
            expandLines
        } = this.state

        return(
            <Wrapper>
                <Header>
                    Gonorrhea Test<br/>Requested on 11/03/2018
                </Header>
                <Step active>Kit Requested</Step>
                <Line active expandLines={expandLines}/>
                <Step>Kit Arrived</Step>
                <Line expandLines={expandLines}/>
                <Step>Sample Received</Step>
                <Line expandLines={expandLines}/>
                <Step>Test in Progress</Step>
                <Line expandLines={expandLines}/>
                <Step>Sample Received</Step>
            </Wrapper>
        )
    }
}

export default CurrentProgress

const Wrapper = styled.div`
    background-color: #f4f7f6;
    font-family: 'Open Sans';
    margin: 0;
    padding: 5vh 5%;
    padding-bottom: 0;
    height: 100vh;
`

const Header = styled.div`
    font-family: Oswald;
    font-size: 20px;
    margin-bottom: 5vh;
`

const Line = styled.div`
    width: 50%;
    border-right: 5px solid ${({active}) => active ? '#49c5b6' : '#ccc'};
    height: ${({expandLines}) => expandLines ? '50px' : '0px'}
    transition: height 1s;
`
const Step = styled.div`
    text-align: center;
    padding-top: 4px;
    padding-bottom: 4px;
    color: ${({active}) => active ? '#49c5b6' : '#ccc'};
    font-family: Oswald;
    font-size: 18px;
`