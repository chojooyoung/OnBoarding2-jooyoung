import { makeAutoObservable } from "mobx";
import API from "../api";
export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostBody {
  title: string;
  body: string;
}

interface PostType {
  postData: Post[];
  loading: boolean;
  error: unknown;
  fetchPostList: () => void;
  fetchAddPost: (addPostData: PostBody) => void;
  fetchPostGetById: (postId: number) => void;
  fetchPostModify: (modifyData: Post) => void;
  deletePostById: (postId: number) => void;
  addPost: (responsePostData: Post) => void;
  deletePost: (id: number) => void;
  setDataById: (postResponse: Post) => void;
  modifyPostSucess: (postResponse: Post) => void;
}

export const PostStore = makeAutoObservable<PostType>({
  postData: [],
  loading: true,
  error: null,

  *fetchPostList() {
    // flow
    console.log("fetch");
    this.loading = true;
    const param = { post: "post" };
    try {
      const response: Post[] = yield API.getPostList(param);
      this.postData = response;
      this.loading = false;
    } catch (err) {
      this.error = err;
    }
  },
  *fetchAddPost(addPostData: PostBody) {
    // flow
    this.loading = true;
    const postInfo = addPostData;
    try {
      const response: Post = yield API.createPost(postInfo);
      this.addPost(response);
      this.loading = false;
    } catch (err) {
      this.error = err;
      this.loading = false;
    }
  },

  *fetchPostGetById(postId: number) {
    // flow
    const param = { id: postId };
    try {
      const response: Post = yield API.getPostById(param);
      console.log(response);
      this.setDataById(response);
      console.log(this.postData);
      this.loading = false;
    } catch (err) {
      this.error = err;
      this.loading = false;
    }
  },

  *deletePostById(postId: number) {
    // flow
    const param = { id: postId };
    try {
      const response: Post = yield API.deletePost(param);
      this.deletePost(param.id);
      this.loading = false;
    } catch (err) {
      this.error = err;
      this.loading = false;
    }
  },

  *fetchPostModify(modifyData: Post) {
    try {
      const response: Post = yield API.modyfyPost(modifyData);
      this.modifyPostSucess(response);
    } catch (err) {
      this.error = err;
      this.loading = false;
    }
  },

  addPost(responsePostData: Post) {
    this.postData.push({
      id: responsePostData.id,
      title: responsePostData.title,
      body: responsePostData.body,
    });
  },
  setDataById(responsePostData: Post) {
    const index = this.postData.findIndex(
      (post) => post.id === responsePostData.id
    );
    if (index === -1) {
      this.postData.push({
        id: responsePostData.id,
        title: responsePostData.title,
        body: responsePostData.body,
      });
    } else {
      this.postData[index] = responsePostData;
    }
  },
  deletePost(id) {
    const index = this.postData.findIndex((post) => post.id === id);
    if (id !== -1) {
      this.postData.splice(index, 1);
    }
  },
  modifyPostSucess(responsePostData: Post) {
    const { id } = responsePostData;
    const index = this.postData.findIndex((post) => post.id === id);
    if (index !== -1) {
      this.postData[index] = responsePostData;
    }
  },
});

// 그리고 불변성을 지켜줄 필요가 없다. 저 observable이 상태가 변화는지 관찰해 주기 때문이다. 액션들은 스토어 안쪽에 같이 작성할 수 있다.
