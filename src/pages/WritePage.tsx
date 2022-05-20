import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "@components/PostForm";
import useStore from "../useStore";

function WritePage() {
  const { PostStore } = useStore();

  useEffect(() => {
    PostStore.fetchPostList();
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: { title: string; body: string }) => {
    setLoading(true);
    await PostStore.fetchAddPost(values);
    const latestPostId = PostStore.postData[PostStore.postData.length - 1].id;
    navigate(`/post/${latestPostId}`);
    setLoading(false);
  };

  return (
    <div>
      <h1>글쓰기 페이지 입니다.</h1>
      <PostForm onSubmit={onSubmit} />
    </div>
  );
}

export default WritePage;
