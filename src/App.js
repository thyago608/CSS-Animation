import "./styles.css";

export default function App() {
  return (
    <>
      <div id="modal" className="animar">
        <h1>Login</h1>
        <label>Nome</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <button>Logar</button>
      </div>
      <div id="load"></div>
    </>
  );
}
