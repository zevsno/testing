const jsonResponse = (value) =>
  new Response(JSON.stringify(value), {
    headers: { "Content-Type": "application/json" },
  });

export const onRequest = () => {
  return jsonResponse({ msg: "Hello World!" });
};
