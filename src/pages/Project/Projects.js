import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import ProjectCard from "../../componets/Project/ProjectCard";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const projectsList = [
  {
    path: "/projects/seniordesign",
    name: "Senior Design",
    description:
      "Senior Design/ CapStone Project to assess student's understanding of material through an oral exam given by a Large Language Model.",
    // image: "url/to/project/one/image.jpg",
    tags: [
      "Large - Language - Model",
      "AI",
      "Next.js",
      "React",
      "Web Development",
    ],
  },
  {
    path: "/projects/portfolio",
    name: "Portfolio",
    description:
      "My personal portfolio website to showcase my projects and skills. Built with React and Material-UI.",
    // image: "url/to/project/one/image.jpg",
    tags: ["React", "AWS S3", "Material-UI", "Web Development"],
  },
];

const Projects = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        background: theme.palette.background.gradient.radial2,
        color: theme.palette.text.primary,
      }}
    >
      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projectsList.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <NavLink to={project.path} style={{ textDecoration: "none" }}>
                <ProjectCard project={project} />
              </NavLink>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
