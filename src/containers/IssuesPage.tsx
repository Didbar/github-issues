// import React from 'react'

// import { useQuery } from '@apollo/client'
// import gql from 'graphql-tag'

// import IssuesList from '../components/IssuesList'
// import SearchBar from '../components/common/SearchBar'
// import Loading from '../components/common/Loading'

// interface Props {}
// const GET_ISSUES_DETAILED = gql`
//   query IssuesList($repo: String!, $cursor: String, $pageSize: Int) {
//     repository(owner: "facebook", name: $repo) {
//       issues(first: $pageSize, after: $cursor, states: [OPEN]) {
//         pageInfo {
//           endCursor
//           hasNextPage
//         }
//         edges {
//           cursor
//           node {
//             id
//             number
//             title
//             author {
//               login
//             }
//             state
//             createdAt
//             comments {
//               totalCount
//             }
//           }
//         }
//       }
//     }
//   }
// `

// interface Issue {
//   id: string
//   number: number
//   author: {
//     login: boolean
//   }
//   state: string
//   createdAt: string
//   title: string
//   url: string
//   comments: {
//     totalCount: number
//   }
// }

// interface Edge {
//   cursor: string
//   node: Issue
// }

// interface PageInfo {
//   endCursor: string
//   hasNextPage: boolean
// }

// interface Repository {
//   issues: {
//     edges: Edge[]
//     pageInfo: PageInfo
//   }
// }

// interface GetIssuesData {
//   repository: Repository
// }

// interface GetIssuesVariables {
//   repo: string
//   cursor?: string
//   pageSize: number
// }

// const IssuesPage: React.FC<Props> = () => {
//   const { data, loading, error } = useQuery<GetIssuesData, GetIssuesVariables>(
//     GET_ISSUES_DETAILED,
//     {
//       variables: { repo: 'react', pageSize: 10 }
//     }
//   )
//   // console.log(data?.repository.issues.edges)

//   if (loading) return <Loading />
//   if (error) {
//     return <p>Error</p>
//   }
//   const setSearchQuery = (input: string, status: string) => {
//     // console.log(input, status)
//   }

//   return (
//     <>
//       <SearchBar onSearch={setSearchQuery} />
//       {data && <IssuesList issues={data?.repository.issues.edges} />}
//     </>
//   )
// }

// export default IssuesPage

import React from 'react'

export default function IssuesPage() {
  return <div>IssuesPage</div>
}
