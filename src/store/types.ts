export interface Issue {
  id: string
  number: number
  state: string
  createdAt: string
  title: string
  url: string
  comments: {
    totalCount: number
  }
}

export interface Comment {
  id: string
  body: string
  createdAt: string
  author: {
    login: string
    avatarUrl: string
  }
}

export interface DetailedIssue extends Issue {
  body: string
}

export interface Edge {
  cursor: string
  node: Issue
}
export interface CommentEdges {
  node: Comment
}

export interface PageInfo {
  endCursor: string
  hasNextPage: boolean
}

export interface Repository {
  issues: {
    edges: Edge[]
    pageInfo: PageInfo
  }
}
export interface RepositoryItem {
  issue: DetailedIssue
}

export interface RepositoryComments {
  issue: {
    comments: {
      edges: CommentEdges[]
    }
    id: string
  }
}

export interface GetIssuesData {
  repository: Repository
}

export interface GetIssueData {
  repository: RepositoryItem
}

export interface GetCommentsData {
  repository: RepositoryComments
}

export interface GetIssueVariables {
  cursor?: string
  number: number
}

export interface GetIssuesVariables {
  repo: string
  cursor?: string
  pageSize: number
  state: string[]
}
export interface GetCommentVariables {
  number: number
}
