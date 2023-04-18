import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUser($login: String!) {
    user(login: $login) {
      id
      login
      name
      avatarUrl(size: 100)
    }
  }
`;

export const GET_FACE = gql`
  query getUser($login: String!) {
    user(login: $login) {
      id
      login
      name
      avatarUrl(size: 200)
      url
      repositories(last: 100) {
        nodes {
          id
          name
          url
          pushedAt
          stargazerCount
          updatedAt
          languages(first: 100) {
            totalCount
            nodes {
              id
              color
              name
            }
          }
        }
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

export const GET_VIEWER_REPO = gql`
  query getViewerRepo {
    viewer {
      repositories(last: 10) {
        nodes {
          id
          name
          createdAt
        }
      }
    }
  }
`;
