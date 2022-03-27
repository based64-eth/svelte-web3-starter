export async function get({ locals }) {
  const user = locals.session.data?.user;

  return {
    body: {
      me: user
    }
  }
}
