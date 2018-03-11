import React from 'react'
import styled from 'styled-components'
import FaChevronLeft from 'react-icons/lib/fa/chevron-left'

class Navbar extends React.Component{
    handleBackClick(){
        this.props.history.goBack();
    }

    render(){
        return (
            <Wrapper>
                    <FaChevronLeft 
                    style={{
                        color: '#49c5b6',
                        marginLeft: '2vh',
                        transform: 'translateY(80%)'
                    }}
                    onClick={() => this.handleBackClick()}/>
            </Wrapper>
        )
    
    }

}

export default Navbar


const Wrapper = styled.div`
    height: 50px;
    background-color: #f3f3f3;
`