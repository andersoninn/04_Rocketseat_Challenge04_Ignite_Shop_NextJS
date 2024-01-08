
export interface ApiData {
  name: string;
  avatar_url: string;
  bio: string;
  login: string;
  company: string;
  followers: string;
  public_repos: number;
  html_url: string;
}

export interface IssuesDetailsType {
  html_url:string;
  title: string;
  user: {
    login: string;
  }
  comments: number;
  created_at:string;
  body: string;
  state: 'open' | 'closed';
}
  

export interface IssuesDataType {
  total_count: number;
  items: {
    id: number;
    title: string;
    body: string;
    created_at: string;
    url: string;
    number: number;
  }[];
}



export interface FetchContextType {
  issues?: IssuesDataType;
  fetchIssuesAPI: (query?: string) => Promise<void>;
  
}

