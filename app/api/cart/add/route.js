
// /app/api/add-to-cart/route.js
// export async function POST(request) {
//   const { product_id, quantity, cart_uuid } = await request.json();
//
//   try {
//     const res = await fetch("http://127.0.0.1:8000/api/orders/add-to-cart/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         product_id,
//         quantity,
//         cart_uuid,
//       }),
//     });
//
//     if (!res.ok) {
//       return new Response("Failed to add product to cart", { status: 500 });
//     }
//
//     const data = await res.json();
//     return new Response(JSON.stringify(data), { status: 200 });
//   } catch (error) {
//     return new Response("Error", { status: 500 });
//   }
// }