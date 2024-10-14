export async function getServerSideProps(context) {
  const { req } = context;
  const token = req.cookies.access_token; // به فرض اینکه نام توکن شما access_token است

  return {
    props: {
      isAuthenticated: !!token, // اگر توکن وجود داشته باشد، true برمی‌گرداند
    },
  };
}