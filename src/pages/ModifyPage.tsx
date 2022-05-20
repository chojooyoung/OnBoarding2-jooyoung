import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModyFyForm from "../components/ModifyForm";
import useStore from "../useStore";

function ModifyPage() {
  const { postId } = useParams<{ postId: any }>();

  const navigate = useNavigate();

  const { PostStore } = useStore();

  const post = PostStore.postData.find(
    (post) => post.id === parseInt(postId, 10)
  );

  useEffect(() => {
    PostStore.fetchPostList();
  }, [PostStore]);

  const onSubmit = async (values: { title: string; body: string }) => {
    const modifyData = {
      title: values.title,
      body: values.body,
      id: postId,
    };
    PostStore.fetchPostModify(modifyData);
    navigate(`/post/${postId}`);
  };

  return (
    <div>
      <h1>글수정 페이지 입니다.</h1>
      <ModyFyForm onSubmit={onSubmit} defaultValue={post} />
    </div>
  );
}

export default ModifyPage;
