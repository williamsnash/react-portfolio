import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function About() {
  const theme = useTheme();
  // https://mycolor.space/gradient3?ori=to+left+top&hex=%23B32375&hex2=%231E3B71&hex3=%230D7E77&submit=submit

  return (
    <Box
      sx={{
        height: "100%",
        background: theme.palette.background.gradient.radial2,
      }}
    >
      Test
    </Box>
  );
}
