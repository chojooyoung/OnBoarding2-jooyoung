import styled from "@emotion/styled";
import PostItem from "../PostItem";
import Spinner from "../Spinner";
import useStore from "../../useStore";
import { useEffect } from "react";

function PostList() {
  const { PostStore } = useStore();
  const { postData, loading } = PostStore;

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <PostListUl>
          {postData.map((post) => {
            return <PostItem key={post.id} post={post} />;
          })}
        </PostListUl>
      )}
    </div>
  );
}

const PostListUl = styled.ul`
  text-decoration: none;
`;
export default PostList;
