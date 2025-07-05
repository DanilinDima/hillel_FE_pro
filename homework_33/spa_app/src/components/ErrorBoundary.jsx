import { Box, Button, Paper, Typography } from "@mui/material";
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
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
                padding: 2,
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    padding: 4,
                    maxWidth: 400,
                    width: "100%",
                    textAlign: "center",
                    borderRadius: 2,
                }}
            >
                <Typography variant="h4" component="h2" gutterBottom>
                    🚨 Oops! Something went wrong.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    {error?.message || "Unknown error"}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    fullWidth
                >
                    {isNotFound ? "Back to Main Page" : "Try Again"}
                </Button>
            </Paper>
        </Box>
    );
}
