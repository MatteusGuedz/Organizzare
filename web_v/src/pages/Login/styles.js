import styled from 'styled-components';



export const BodyPage = styled.div`
   width:100%;
  height:100%;
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
 



  
`;


export const SessaoCenter = styled.div`
  margin-top:40px;
  display:flex;
  flex-direction: row;
  align-items:center;
  height:100%;
  justify-content: center;



  @media(max-width: 900px){   
    flex-direction:column;  
    margin-top:20px;  
}
`;

export const Header = styled.div`


`;

export const LogoImg = styled.img`
  
    height: 350px;
    margin-right: 70px;
    @media(max-width: 800px){
        margin:0;
        height:150px;       
  }

`;
export const Title = styled.h1`
  margin-bottom: 20px;
  color: #78079e;
`;

export const BoxInput = styled.div`
  height: 200px;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
`;
export const FormContainer = styled.div`




  @media(max-width: 600px){    
    margin-top: 50px; 
}

`;
export const Form = styled.form`

`;
export const InputContainer = styled.div`
  height:48px;
  width:300px;
  background: #E7Dfdd;
  display:flex;
  align-items:center;
  border-radius: 8px;
  border:0;
  padding-right:15px;
  justify-content: space-between;
`;


export const Input1 = styled.input`
  height:48px;
  width:300px;
  background: #E7Dfdd;
  display:flex;
  align-items:center;
  border:0;
  border-radius: 8px;
  padding-left:15px;
  padding-right:15px;
  font-size:20px;


  
`;

export const Input2 = styled(Input1)`
    max-width:220px;
`;
export const Button = styled.div`
  height:48px;
  width:300px;
  border-radius: 8px;
  background: #78079e;
  color:#e7dfdd;
  display:flex;
  align-items: center;
  justify-content:center;
  font-size: 30px;
  font-weight: 700;
`;


export const GoRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content:flex-start;
  flex-direction: row;
  margin-top: 10px;
`;

export const TextRegister = styled.p`
margin-left: 10px;
color: #e7dfdd;
font-weight:700;
font-size:15px;
`;


export const TextFooter = styled.p`
margin-left: 10px;
color: #e7dfdd;
font-size:15px;
margin-bottom: 10px;
`
export const LGit = styled.a`
color: #78079e;

`


export const Footer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:flex-end;
    flex:1;
    

    @media(max-width: 600px){   
    margin-top: 40px;
    
}

`;


