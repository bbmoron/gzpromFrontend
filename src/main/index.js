import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import GlobalFonts from './GlobalFonts';
import farm from './farm.svg';
import partner1 from './partner1.svg';
import partner1alt from './partner1alt.svg';
import partner2 from './partner2.svg';
import ellipse1 from './ellipse1.svg';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

const Wrap = styled.div`
  max-width: 100vw;
  background: linear-gradient(#E5E5E5, #FFFFFF);
  position: relative;

  & img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`;

const Ellipse1 = styled.img`
  position: absolute;
  z-index: 1;
  top: -15vh;
  left: -15vw;
  width: 30vw;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: inherit;
    overflow: hidden;
  }
`;

const Ellipse2 = styled.img`
  position: absolute;
  z-index: 1;
  top: 18vh;
  left: 80vw;
  width: 10vw;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: inherit;
    overflow: hidden;
  }
`;

const Ellipse3 = styled.img`
  position: absolute;
  z-index: 1;
  top: 120vh;
  left: 50vw;
  width: 60vw;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: inherit;
    overflow: hidden;
  }
`;

const Ellipse4 = styled.img`
  position: absolute;
  z-index: 1;
  top: 230vh;
  left: 85vw;
  width: 10vw;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: inherit;
    overflow: hidden;
  }
`;

const Ellipse5 = styled.img`
  position: absolute;
  z-index: 1;
  top: 280vh;
  left: 85vw;
  width: 30vw;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: inherit;
    overflow: hidden;
  }
`;

const Headline = styled.div`
  width: 100vw;
  height: 10vh;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 999;
  position: relative;
`;

const HeadlineInner = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  @media ${device.mobileS} {
    & img {
      width: 50%;
    }
  }
  @media ${device.laptop} {
    & img {
      width: auto;
      height: 90%;
    }
  }
`;

const WelcomeBlock = styled.div`
  z-index: 999;
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 80px;
  color: #0256B5;

  @media ${device.mobileS} {
    & h1 {
      font-size: 32px;
      font-family: 'Proxima Nova';
    }

    & h3 {
      font-size: 24px;
      font-family: 'Proxima Nova';
    }

    & h4 {
      font-size: 18px;
      font-family: 'Proxima Nova';
    }
  }

  @media ${device.laptop} {
    & h1 {
      width: 70vw;
      font-size: 43px;
      font-family: 'Proxima Nova';
    }

    & h3 {
      font-size: 32px;
      font-family: 'Proxima Nova';
    }

    & h4 {
      font-size: 24px;
      font-family: 'Proxima Nova';
    }
  }
