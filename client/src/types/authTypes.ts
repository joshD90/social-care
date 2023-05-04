export interface AuthSignIn {
  username: string;
  password: string;
}

export interface AuthCreate extends AuthSignIn {
  passwordConfirm: string;
}
