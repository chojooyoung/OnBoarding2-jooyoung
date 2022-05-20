import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostForm from "@components/PostForm";
import { postsAction } from "../state/posts";
import { RootState } from "../state";
import useStore from "../useStore";
import { useObserver } from "mobx-react";

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
