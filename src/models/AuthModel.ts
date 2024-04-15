export type ApiToken = string;

export interface ApiUser {
  uid?: string;
  email?: string | undefined | null;
  displayName?: string | undefined | null;
  isLoggedIn: boolean;
}
