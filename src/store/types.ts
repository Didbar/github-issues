export interface Issue {
  id: string
  number: number
  state: string
  createdAt: string
  title: string
  url: string
  body: string
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
  issue: Issue
}

export interface RepositoryStateCounts {
  openedCount: {
    totalCount: number
  }
  closedCount: {
    totalCount: number
  }
}

export interface RepositoryComments {
  issue: {
    comments: {
      id: string
      edges: CommentEdges[]
    }
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

export interface GetStateCountsData {
  repository: RepositoryStateCounts
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
