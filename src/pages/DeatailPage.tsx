import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import styled from "@emotion/styled";
import Spinner from "@components/Spinner";
import Divider from "@components/Divider";
import Button from "@components/Button";
import CardForm from "@components/CardForm";
import useStores from "../useStore";
import { observer } from "mobx-react";
const DetailPage = observer(function DetailPages() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { postId } = useParams<{ postId: any }>();
  const { PostStore } = useStores();

  const navigate = useNavigate();
  const postIdNumberType = parseInt(postId, 10);

  const param = {
    id: postIdNumberType,
  };

  const post = PostStore.postData.find(
    (post) => post.id === parseInt(postId, 10)
  );

  const loading = PostStore.loading;

  useEffect(() => {
    PostStore.fetchPostGetById(param.id);
  }, [PostStore, param.id]);

  const handleModifyPost = () => {
    navigate(`/modify/${postId}`);
  };
  const handleNavigatePostList = () => {
    navigate(`/posts`);
  };
  return (
    <div>
      {post && !loading ? (
        <CardForm>
          <h1>{post.title}</h1>
          <Divider />
          <h3>{post.body}</h3>
          <ButtonWrapper>
            <Button
              type="button"
              className="modify-button"
              onClick={handleModifyPost}
              disabled={loading}
            >
              Modify
            </Button>
            <Button
              type="button"
              className="modify-button"
              onClick={handleNavigatePostList}
              disabled={loading}
            >
              List
            </Button>
          </ButtonWrapper>
        </CardForm>
      ) : (
        <Spinner />
      )}
    </div>
  );
});
const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
export default DetailPage;
