import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";

import s from "./post-content.module.css";

const POST = {
  title: "This is a sunset review",
  image: "this-is-a-sunset-review",
  date: "2020-02-10",
  slug: "this-is-a-sunset-review",
  content: "# This is a first sunset post",
};
const PostContent = () => {
  const imagePath = `/images/posts/this-is-a-sunset-review/${POST.image}`;
  return (
    <article className={s.content}>
      <PostHeader title={POST.title} image={imagePath} />
      <ReactMarkdown>{POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;