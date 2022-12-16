function likes(names) {
  // TODO
  if (names.lenght === 0) {
    return `no one likes this`;
  } else if (names.lenght === 1) {
    return `${names[0]} likes this`;
  } else if (names.lenght === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.lenght === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and 2 others like this`;
  }
}

console.log(likes([]));
