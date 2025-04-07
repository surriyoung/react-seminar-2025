function BasicExpressions() {
  const name = "John";
  const age = 25;
  const isAdmin = true;
  return (
    <div>
      <p>Name : {name}</p>
      <p>Age next year : {age + 1}</p>
      <p>{name + "'s Profile"}</p>
      <p>{`${name} is ${age} years old`}</p>
      <p>Admin status: {String(isAdmin)}</p>
    </div>
  );
}

// 객체와 배열의 사용
function ObjectArrayExpressions() {
  const user = {
    name: "Jane",
    email: "jane@example.com",
  };
  const colors = ["red", "blue", "green"];

  return (
    <div>
      <p>
        User: {user.name} ({user.email})
      </p>
      <p>First color: {colors[0]}</p>
      <p>Color Count: {colors.length}</p>
    </div>
  );
}

export { BasicExpressions, ObjectArrayExpressions };
