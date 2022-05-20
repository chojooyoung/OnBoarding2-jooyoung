import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostListForm from "@components/PostListForm";
import PostList from "@components/PostList";
import Divider from "@components/Divider";
import { RootState } from "../state";
import useStores from "../useStore";
import { observer } from "mobx-react";

const PostsPage = observer(function PostsPages() {
  const { PostStore } = useStores();

  useEffect(() => {
    PostStore.fetchPostList();
  }, [PostStore]);

  return (
    <div>
      <h1>게시글목록</h1>
      <Divider />
      <h3>게시글 총 갯수:{PostStore.postData.length}</h3>
      <PostListForm>
        <PostList />
      </PostListForm>
    </div>
  );
});

export default PostsPage;
