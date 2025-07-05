import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchPerson } from "./swapiSlice";
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Stack,
    CircularProgress,
    Alert,
} from "@mui/material";
import { clearData } from "./swapiSlice";
const BASE_URL = "https://swapi.py4e.com/api/";

export default function SwapiView() {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector((state) => state.swapi);
    const [endpoint, setEndpoint] = useState("people/1");

    const handleFetch = () => {
        dispatch(fetchPerson(endpoint));
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                SWAPI Viewer
            </Typography>

            <Paper sx={{ p: 3, mb: 3 }} elevation={3}>
                <Stack
                    spacing={2}
                    direction={{ xs: "column", sm: "row" }}
                    alignItems="center"
                >
                    <TextField
                        label="Base URL"
                        value={BASE_URL}
                        fullWidth
                        disabled
                    />
                    <TextField
                        label="Endpoint"
                        value={endpoint}
                        onChange={(e) => setEndpoint(e.target.value)}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleFetch}
                    >
                        Get Info
                    </Button>
                </Stack>
            </Paper>

            {status === "loading" && (
                <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
                    <CircularProgress />
                </Box>
            )}

            {status === "failed" && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    Error: {error}
                </Alert>
            )}

            {data && (
                <Paper
                    sx={{
                        p: 2,
                        whiteSpace: "pre-wrap",
                        fontFamily: "monospace",
                    }}
                >
                    <Typography variant="subtitle1">Response:</Typography>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </Paper>
            )}
            <Box sx={{display: "flex", justifyContent: "center" }}>
                
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(clearData())}
                >
                    Clear
                </Button>
            </Box>
        </Box>
    );
}
