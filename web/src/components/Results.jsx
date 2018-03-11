import React from 'react'
import styled from 'styled-components'

class Results extends React.Component{


    render(){
        return(
            <Wrapper>
                <Page>Results</Page>  
                
                <Message>

                  
                    
                Hello there,<br /><br />
               Your sample has been tested and the results are ready. Please contact me to receive them. 
                 <br /><br />
                Thanks for your patience.<br /><br />
                Regards, <br />
                Doctor Tom Isin.
                </Message>

                <Button2 onClick={() => this.props.history.push('/chat/0')}>Live Chat</Button2>
                <Button2 style={{
                    bottom: '15vh'
                }}>Set Up Appointment</Button2>
            </Wrapper>
        )
    }
}

export default Results

const Wrapper = styled.div`
    background: white;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans';
    height: calc(100vh - 50px);
`

const Message = styled.div`
 position: absolute;
 left: 20px
 top: 180px
 right: 20px;
`

const Button = styled.button`
    background: transparent;
    border: 2px solid #49c5b6;
    color: #49c5b6;
    border-radius: 3px;
`

const Button2 = styled(Button) `
font-size: 13px;
font-family: Open Sans;
position: absolute;
cursor: pointer;
bottom: 20vh;
left: 50%;
transform: translateX(-50%);
`

const Page = styled.h1`
color: #008080;
text-align: center;
`