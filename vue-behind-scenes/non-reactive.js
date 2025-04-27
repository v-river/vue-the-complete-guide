const data = {
  message: "",
  longMessage: "",
};

data.message = "Hello";
data.longMessage = data.message + " World!";
console.log(data.longMessage);

data.message = "Hi";
console.log(data.longMessage);
