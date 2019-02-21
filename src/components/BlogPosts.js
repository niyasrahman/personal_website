import React from "react";
import "./blog_post.scss";
import moment from "moment";

const Post = ({ data }) => {
  return (
    <div>
      <a
        target="_blank"
        href={`http://medium.com/@${data.author.username}/${data.uniqueSlug}`}
      >
        <span className="blog_post__date">
          {moment(data.createdAt).format("MMM Do YY")}
        </span>
        <div className="blog_post__content">
          <h2 className="blog_post__title">{data.title}</h2>
          <p className="blog_post__previw">{data.previewContent.subtitle}</p>
        </div>
      </a>
    </div>
  );
};

const BlogPosts = ({ data }) => {
  return (
    <div className="blog_post">
      <div className="blog_post__container">
        <h3 className="blog_post__name">Blog Posts</h3>
        <h6 className="blog_post__sub-name">originally posted on medium</h6>
        <div>
          {data.map(document => (
            <div key={document.node.id}>
              <Post data={document.node} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
