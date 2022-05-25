// /import styled from "@emotion/styled";
import tw from "twin.macro";
import styled from "@emotion/styled/macro";
// const CardForm = styled.form`
//   padding: 16px;
//   width: 100%;
//   height: 100%;
//   background-color: white;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
//   box-sizing: border-box;
// `;

const CardForm = styled.form([
  tw`p-4
  w-full
  h-full
  border
  bg-white
  shadow-inner
  box-border`,
]);

export default CardForm;
