import styled from "styled-components";

export const SliderItemWrapper = styled.div`
   background: url(${props=> props.src});
   width: 250px;
   height: 300px;
   border: 5px solid gold;
   border-radius: 25px;
   background-size: contain;
   margin-top: 2rem;
`