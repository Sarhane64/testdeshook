import UseGet from "./components/UseGet.jsx";

function App() {
  const { data } = UseGet();
  console.log(data);

  return (
    <div>
      {data && (
        <ul>
          {data.map((el) => (
            <li key={el.id}>
              <div>
                <strong>Username:</strong> {el.username}
              </div>
              <div>
                <strong>Email:</strong> {el.email}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
