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
        this.expandLines = setTimeout(() => this.setState({expandLines: true}), 10)
        this.notify = setTimeout(() => this.pushNotification(), 4000)
    }

    componentWillUnmount(){
        clearTimeout(this.expandLines)
        clearTimeout(this.notify)
    }

    pushNotification(){
        if (Notification.permission === "granted") {
            this.generateNotification()
          }
        
          // Otherwise, we need to ask the user for permission
          else if (Notification.permission !== "denied") {
            Notification.requestPermission( (permission) => {
              if(permission)
                this.generateNotification()
            })
          }
    }

    generateNotification(){
        var notification = new Notification("The results of your requested test are ready.")
        notification.onclick = () => {
            this.props.history.push('/results')
            notification.close()
        }
    }

    render(){
        const {
            expandLines
        } = this.state

        return(
            <Wrapper>
                <Header>
                    Gonnorhoea Test<br/>Requested on 11/03/2018
                </Header>
                <Step active>Kit Requested</Step>
                <Line active expandLines={expandLines}/>
                <Step>Kit Arrived</Step>
                <Line expandLines={expandLines}/>
                <Step>Sample Received</Step>
                <Line expandLines={expandLines}/>
                <Step>Test in Progress</Step>
                <Line expandLines={expandLines}/>
                <Step>Results Out</Step>
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
    height: calc(100vh - 50px);
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