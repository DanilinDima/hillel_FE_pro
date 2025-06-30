import { Box, Typography, Paper, Chip, Stack } from "@mui/material";

export default function Resume() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Resume: Manual QA Engineer
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">Work Experience</Typography>
        <Typography>
          Manual QA Engineer with over 3 years of experience in web and mobile
          application testing. Skilled in working within Agile teams,
          writing test cases and bug reports, and collaborating with developers
          and project managers.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">Skills</Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
          <Chip label="Test Design" />
          <Chip label="Bug Tracking (Jira, Redmine)" />
          <Chip label="Checklist and Test Case Writing" />
          <Chip label="Smoke, Regression, Ad-hoc Testing" />
        </Stack>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">Technical Knowledge</Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
          <Chip label="JavaScript (basic)" />
          <Chip label="React (basic)" />
          <Chip label="Python (basic)" />
          <Chip label="Selenium + Python" />
          <Chip label="Django (basic)" />
        </Stack>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6">Tools</Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
          <Chip label="Postman" />
          <Chip label="Fiddler" />
          <Chip label="Charles Proxy" />
          <Chip label="Browser DevTools" />
          <Chip label="TestRail / Google Sheets" />
        </Stack>
      </Paper>
    </Box>
  );
}
