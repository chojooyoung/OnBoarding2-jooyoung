/* eslint-disable react/no-unescaped-entities */
import styled from "@emotion/styled";
import CardForm from "@components/CardForm";
import useStore from "../../useStore";
function HomeText() {
  const { PostStore } = useStore();

  return (
    <HomeTextWrapper>
      <CardForm>
        <h1> π μ£Όμκ²μνμ μ€μ  κ²μ νμν©λλ€!</h1>
        <h2>κΈ°λ³Έμ¬ν­μ λ€μκ³Ό κ°μ΅λλ€.</h2>
        <h3>νμ΄μ§ μ΄λ π </h3>
        <div>
          {" "}
          - μλ¨μ "Home", "Post", "Write" λ‘ μνλ νμ΄μ§λ‘ μ΄λνμ€ μ
          μμ΅λλ€.
        </div>
        <h3>κΈμ°κΈ° π</h3>
        <div>
          {" "}
          - μλ¨μ "Home", "Post", "Write" λ‘ μνλ νμ΄μ§λ‘ μ΄λνμ€ μ
          μμ΅λλ€.
        </div>
        <h3>κΈ λͺ©λ‘ π</h3>
        <div> - μλ¨μ "Posts"λ₯Ό λλ¬ κ²μκΈ λͺ©λ‘μ λΆλ¬μ΅λλ€.</div>
        <div> - κ²μκΈ μ λͺ© μ "detail"μ λλ¬ κ²μκΈμ μμΈν λ΄λλ€.</div>
        <h3>κΈ μμ  π</h3>
        <div>
          {" "}
          - κ²μκΈμ μμΈν λ³Έ ν, "Modify"λ₯Ό λλ¬ κ²μκΈμ μμ  ν  μ μμ΅λλ€.
        </div>
        <h3>κΈ μ­μ  π</h3>
        <div>
          {" "}
          - κ²μκΈ λͺ©λ‘ μ "delete" λ²νΌμ ν΄λ¦­νμ¬ κ²μκΈμ μ­μ  ν  μ
          μμ΅λλ€.
        </div>
        <div>{PostStore.postData.length}</div>
      </CardForm>
    </HomeTextWrapper>
  );
}

const HomeTextWrapper = styled.div``;

export default HomeText;
