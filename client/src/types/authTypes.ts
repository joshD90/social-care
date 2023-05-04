export interface AuthSignIn {
  username: string;
  password: string;
}

export interface AuthCreate extends AuthSignIn {
  passwordConfirm: string;
}

export type UserTypes = {
  username: string;
  privileges: "guest" | "user" | "admin";
};

export type AuthStateTypes = {
  isLoading: boolean;
  user: UserTypes | null;
  error: string | null;
};

export type AuthReducerActions =
  | {
      type: "GET_USER_INIT";
    }
  | {
      type: "GET_USER_SUCCESS";
      payload: any;
    }
  | {
      type: "GET_USER_FAILURE";
      payload: string;
    };
