import { defineConfig } from "checkly";
import { Frequency } from "checkly/constructs";

export default defineConfig({
  projectName: "OTel Demo Synthetic Monitoring",
  logicalId: "otel-demo-synthetic",
  repoUrl: "https://github.com/modern-sapien/opentelemetry-demo",
  checks: {
    frequency: Frequency.EVERY_5M,
    locations: ["us-east-1"],
    runtimeId: "2025.04",
    tags: ["otel-demo"],
    checkMatch: "**/__checks__/**/*.check.ts",
    browserChecks: {
      testMatch: "**/__checks__/**/*.spec.ts",
    },
  },
  cli: {
    runLocation: "us-east-1",
    reporters: ["list"],
  },
});
