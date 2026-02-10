import { test } from "./main.js";

// Verify `main` validates repository access for each requested repository.
await test(() => {
  process.env.INPUT_OWNER = process.env.GITHUB_REPOSITORY_OWNER;
  const currentRepoName = process.env.GITHUB_REPOSITORY.split("/")[1];
  process.env.INPUT_REPOSITORIES = `${currentRepoName},toolkit`;
});
