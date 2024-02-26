import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2, borderRadius: "20px" }}>
      {project.image && (
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt={`Image for ${project.name}`}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <div style={{ marginTop: "1em" }}>
          {project.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              style={{ marginRight: "0.5em", marginTop: "0.5em" }}
              variant="outlined"
              size="small"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
