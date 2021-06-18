import React from 'react';
import { Post } from '../../lib/api/post';
import { DateFormat } from '../../lib/utils';
import dompurify from 'dompurify';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface UserPostProps {
  post: Post;
  onClickPost: (id) => void;
}

function UserPost({ post, onClickPost }: UserPostProps) {
  const {
    id,
    postImg,
    postTitle,
    postSubtitle,
    postContent,
    createdAt,
    likes,
  } = post;
  const sanitizer = dompurify.sanitize;

  return (
    <PostBlock onClick={() => onClickPost(id)}>
      <Title>{postTitle}</Title>
      <Subtitle>{postSubtitle}</Subtitle>
      <ThumbnailImg src={postImg} />
      <Content dangerouslySetInnerHTML={{ __html: sanitizer(postContent) }} />
      <PostInfo>
        <p>{DateFormat(createdAt)}</p>
        <span>·</span>
        <p>좋아요 {likes}</p>
      </PostInfo>
      <hr style={{ margin: '4rem 0' }} />
    </PostBlock>
  );
}

export default UserPost;

const PostBlock = styled.li`
  &:last-child {
    hr {
      display: none;
    }
  }
`;
const Title = styled.h3`
  line-height: 2.25rem;
  font-size: 1.75rem;
  font-weight: bold;
  cursor: pointer;
`;
const Subtitle = styled.h4`
  margin-top: 0.75rem;
  margin-bottom: 1.5rem;
  line-height: 1.75rem;
  font-size: ${theme.fontSizes.large};
  color: ${theme.palette.gray6};
  cursor: pointer;
`;
const ThumbnailImg = styled.img`
  width: 100%;
  height: inherit;
  object-fit: contain;
  cursor: pointer;
`;
const Content = styled.div`
  overflow: hidden;
  display: -webkit-box;
  margin-top: 2rem;
  line-height: 1.5rem;
  font-size: ${theme.fontSizes.default};
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-all;
  cursor: pointer;
`;
const PostInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2.5rem;
  font-size: ${theme.fontSizes.small};
  color: ${theme.palette.gray6};
  cursor: default;
  span {
    margin: 0 0.425rem;
  }
`;
