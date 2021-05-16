import Head from 'next/head'
import { useState } from 'react';
import { FaPhone, FaHeadset, FaShieldAlt, FaTools } from "react-icons/fa";
//import styles from '../styles/Home.module.css'

export default function Home() {

  const [accordionSobre, setAccordionSobre] = useState(0)
  return (
    <>
      <div className="full">
        <Head>
          <title>R&R Soluções em TI | LGPD</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bgGrad">
          <div className="container topBar">
            <div className="">info1</div>
            <div className=""><FaPhone color="#fff" fontSize="13px"></FaPhone> (16) 99715-3730</div>
          </div>
        </div>
        <div className="carrousel">
          <div className="menuBar ">
            <div className="container ">
              <a className="menuLinks" href="#lgpd">LGPD</a>
              <a className="menuLinks" href="#servicos">SERVIÇOS</a>
              <div className="espacador"></div>
              <div className="logo"></div>
              <a className="menuLinks" href="#quem-somos">QUEM SOMOS</a>
              <a className="menuLinks" href="#contato">CONTATO</a>
            </div>
          </div>
          <div className="container content">
            <h1>O MELHOR EM</h1>
            <ul>
              <li>
                SERVIÇO 1
            </li>
              <hr className="divider" width="220px" align="left"></hr>
              <li>
                SERVIÇO 2
            </li>
              <hr className="divider" width="220px" align="left"></hr>
              <li>
                SERVIÇO 3
            </li>
              <hr className="divider" width="220px" align="left"></hr>
              <li>
                SERVIÇO 4
            </li>
              <hr className="divider" width="220px" align="left" ></hr>
            </ul>
          </div>
        </div>
        <div className="shadow center bgGrad middleBar">
          <h3>TRADIÇÃO E QUALIDADE A MAIS DE 5 ANOS NO MERCADO</h3>
        </div>
        <div className="container" id="lgpd">
          <h4 className="title">SUA EMPRESA ESTÁ PREPARADA PARA &nbsp; <strong> ERA DIGITAL?</strong> <span><hr className="divider" width="232px" ></hr></span></h4>
        </div>
        <div className="container row" >
          <div className="flex25 textCard shadow1">
            <p>
              Lorem ipsum dolor sit amet LGPD, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </div>
          <div className="flex1">
            <img src="./lgpd.png" alt="lgpd" title="lgpd" align="right"></img>
          </div>
        </div>

        <div className="container" id="servicos">
          <h5 className="title">CONHEÇA NOSSOS  &nbsp;<strong>SERVIÇOS</strong> <span><hr className="divider" width="518px" ></hr></span></h5>
        </div>
        <div className="clear"></div>
        <div className="container" >
          <div className="servicesIcons">
            <div className="iconContainer">
              <FaHeadset className="icon" fontSize="140px" color="#B40218"></FaHeadset>
              <span className="">SUPORTE</span>
            </div>
            <div className="iconContainer">
              <FaShieldAlt className="icon" fontSize="140px" color="#B40218"></FaShieldAlt>
              <span className="">LGPD</span>
            </div>
            <div className="iconContainer">
              <FaTools className="icon" fontSize="140px" color="#B40218" align="center"></FaTools>
              <span className="">MANUTENÇÃO</span>
            </div>
            <div className="iconContainer">
              <FaHeadset className="icon" fontSize="140px" color="#B40218"></FaHeadset>
              <span className="">SUPORTE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="full sobre">
        <div className="container" id="quem-somos">
          <h4 className="title">QUEM &nbsp; <strong> SOMOS</strong> <span><hr className="divider" width="722px" ></hr></span></h4>
        </div>
        <div className="container row" >
          <div className="flex2 textCard shadow1">
            <p>
              Lorem ipsum dolor sit amet LGPD, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </div>
          <div className="flex1">
            <div className={accordionSobre == 0 ? "accordionBtn center bgGrad" : "accordionBtn center bgGray"} onClick={() => { setAccordionSobre(0) }} >MISSÃO</div>
            <div className={accordionSobre == 0 ? "accordionOpen bgGray" : "accordionClosed"} >Lorem ipsum dolor sit amet LGPD, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
            <div className={accordionSobre == 1 ? "accordionBtn center bgGrad" : "accordionBtn center bgGray"} onClick={() => { setAccordionSobre(1) }}>VISÃO</div>
            <div className={accordionSobre == 1 ? "accordionOpen bgGray" : "accordionClosed"} >Lorem ipsum dolor sit amet LGPD, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
            <div className={accordionSobre == 2 ? "accordionBtn center bgGrad" : "accordionBtn center bgGray"} onClick={() => { setAccordionSobre(2) }}>VALORES</div>
            <div className={accordionSobre == 2 ? "accordionOpen bgGray" : "accordionClosed"} >Lorem ipsum dolor sit amet LGPD, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
          </div>
        </div>
      </div>
      <div className="full">
        <div className="container" id="contato">
          <h4 className="title">CONTATO &nbsp; <strong> E LOCALIZAÇÃO</strong> <span><hr className="divider" width="555px" ></hr></span></h4>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.891198891524!2d-48.162929084437835!3d-21.78447150426379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f3ff467938c9%3A0x86c5347285f7793c!2zUiZSIFNvbHXDp8O1ZXMgZW0gVC5JIHwgUHJvdGXDp8OjbyBkZSBkYWRvcyB8IExHUEQ!5e0!3m2!1spt-BR!2sbr!4v1621183678385!5m2!1spt-BR!2sbr" width="100%" height="250" className="borderNone" allowfullscreen="" loading="lazy"></iframe>
        <div className="container row" >
          <div className="flex1 column">
            <h5 className="subtitle"><strong>LOCALIZAÇÃO</strong> </h5>
            <p className="sobreHorario">
              Av. Padre Antônio Cezarino, 1070 <br />Vila Xavier (Vila Xavier), Araraquara - SP <br /> 14810-142
            </p>
            <img src="./empresa.jpg " height="130px" width="150px" className="contatoImg shadow"></img>
            <h5 className="subtitle2"><strong>TELEFONE</strong> </h5>
            <p className="sobreHorario">
              (16) 99715-3730
            </p>
          </div>
          <div className="flex1 column">
            <h5 className="subtitle"><strong>HORÁRIO DE FUNCIONAMENTO</strong> </h5>
            <h5 className="subtitle2"><strong>SEG - SEX</strong> </h5>
            <p className="sobreHorario">
              08:00 às 11:00
            </p>
            <p className="sobreHorario" >
              13:00 às 18:00
            </p>
            <h5 className="subtitle2"><strong>SÁBADO</strong> </h5>
            <p className="sobreHorario">
              08:00 às 11:00
            </p>
            <p className="sobreHorario" >
              13:00 às 18:00
            </p>
          </div>
        </div>
        <div className="container">
          <h4 className="title textCenter">ENTRE EM CONTATO &nbsp; <strong> CONOSCO!</strong></h4>
          <div className="clear"></div>
          <form>
            <div className="row justBet">
              <div className="inputContainer">
                <div className="row justBet"><p className="sobreHorario"> NOME:</p><p className="sobreHorario"> (OBRIGATÓRIO)</p></div>
                <input type="text"></input>
              </div>
              <div className="inputContainer">
                <div className="row justBet"><p className="sobreHorario"> E-MAIL:</p><p className="sobreHorario"> (OBRIGATÓRIO)</p></div>
                <input type="email"></input>
              </div>
              <div className="inputContainer">
                <div className="row justBet"><label for="phone" className="sobreHorario"> FONE/WHATSAPP:</label><p className="sobreHorario"> (OBRIGATÓRIO)</p></div>
                <input type="tel" id="phone" name="phone" ></input>
              </div>
            </div>
            <div className="inputContainerFull">
              <div className="row justBet"><label for="nsg" className="sobreHorario"> MENSAGEM:</label><p className="sobreHorario"> (OBRIGATÓRIO)</p></div>
              <textarea id="msg" name="msg" ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="full bottomDivider bgGrad"></div>
      <div className="full rodape ">
        <div className="whiteBlur">
          <div className="container justBet row">
            <div className="column">
              <h6 className="rodapeTitle bgGrad">
                MENU
              </h6>
              <ul>
                <li><a href="#lgpd" className="subtitle"><strong>LGPD</strong></a></li>
                <li><a href="#servicos" className="subtitle"><strong>SERVIÇOS</strong></a></li>
                <li><a href="#quem-somos" className="subtitle"><strong>QUEM SOMOS</strong></a></li>
                <li><a href="#contato" className="subtitle"><strong>CONTATO</strong></a></li>
              </ul>
            </div>
            <div className="center column">
              <img src="./anppd.png"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="full bottom bgGrad">
        <div className="row justBet container">
          <div className="center">
          <p>2021 - www.<strong>rrinformatica</strong>.com.br - todos os direitos reservados.</p>
          </div>
          
          <div className="row center">
          <p>Desenvolvido por: </p>
          &nbsp; 
          <img src="./jf.png" height="30px" width="30px"></img>
          </div>
        </div>
      </div>
    </>
  )
}
