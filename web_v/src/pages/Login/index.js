import React from 'react';
import { 
  BodyPage,
  SessaoCenter,
  LogoImg,
  FormContainer,
  Form,
  BoxInput,
  InputContainer,
  Input1,
  Input2,
  Button,
  GoRegister,
  TextRegister,
  TextFooter,
  Title,
  LGit,
  Footer,
} from './styles';
import {IoIosEye  } from 'react-icons/io';
import { FaSignInAlt } from 'react-icons/fa';
import Logo from '../../assets/2.png';
import { Link } from 'react-router-dom';


function Login() {
  


   

  return (
     <>
      <BodyPage>
        <SessaoCenter>
        
            <LogoImg src={Logo}/>
        

            <FormContainer>
              <Title>Login</Title>
          <Form> 
            <BoxInput> 
              
                 <Input1 
                  placeholder="Seu email"
                 />
              

               <InputContainer>
                   <Input2 
                      type="password"
                       placeholder="Sua Senha"
                   />

                
                   <IoIosEye  size={28}/> 
               </InputContainer>
               <Button>Entrar</Button>
             </BoxInput>   
               
               <GoRegister>    
                 <FaSignInAlt  
                 size={20} 
                 color="#78079e"/>
                 <Link to="/register"><TextRegister>Não tenho Registro</TextRegister></Link>
               </GoRegister>
            </Form>  
            </FormContainer>


        </SessaoCenter>
        <Footer>
          <TextFooter>Developed by <LGit
          target="_blank"
          href="https://github.com/MatteusGuedz"
          >MatteusGuedz</LGit> in 2020</TextFooter>
        </Footer>
       
      </BodyPage>
      
     </>
    );
}

export default Login;