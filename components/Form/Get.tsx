import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";

export default async function Get() {

  const query = gql`query GetAllUsers{
    getAllUsers{
      age
      posts{
        title
      }
    }
  }`

  const mutation = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      id
      username
    }
  }
`;
  

  const { data } = await getClient().query({ query });

  const userInput = {
    input: {
      id: "1",
      username: "newUser",
      // другие поля по вашему усмотрению
    },
  };

  // Выполняем мутацию
  const mutationResult = await getClient().mutate({
    mutation,
    variables: userInput,
  });

  console.log(mutationResult);
  
  // const res = await getClient().mutate({mutation})

  console.log(data.getAllUsers);
  

  return (
    <>
    <div>{JSON.stringify(data.getAllUsers)}</div>
    <div>{JSON.stringify(mutationResult)}</div></>

  )
}
