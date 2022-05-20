import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import styled from "styled-components";
import Spinner from "../Spinner";
import Button from "../Button";
import { Post, postsAction } from "../../state/posts";
import useStore from "../../useStore";

interface Props {
  post: Post;
}
interface param {
  id: number;
}
function PostItem({ post }: Props) {
  const { PostStore } = useStore();

  const param = {
    id: post.id,
  };
  const [deletloading, setLoading] = useState(false);

  const handleDeletePost = useCallback(
    (param: param) => {
      setLoading(true);
      const { deletePost } = PostStore;
      setLoading(false);
    },
    [PostStore]
  );
  return (
    <PostInfo>
      <div>{post.title}</div>
      <div>
        <Link
          to={`/post/${post.id}`}
          style={{ color: "#9a9a9a", fontSize: "12px" }}
        >
          Detail
        </Link>
      </div>
      <div>
        {deletloading ? (
          <Spinner />
        ) : (
          //   eslint-disable-next-line react/button-has-type
          <Button
            className="delete"
            disabled={deletloading}
            onClick={() => handleDeletePost(param)}
          >
            Delete
          </Button>
        )}
      </div>
    </PostInfo>
  );
}

const PostInfo = styled.li`
  display: flex;
  list-style: none;
  padding-bottom: 15px;
  gap: 5px;
`;
export default PostItem;
