const baseUrl = `https://jsonplaceholder.typicode.com`;

export const fetchTodosByUserId = async (userId: number) => {
  const resp = await fetch(`${baseUrl}/users/${userId}/todos`);
  return await resp.json();
};
