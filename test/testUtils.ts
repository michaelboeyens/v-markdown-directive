import { mount } from "@vue/test-utils";
import { expect } from "vitest";
import markdownPlugin from "../src/v-markdown-directive";

/**
 * Basic component for testing markdown
 * @param template html template with v-markdown directive
 * @param markdown markdown source
 */
export const markdownComponent = (template: string, markdown: string) => ({
  template,
  data() {
    return {
      markdown
    };
  }
});

/**
 * Basic test for markdown rendering
 * @param template html template with v-markdown directive
 * @param markdown markdown source
 * @param expected expected html
 */
export const basicTest = (template: string, markdown: string, expected: string) => {
  console.log("test: render markdown");
  const wrapper = mount(markdownComponent(template, markdown), {
    global: {
      plugins: [markdownPlugin]
    }
  });
  console.log("source markdown: \n", wrapper.vm.markdown);
  console.log("rendered markdown: \n", wrapper.html());
  expect(wrapper.html({ raw: true })).toContain(expected);
};
