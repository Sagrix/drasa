import React from 'react'
import styled from 'styled-components'

class Results extends React.Component{


    render(){
        return(
            <Wrapper>
                <Page>Results</Page>  
                <Button1>Back</Button1>
                <Message>

                  
                    
                Hello there,<br /><br />
                I am glad to inform you that your results are ready. 
                Please set an appointment with me to receive your results. 
                <br /><br />
                Thank you for your patience.<br /><br />
                Regards, <br />
                Doctor Name.
</Message>

                <Button2>Set Up Appointment</Button2>
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

const Label = styled.label`
    font-size: 14px;
    font-family: Oswald;
    display: block;
    margin-bottom: 4px;
    color: #f4f7f6;
`

const Input = styled.input`
    margin-bottom: 10px;
    border-radius: 3px;
    border: 0px;
    padding: 6px;
    font-size: 12px;
    font-family: 'Open Sans';
    width: 100%;
    background-color: transparent;
    border-bottom: 1px solid #ccc;
    color: #fff;
    outline: 0;
`

const Submit = styled.input`
    font-size: 16px;
    font-family: Oswald;
    width: 50%;
    text-align: center;
    background: #49c5b6;
    border: 0px;
    color: #fff;
    margin: 0 auto;
    margin-top: 12px;
    display: block;
    padding: 6px;
`

const Switcher = styled.p`
    margin-top: 14px;
    font-size: 10px;
    color: #f4f7f6;
    font-family: 'Open Sans';
    display: block;
    text-decoration: underline;
    text-align: center;
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