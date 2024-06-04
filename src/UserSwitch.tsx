import { useLoginContext } from "./context/LoginContext";
 
export const UserSwitch = () => {
  const [user, setUser] = useLoginContext();
  console.log(user)
  return (
    <div>
      <button onClick={() => setUser(user === "Paul" ? "no one" : "Paul")}>
        Toggle User
      </button>
    </div>
  );
};