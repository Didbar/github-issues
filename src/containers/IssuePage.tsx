// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { useQuery, useApolloClient, useLazyQuery } from '@apollo/client'
// // import { GET_ISSUE } from '../graphql/issues.graphql'
// import Issue from '../components/Issue'
// import Comment from '../components/Comment'
// import Loading from '../components/common/Loading'
// import gql from 'graphql-tag'

// interface Params {
//   id: string
// }

// const ISSUE_QUERY = gql`
//   query IssueQuery($number: Int!) {
//     repository(owner: 'facebook', name: 'react') {
//       issue(number: $number) {
//         id
//         number
//         title
//         createdAt
//         comments { totalCount }
//         state
//         body
//         url
//       }
//     }
//   }
// `
// interface IssueType {
//   id: string
//   number: number
//   state: string
//   title: string
//   url: string
//   body: string
//   comments: {
//     totalCount: number
//   }
//   createdAt: string
// }
// interface Repository {
//   issue: IssueType
// }
// interface GetIssuesData {
//   repository: Repository
// }

// interface GetIssuesVariables {
//   cursor?: string
//   number: number
// }

// export const IssuePage: React.FC = () => {
//   const id = 26022
//   const { data, loading, error } = useQuery<GetIssuesData, GetIssuesVariables>(ISSUE_QUERY, {
//     variables: { number: 25017 }
//   })

//   if (loading) return <Loading />
//   if (error) {
//     return <p>Error</p>
//   }

//   // if (data && data.repository) {
//   //   setIssue(data.repository.issue)
//   // }
//   // console.log(data)
//   return (
//     <>
//       {data ? (
//         <>
//           {/* <h1>{issue.title}</h1>
//           <p>{issue.body}</p>
//           <p>State: {issue.state}</p>
//           <h2>Comments</h2>
//           {issue.comments.edges.map((comment: any) => (
//             <div key={comment.node.id}>
//               <p>{comment.node.body}</p>
//             </div>
//           ))} */}
//           we have a data
//         </>
//       ) : (
//         <p>Issue not found</p>
//       )}
//     </>
//   )
// }

import React from 'react'

export default function IssuePage() {
  return <div>IssuePage</div>
}
