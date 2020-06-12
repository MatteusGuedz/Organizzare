import styled from 'styled-components';

export const BodyPage = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;

  
`;

export const Header = styled.div`

  height:140px;
  min-height:100px;
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:flex-end;
 
`;


export const Logo = styled.img`
    min-height:80px;
    height:120px;
`;

export const Container = styled.div`
  width:800px;
  height: 500px;
  background:#e7dfdd;
  margin:50px 0;
  border-radius:8px;
  display:flex;
  align-items:center;
  padding:0 15px 0 15px;
  justify-content: space-between;
   
  @media(max-width: 950px){   
    height:750px;
    width:320px;
    padding:0;
    flex-direction:column;
    display:flex;
    align-items:center;
    justify-content: space-around;
    
}


`;
export const  Slider = styled.img`
height:475px;
width:380px;
background:#e7dfdd;
border-radius:8px;
margin-right:30px;

@media(max-width: 950px){   
    height:375px;
    width:300px;
    margin:0;
   
}


`;

export const Form = styled.form`
  height:475px;
   width:350px;
  background:#e7dfdd;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  padding: 30px 0;
  @media(max-width: 950px){   
    height:350px;
    width:300px;
    padding: 15px 0;
    display:flex;
    align-items: center;
  
    
    
}

  

`;

export const Input = styled.input`

height:48px;
  width:300px;
  background: #78079e;
  color:#e7dfdd;
  display:flex;
  align-items:center;
  border:0;
  border-radius: 8px;
  padding-left:15px;
  padding-right:15px;
  font-size:20px;

  &::placeholder{
    color: #e7dfdd;
  }

  @media(max-width: 950px){   
 
  font-size:15px;
    
    
}
  

`;

export const Button = styled.div`
  height:48px;
  width:300px;
  border-radius: 8px;
  background: #0E0A19;
  color:#e7dfdd;
  display:flex;
  align-items: center;
  justify-content:center;
  font-size: 30px;
  font-weight: 700;
  @media(max-width: 950px){   

  font-size:20px;
    
    
}
`;

//modal

export const Corpo = styled.div`
  height:100vh;
  width:100vw;
  display:flex;
  align-items: center;
  justify-content:center;
`;

export const ViewModal = styled.div`
width: 500px;
height:300px;
background: #e7dfdd;
@media(max-width: 950px){   
  width:330px;;
  height:300px;;
}
`;
 
export const HeaderModal = styled.div`
  height:40px;
  display:flex;
  align-items: center;
  justify-content:flex-end;
  padding-right:15px;

`;

export const CloseX = styled.p`
 color:#f00;
font-size:20px;
font-weight:700;
&:hover{
  cursor:pointer;
}
`;


export const ContentModal = styled.div`
  height: 100%;
  display:flex;
  align-items: center;
  flex-direction:column;
  justify-content:center;
  
  
`;

export const Title = styled.h1`
  margin-top:30px;

  @media(max-width: 950px){   
    text-align:center;
}
  
`;
