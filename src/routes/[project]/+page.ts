import { type Load, error } from "@sveltejs/kit";

import projects from "../../constants/projects";

export const load: Load<{ project: string }> = function ({ params }) {
  const project = projects.find((it) => it.name == params.project);

  if (!project) throw error(404, "project not found");

  return { project };
};
