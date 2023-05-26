import styled from "styled-components";

export const SliderItemWrapper = styled.div`
   background: url(${props=> props.src});
   width: 220px;
   height: 280px;
   border: 4px solid gold;
   border-radius: 30px;
   background-size: cover;
   margin-top: 2rem;
`
