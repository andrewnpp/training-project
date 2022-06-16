import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

import { MessageDialog } from "../src/components/Common/MessageDialog/MessageDialog";
import { IMessageDialogType } from "src/components/Interfaces";

export default {
    title: "MessageDialog",
    decorators: [withKnobs]
};

function getMessageDialogStory(dialogType: IMessageDialogType): any {
    return {
        props: {
            titleText: {
                default: text("Заглавие", "Заглавие")
            },
            messageText: {
                default: text("Сообщение", "Сообщение")
            },
            dialogType: {
                default: text("Тип кнопок", dialogType)
            },
            confirmTitle: {
                default: text("Текст подтверждения", "")
            }
        },
        components: { MessageDialog },
        template: `
        <div>
            <button @click="showModal=true">Show modal</button>
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
                showModal: false
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
    };
}

export const ok = () => getMessageDialogStory("ok");
export const yesNo = () => getMessageDialogStory("yesNo");
export const yesNoCancel = () => getMessageDialogStory("yesNoCancel");
