declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
    COGNITO_CLIENT_ID: string
    COGNITO_CLIENT_SECRET: string
    COGNITO_ISSUER: string
    COGNITO_HOSTED_URL: string
  }
}
