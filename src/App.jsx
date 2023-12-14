import UsePost from "./components/UsePost.jsx";

function App() {
  const data = UsePost();

  return (
    <div>
      {data && (
        <ul>
          {data.map((el, index) => (
            <li key={index}>
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