`;

const ButtonsRow = styled.div`
  z-index: 999;
  @media ${device.mobileS} {
    width: 90vw;
  }
  @media ${device.laptop} {
    width: 40vw;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & a {
    text-decoration: none;
    color: white;
  }
`;

const Button = styled.div`
  z-index: 999;
  background: #0256B5;
  color: #FFFFFF;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 50px;
  font-weight: lighter;
  font-family: sans-serif;
  text-decoration: none;
  @media ${device.mobileS} {
    width: 140px;
    font-size: 18px;
  }
  @media ${device.laptop} {
    width: 200px;
    font-size: 25px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const ButtonLarge = styled.div`
  z-index: 999;
  background: #0256B5;
  color: #FFFFFF;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 50px;
  font-weight: lighter;
  font-family: sans-serif;
  width: 300px;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const ImageBlock = styled.div`
  z-index: 999;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 130px;

  @media ${device.mobileS} {
    & img {
      width: 90vw;
      z-index: 999;
    }
  }
  @media ${device.laptop} {
    & img {
      width: 80vw;
      z-index: 999;
    }
  }
`;

const FormBlock = styled.div`
  z-index: 100;
  @media ${device.mobileS} {
    width: 90vw;
    margin-left: 5vw;
  }
  @media ${device.laptop} {
    width: 50vw;
    margin-left: 25vw;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  font-family: sans-serif;
  position: relative;
`;

const ConsentRow = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & p {
    text-align: left;
  }
`;

const Input = styled.input`
  z-index: 100;
  @media ${device.mobileS} {
    width: 90vw;
  }
  @media ${device.laptop} {
    width: 50vw;
  }
  height: 80px;
  border-radius: 50px;
  border: 2px solid #0056B3;
  outline: none;
  margin-bottom: 20px;
  background: #FFFFFF;
  text-align: center;
  color: #0256B5;
  font-size: 18px;

  &::placeholder {
    color: #0256B5;
  }
`;

const Checkbox = styled.input`
  z-index: 100;
  width: 50px;
  height: 50px;
  margin-left: 40px;
  margin-right: 10px;
`;

const Footer = styled.div`
  z-index: 999;
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media ${device.mobileS} {
    & img {
      width: 80vw;
    }
  }
  @media ${device.laptop} {
    & img {
      width: auto;
    }
  }
`;

const Modal = styled.div`
  @media ${device.mobileS} {
    width: 90vw;
    height: 25vh;
  }
  @media ${device.laptop} {
    width: 40vw;
    height: 15vh;
  }
  background: white;
  box-shadow: 1px 0px 5px rgba(0,0,0,0.3);
  position: absolute;
  z-index: 999;
  border-radius: 10px;
  display: flex;
  ${props => props.hidden && css`
    display: none;
  `}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Index = () => {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [aggreed, setAggreed] = useState(false);
  const [unsent, setUnsent] = useState(true);

  const fetchEmail = () => {
    if(!aggreed) return;
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    var urlencoded = new URLSearchParams();
    urlencoded.append('name', name);
    urlencoded.append('phone', phone);
    urlencoded.append('email', email);
    urlencoded.append('occupation', occupation);
    urlencoded.append('company', company);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch('176.119.156.180:8080/', requestOptions)
      .then(response => response.text())
      .then(result => {
        setUnsent(false);
        setTimeout(() => {
          setUnsent(true);
        }, 3000);
      })
      .catch(error => console.log('error', error));
  }

  return(
    <Wrap>
      <Ellipse1 src={ellipse1} alt='ellipse' />
      <Ellipse2 src={ellipse1} alt='ellipse' />
      <Ellipse3 src={ellipse1} alt='ellipse' />
      <Ellipse4 src={ellipse1} alt='ellipse' />
      <Ellipse5 src={ellipse1} alt='ellipse' />
      <GlobalFonts />
      <Headline>
        <HeadlineInner>
          <img src={partner1} alt='gazprom' />
          <img src={partner2} alt='nova' />
        </HeadlineInner>
      </Headline>
      <WelcomeBlock>
        <h3>Сделка по финансированию</h3>
        <h1>АО «ВетроОГК-2» (340 МВт) и ее место в ESG-стратегиях ГК «Росатом» и Банка ГПБ (АО)</h1>
        <h4>27 января 2021 года, 10:00</h4>
        <ButtonsRow>
          <a href={process.env.PUBLIC_URL + '/prgrm.pdf'} rel='noreferrer' target='_blank'>
            <Button>Программа</Button>
          </a>
          <AnchorLink href='#reg'>
            <Button>Регистрация</Button>
          </AnchorLink>
        </ButtonsRow>
      </WelcomeBlock>
      <ImageBlock>
        <img src={farm} alt='farm' />
      </ImageBlock>
      <section id='reg'>
        <FormBlock>
          <Modal hidden={unsent}>
            <h3>
              Ваша регистрационная форма получена.<br />Мы свяжемся с Вами в ближайшее время.
            </h3>
          </Modal>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Фамилия Имя Отчество' />
          <Input value={occupation} onChange={(e) => setOccupation(e.target.value)} placeholder='Должность' />
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Телефон' />
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' />
          <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Компания' />
          <ConsentRow>
            <Checkbox type='checkbox' id='consent' name='consent' value='Aggree' onClick={() => { setAggreed(!aggreed) }} />
            <p>Я принимаю Условия Пользовательского соглашения и даю свое согласие на обработку моей персональной информации на условиях определенных <a href={process.env.PUBLIC_URL + '/policy.pdf'} rel='noreferrerw' target='_blank'>Политикой конфиденциальности</a></p>
          </ConsentRow>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ButtonLarge onClick={fetchEmail}>Зарегистрироваться</ButtonLarge>
        </FormBlock>
      </section>
      <Footer>
        <img src={partner1alt} alt='gazprom' />
      </Footer>
    </Wrap>
  );
};

export default Index;