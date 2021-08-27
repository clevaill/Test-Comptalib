const baseUrl = `https://jsonplaceholder.typicode.com`;

export const fetchUsers = async () => {
  const resp = await fetch(`${baseUrl}/users`);
  return ((await resp.json()) as []).slice(0, 15) as any[];
};

export const fetchUser = async (id: number) => {
  const resp = await fetch(`${baseUrl}/users/${id}`);
  return await resp.json();
};
