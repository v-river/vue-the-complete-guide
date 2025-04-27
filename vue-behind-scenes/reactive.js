{
  const data = {
    message: "",
    longMessage: "",
  };

  const handler = {
    set(target, key, value) {
      target[key] = value;

      if (key === "message") {
        target.longMessage = value + " World!";
      }
    },
  };

  const proxy = new Proxy(data, handler);

  proxy.message = "Hello";
  console.log(proxy.longMessage);

  proxy.message = "Hi";
  console.log(proxy.longMessage);
}
