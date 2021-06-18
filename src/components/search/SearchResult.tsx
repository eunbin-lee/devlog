import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { DateFormat } from '../../lib/utils';
import { Post } from '../../lib/api/post';
import { RootState } from '../../modules';
import { getPostsThunk } from '../../modules/post';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Loading from '../common/Loading';

interface SearchResultProps {
  query: string | any;
}

function SearchResult({ query }: SearchResultProps) {
  const router = useRouter();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.posts,
  );
  const dispatch = useDispatch();
  const [resultList, setResultList] = useState<Array<Post>>([]);

  useEffect(() => {
    dispatch(getPostsThunk());
    if (data) {
      const RESULT = data.filter(
        (post) =>
          post.postTitle.toLowerCase().includes(query.toLowerCase()) ||
          post.postSubtitle.toLowerCase().includes(query.toLowerCase()) ||
          post.user.userName.toLowerCase().includes(query.toLowerCase()),
      );
      setResultList(RESULT);
    }
  }, [router]);

  const onClickPost = (id: number) => {
    router.push(`/post/${id}`);
  };

  return (
    <Wrapper>
      {loading && <Loading />}
      {resultList ? (
        <ul>
          {resultList.map((post) => {
            const { id, postImg, postTitle, postSubtitle, createdAt, user } =
              post;
            return (
              <li key={id}>
                <UserInfo>
                  <Link href={`/[username]`} as={`/@${user.userName}`}>
                    <ProfileImg src={user.userImg} />
                  </Link>
                  <div>
                    <Link href={`/[username]`} as={`/@${user.userName}`}>
                      <Name>{user.userName}</Name>
                    </Link>
                    <PostDate>{DateFormat(createdAt)}</PostDate>
                  </div>
                </UserInfo>
                <div onClick={() => onClickPost(id)}>
                  <ThumbnailImg src={postImg} />
                  <Title>{postTitle}</Title>
                  <Subtitle>{postSubtitle}</Subtitle>
                </div>
                <hr style={{ margin: '2.5rem 0' }} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </Wrapper>
  );
}

export default SearchResult;

const Wrapper = styled.div`
  width: 100%;
  margin: 5rem auto 0;
  padding: 0 1.5rem;
  li {
    &:last-child {
      hr {
        display: none;
      }
    }
  }
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 1rem;
`;
const ProfileImg = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
`;
const Name = styled.p`
  margin-bottom: 0.65rem;
  font-size: ${theme.fontSizes.small};
  color: ${theme.palette.violet1};
  cursor: pointer;
`;
const PostDate = styled.p`
  font-size: ${theme.fontSizes.xsmall};
  color: ${theme.palette.gray6};
  cursor: default;
`;
const Title = styled.h3`
  margin-top: 1rem;
  line-height: 2.25rem;
  font-size: 1.75rem;
  font-weight: bold;
  cursor: pointer;
`;
const Subtitle = styled.h4`
  margin-top: 0.5rem;
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
