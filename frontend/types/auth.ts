export type LoginDto = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type RegisterDto = {
  userName:string;
  email: string;
  password: string;
};