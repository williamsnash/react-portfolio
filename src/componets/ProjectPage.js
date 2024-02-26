import { Grid, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

/**
 * @param {string} title - The title of the project
 * @param {string} about - A description of the project
 * @param {string} role - The role the user played in the project
 * @param {string[]} skills - An array of skills used in the project
 */
export default function Project({ title, about, role, skills }) {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      // justifyContent="center"
    >
      <Grid
        item
        xs={6}
        sx={{ width: "50%", color: theme.palette.text.primary }}
      >
        <h1>{title}</h1>
        <h2>About</h2>
        <p style={{ width: "100%", wordWrap: "break-word" }}>{about}</p>
        <h2>My Role</h2>
        <p style={{ width: "100%", wordWrap: "break-word" }}>{role}</p>
        <Divider />
        <h2>Skills Learned & Used</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}
