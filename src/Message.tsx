function Message() {
  const name = 123;
  if (typeof name === "string") return <h1>Hello {name}</h1>;

  return <h1>Hello World</h1>;
}

export default Message;
