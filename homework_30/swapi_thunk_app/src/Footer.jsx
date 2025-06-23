import { useDispatch } from "react-redux";
import { clearData } from "./features/swapi/swapiSlice";

export default function Footer() {
  const dispatch = useDispatch();
  return (
    <footer style={{ marginTop: "20px", textAlign: "center" }}>
      <button onClick={() => dispatch(clearData())}>Clear</button>
    </footer>
  );
}
