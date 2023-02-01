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

export interface Edge {
  cursor: string
  node: Issue
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

export interface GetIssuesData {
  repository: Repository
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
