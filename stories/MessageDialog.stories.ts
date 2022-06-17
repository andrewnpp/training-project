import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import { MessageDialog } from "../src/components/Common/MessageDialog/MessageDialog";

export default {
    title: "Dialog",
    decorators: [withKnobs]
};

export const messageDialog = () => ({
    props: {
        titleText: {
            default: text("Заглавие", "Заглавие")
        },
        messageText: {
            default: text("Сообщение", "Сообщение")
        },
        confirmTitle: {
            default: text("Текст подтверждения", "")
        }
    },
    components: { MessageDialog },
    template: `
    <div>
        <button @click="showModal=true; dialogType='ok'">Show modal Ok</button>
        <button @click="showModal=true; dialogType='yesNo'">Show modal YesNo</button>
        <button @click="showModal=true; dialogType='yesNoCancel'">Show modal YesNoCancel</button>
        <MessageDialog
            v-if="showModal"
            :titleText="titleText"
            :messageText="messageText"
            :dialogType="dialogType"
            :confirmTitle="confirmTitle"
            :onConfirm="onConfirm"
            :onDeny="onDeny"
            :onCancel="onCancel"
        />
    </div>`,
    data() {
        return {
            showModal: false,
            dialogType: ""
        };
    },
    methods: {
        onConfirm() {
            action("onConfirm")();
            this.showModal = false;
        },
        onDeny() {
            action("onDeny")();
            this.showModal = false;
        },
        onCancel() {
            action("onCancel")();
            this.showModal = false;
        }
    }
});
