interface IGetUserData {
  email: string;
}
export async function getUserData({ email }: IGetUserData) {
  try {
    const data = await fetch(
      process.env.NEXT_PUBLIC_API +
        "/v1/user/data?username=" +
        email.split("@")[0]
    );
    if (data.ok) {
      const aux = await data.json();
      return aux;
    }
  } catch (error) {
    return false;
  }
}
