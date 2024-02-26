import { useTheme } from "@mui/material/styles";
import ProjectPage from "../../../componets/Project/ProjectPage";

export default function Portfolio() {
  const theme = useTheme();
  return (
    <ProjectPage
      title="Portfolio"
      about={
        <p>
          My personal portfolio website to showcase my projects, skills learned in
          class and on the job, my resume,and my photos. It was built as a React SPA
          (Single Page Application), as it was built to be run on an AWS S3 bucket
          staticly. It was built with React and Material-UI. Material-UI was used to
          create a responsive and visually appealing website.{" "}
          <a
            href="https://github.com/williamsnash/react-portfolio"
            target="_blank"
            rel="noreferrer"
            sx={{ color: theme.palette.text.link }}
          >
            Link to the github repo
          </a>
        </p>
      }
      role="As the only developer working on my portfolio, I was in charge of the full development of the web application."
      skills={[
        "React",
        "AWS S3",
        "Material-UI",
        "Web Development",
        "Responsive Design",
      ]}
    />
  );
}
