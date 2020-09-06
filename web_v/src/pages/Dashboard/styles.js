import styled from 'styled-components';



export const Body = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:row;

  
`;


export const HeaderHo = styled.div`
 display:flex;
 flex-direction:column;
  width:250px;
  max-width:260px;
  height:100vh;
  background:#f00;
  
  
`;
export const HeadHeader = styled.div`

  width:250px;
  border-right:5px solid #e7dfdd;
  height:250px;
  min-height:250px;
  background:#0E0A19;
  display:flex;
  align-items: center;
  justify-content:center;
  
`;


export const Logo = styled.img`
  width:200px;
 
`;

export const Button = styled.div`
  height:48px;
  width:200px;
  background: #0E0A19;
  color:#e7dfdd;
  display:flex;
  align-items: center;
  justify-content:center;
  font-size: 30px;
  font-weight: 700;
  border-radius:10px;


`;

export const  BodyHeader = styled.div`
  height:100%;
  width:250px;
  min-height:250px;
  background:#78079e;
  border-right:5px solid #e7dfdd;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  padding:20px 0;
  
  
  
`;

export const  BodyPage = styled.div`
  height:100vh;
  width:100%;
  background:#0E0A19;
  
`;

export const  Svg = styled.svg`
    position:absolute;
     bottom:0;
     right:5px;
     max-height:558px;
     width:640;
    height:558;
`;