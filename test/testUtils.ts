import { mount } from "@vue/test-utils";
import { expect } from "vitest";
import markdownPlugin from "../src/v-markdown-directive";

export const markdownComponent = (template: string, markdown: string) => ({
  template,
  data() {
    return {
      markdown
    };
  }
});

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
