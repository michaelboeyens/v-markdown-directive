import { test } from "vitest";
import { basicTest } from "./testUtils";

const template = `<div v-markdown="markdown"></div>`;
const markdown = `# Hello World`;
const expected = `<h1>Hello World</h1>`;

test("render markdown", () => basicTest(template, markdown, expected));
