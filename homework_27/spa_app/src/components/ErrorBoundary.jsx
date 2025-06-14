import "./css/ErrorBoundary.css"; 
import { useNavigate, useRouteError } from "react-router";


export default function ErrorFallback() {
    const error = useRouteError();
    const navigate = useNavigate();

    const isNotFound = error?.message?.toLowerCase().includes("page not found");

    const handleClick = () => {
        if (isNotFound) {
            navigate("/");
        } else {
            window.location.reload();
        }
    };

  return (
    <div className="error-fallback" role="alert">
      <h2>🚨 Oops! Something went wrong.</h2>
      <pre>{error?.message || "Unknown error"}</pre>
      <button onClick={handleClick}>{isNotFound ? "Back to Main Page" : "Try Again"}</button>
    </div>
  );
}

