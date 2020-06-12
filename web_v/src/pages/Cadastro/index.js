import React, {useEffect, useState} from 'react';
import Logoimg from '../../assets/2.png'
import Img1 from '../../assets/studies.jpg'
import Img2 from '../../assets/img2.jpg'
import Img3 from '../../assets/img3.jpg'
import { 
  BodyPage,
  Header,
  Logo,
  Container,
  Slider,
  Form,
  Input,
  Button,
  Corpo,
  ViewModal,
  CloseX,
  HeaderModal,
  Title,
  ContentModal
 } from './styles';
import Modal from '@material-ui/core/Modal';
import { FiCheckCircle } from 'react-icons/fi';
import {MdErrorOutline} from 'react-icons/md'




function Cadastro() {



const Imagens = [Img1, Img2, Img3];
const [ImgAtual, setImgAtual] = useState(0);
const [open, setOpen] = useState(false);
const [Value, setValue] = useState(undefined)


useEffect(() =>{
  setTimeout(()=>{
    if(ImgAtual === 0){
      setImgAtual(1)
    } else if(ImgAtual === 1){
        setImgAtual(2)
    } else {
       setImgAtual(0)
    }

    
  }, 7000)
}, [ImgAtual])

 //modal
 const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

function Error(){
  setValue(FailedRegister)
  setOpen(true)

}
function Sucess(){
  setValue(SucessRegister)
  setOpen(true)

}

const SucessRegister = (
   <Corpo>
     <ViewModal>
       <HeaderModal>
       <CloseX onClick={handleClose}>X</CloseX>
       </HeaderModal>
       
       <ContentModal> 
        <FiCheckCircle color="#7AC043" size={70}/>
        <Title> Registrado com Sucesso! </Title>
        </ContentModal> 
     </ViewModal>
   </Corpo>
);



const FailedRegister = (
  <Corpo>
    <ViewModal>
      <HeaderModal>
      <CloseX onClick={handleClose}>X</CloseX>
      </HeaderModal>
      
      <ContentModal> 
       <MdErrorOutline color="#D60000" size={70}/>
       <Title> Falha no Registro! </Title>
       </ContentModal> 
    </ViewModal>
  </Corpo>
);
//modal
  return (
  
   <BodyPage>
    <Header>
      
      <Logo  src={Logoimg}/>
     
    </Header>
    <Container>
      <Slider 
        
        src={Imagens[ImgAtual]}>
      
      </Slider>

    
      <Modal
        open={open}
      
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {Value}
      </Modal>



   <Form>
      <Input
          
          placeholder="digite seu nome de usuario" />

      <Input
          placeholder="digite seu email" />

      <Input
          placeholder="digite sua senha" />

      <Input
          placeholder="confirme sua senha" />    

      <Button>Cadastrar</Button> 
         
      <CloseX onClick={Error}>Error</CloseX>
      <CloseX onClick={Sucess}>Sucess</CloseX>
  </Form>


    </Container>
   </BodyPage> 
   
  );
}

export default Cadastro;