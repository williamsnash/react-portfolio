import { IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

//Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footerbutton = ({ icon, link }) => {
  return (
    <IconButton
      size="small"
      component={Link}
      to={link}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </IconButton>
  );
};

export default function Footer() {
  const theme = useTheme();
  return (
    <div
      style={{
        color: theme.palette.text.primary,
        padding: "0.5em",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Footerbutton
          icon={<EmailIcon fontSize="small" />}
          link="mailto:will@wsnash.com"
        />
        <Footerbutton
          icon={<GitHubIcon fontSize="small" />}
          link="https://github.com/williamsnash/"
        />
        <Footerbutton
          icon={<LinkedInIcon fontSize="small" />}
          link="https://www.linkedin.com/in/william-s-nash/"
        />
      </Stack>
    </div>
  );
}
