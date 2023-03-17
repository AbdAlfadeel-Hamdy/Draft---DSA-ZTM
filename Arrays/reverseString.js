function reverse(str) {
  if (typeof str !== "string" || !str || str.length < 2)
    return "Invalid Input!";
  return [...str].reverse().join("");
}

console.log(reverse("hi"));
