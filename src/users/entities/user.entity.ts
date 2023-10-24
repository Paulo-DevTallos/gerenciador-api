export interface UserProps {
  name: string;
  email: string;
  password: string;
  role: string;
  status: string;
  created_at?: Date;
}

export class User {
  constructor(private readonly props: UserProps) {
    this.props.created_at = this.props.created_at || new Date();
  }
}
