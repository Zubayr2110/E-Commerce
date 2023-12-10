import Header from "../../components/Header/Header";
import { useGlobalContext } from "../../context";
import "./SignIn.css";

export default function SignIn() {
  const { handleSubmit, name, setName } = useGlobalContext();
  return (
    <>
      <Header />
      <div>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button>Send</button>
        </form>
      </div>
    </>
  );
}

