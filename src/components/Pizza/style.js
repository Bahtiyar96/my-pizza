import styled from "styled-components";

export const Title = styled.h2`
   font-size: 26px;
`

export const PizzaContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap: 20px;

   & > div {
      width: 22%;
   }
`

export const Container = styled.div`
   padding-top: 2rem;
`