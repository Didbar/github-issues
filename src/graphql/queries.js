import gql from 'graphql-tag'

export const ISSUE_QUERY = gql`
  query IssueQuery($number: Int!) {
    repository(owner: "facebook", name: "react") {
      issue(number: $number) {
        id
        number
        title
        createdAt
        comments {
          totalCount
        }
        state
        body
        url
      }
    }
  }
`
export const GET_ISSUES_DETAILED = gql`
  query IssuesList($repo: String!, $state: [IssueState!], $cursor: String, $pageSize: Int) {
    repository(owner: "facebook", name: $repo) {
      issues(
        first: $pageSize
        after: $cursor
        states: $state
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            number
            title
            state
            createdAt
            comments {
              totalCount
            }
          }
        }
      }
    }
  }
`
export const ISSUES_COUNT_QUERY = gql`
  query {
    repository(owner: "facebook", name: "react") {
      openedCount: issues(states: [OPEN]) {
        totalCount
      }
      closedCount: issues(states: [CLOSED]) {
        totalCount
      }
    }
  }
`
export const COMMENTS_QUERY = gql`
  query IssueCommentList($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $number) {
        id
        comments(first: 30) {
          edges {
            node {
              id
              author {
                login
                avatarUrl
              }
              body
              createdAt
            }
          }
        }
      }
    }
  }
`
