import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.15);
    backdrop-filter: blur(5px);
    animation: modal-bg-show 1s;
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const ModalBlock = styled.div`
    position: absolute;
    top: 4.5rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 1.5rem;
    background-color: #fafafa;
    width: 25rem;
    @media (max-width: 1120px) {
        width: 20rem;
    }
    @media (max-width: 30rem) {
        width: 80%;
    }
    min-height: 15rem;
    animation: modal-show 0.3s;
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export class Modal extends Component {
  render() {
    const { openClose } = this.props;
    
    // const close = () => {
    //     setShowModal(false)
    // }

    return (
        <Container>
            <Background onClick={openClose} />
            <ModalBlock>
                <Contents>
                    {this.props.children}
                </Contents>
            </ModalBlock>
        </Container>
    );
  }
}