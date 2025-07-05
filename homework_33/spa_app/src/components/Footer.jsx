import { AppBar, Toolbar, Typography, Stack, Link } from "@mui/material";

export default function Footer() {
    return (
        <AppBar position="static" sx={{ marginTop: "auto" }}>
            <Toolbar sx={{ justifyContent: "center" }}>
                <Stack direction="row" spacing={3}>
                    <Typography variant="body1">
                        Phone:{" "}
                        <Link
                            href="tel:+1234567890"
                            underline="hover"
                            color="inherit"
                        >
                            +1 (234) 567-890
                        </Link>
                    </Typography>
                    <Typography variant="body1">
                        Email: {" "}
                        <Link
                            href="mailto:mymail@mail.com"
                            underline="hover"
                            color="inherit"
                        >
                            mymail@mail.com
                        </Link>
                    </Typography>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
