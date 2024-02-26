import Project from "../../../componets/Project/ProjectPage";

export default function SeniorDesign() {
  return (
    <Project
      title="Senior Design"
      about="Our senior design project was to use a LLM (Large Language Model) like
            ChatGPT to assess student's understanding of material through an oral
            exam. An example would be if I was taking a class on the history of
            the United States, and I was asked to explain the Civil War, I would
            be able to explain it in my own words, and the LLM would be able to
            assess my understanding of the material based on my response. If I
            made a mistake the LLM would attempt to probe deeper or in a different
            direction to see if I truly understood the material."
      role="My role was in charge the full development of the web application.
            This meant creating the full front-end, and helping the other back-end
            developesr to integrate their research on canvas, our schools learning
            tool, so that we could use it to assess the students, and submit their
            assignmets."
      skills={[
        "React",
        "Next.js",
        "Web Development",
        "Large Language Model",
        "AI",
      ]}
    />
  );
}
