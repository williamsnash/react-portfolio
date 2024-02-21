import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";


export default function About() {
  const theme = useTheme();
  // https://mycolor.space/gradient3?ori=to+left+top&hex=%23B32375&hex2=%231E3B71&hex3=%230D7E77&submit=submit
  const gradients = {
    1: 'linear-gradient(to top, #D60270, #9B4F96, #0038A8)',
    2: 'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
    3: 'linear-gradient(to left top, #b32375, #9a2d7f, #7f3583, #633a83, #463c7e, #334381, #1d4981, #004e7e, #005c83, #006883, #00747e, #0d7e77)',
    4: 'linear-gradient(to right bottom, #b32375, #9a2d7f, #7f3583, #633a83, #463c7e, #334381, #1d4981, #004e7e, #005c83, #006883, #00747e, #0d7e77)'
  }

  return (
    <Box sx={{ height: '100%', background: theme.palette.background.gradient }}>
      Test
    </Box>
  )
}