import { withKnobs, text } from "@storybook/addon-knobs";

import { HelloWorld } from "../src/components/HelloWorld";

export default {
    title: "HelloWorld",
    decorators: [withKnobs]
};

export const helloWorld = () => ({
    props: { msg: { default: text("msg", "Сообщение для HelloWorld") } },
    components: { HelloWorld },
    template: `<div style="border: 3px solid red;">
        <HelloWorld :msg="msg" />
    </div>`
});
