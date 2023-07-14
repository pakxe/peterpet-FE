/* <div id='map' style={{ width: '500px', height: '400px' }}></div>; */
import { styled } from 'styled-components';
import Button from '../components/Button/Button';
import Horizon from '../components/Hotrizon/Horizon';
import Header from '../components/Header/Header';
import Typo from '../components/Typo/Typo';


const Wrapper = styled.div`
  display: flex; 
  flex-direction: column;
  //align-items: center;
`;

const main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    margin-top: 100px;
`
const Buttonbox = styled.div`

    border: none;
    margin:10px;
`

const Textbox = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    flex-direction:column;
    margin-top: 80px;
    margin-bottom: 80px;
`

const Login = () => {
    return (
      <>
        <Header titleSize='large' left='cancel' />

        <Textbox>
        <Typo size= "1.8em" weight="bold" > 오직 나의 반려견을 위한 옷을 <br/> 만들어볼까요?</Typo>
        <Typo size= "0.8em" weight="bold" color= 'gray'> <br/>로그인 또는 회원가입이 필요합니다 </Typo>
        </Textbox>


        <Buttonbox>
            <Button>
                <Typo color= "${({ theme }) => theme.colors.white">로그인</Typo>
            </Button>
        </Buttonbox>
             
        <Buttonbox>
            <Button>
                <Typo color= "white">회원가입</Typo>
            </Button>
        </Buttonbox>
     
     </>
    );
  };
  
  export default Login ;