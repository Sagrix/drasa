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
                Doctor Name.
                </Message>

                <Button2>Set Up Appointment</Button2>
                <Button1>Back</Button1>
            </Wrapper>
        )
    }
}

export default Results

const Wrapper = styled.div`
    background: white;
    margin: 0;
    padding: 0;
    height: 100vh;
`

const Message = styled.div`
 position: absolute;
 left: 20px
 top: 180px
 right: 20px;
`

const Button1 = styled.button `
font-size: 13px;
font-family: Open Sans;
position: absolute;
bottom:  4px;
cursor: pointer;
left: 4px;
`
const Button2 = styled.button `
font-size: 13px;
font-family: Open Sans;
position: absolute;
bottom:  4px;
cursor: pointer;
right: 4px;
`

const Page = styled.h1`
color: #008080;
text-align: center;
`