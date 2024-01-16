import { gql } from '@apollo/client'

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      id
      username
    }  
  }
`

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      age
      posts {
        title
      }
    }
  }
`
