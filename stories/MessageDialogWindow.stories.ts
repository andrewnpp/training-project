import { action } from "@storybook/addon-actions";
import { withKnobs, object, text } from "@storybook/addon-knobs";

import { MessageDialogWindow } from "../src/components/Common/MessageDialogWindow/MessageDialogWindow";
import { IEmployee } from "src/components/Interfaces";

export default {
    title: "Dialog",
    decorators: [withKnobs]
};

export const messageDialogWindow = () => ({
    props: {
        employee: {
            default: object("employee", { id: Date.now(), fullName: "Фамилия Имя Отчество", position: "Должность", isManager: true })
        },
        messageText: {
            default: text("Сообщение", "Сообщение диалогового окна")
        },
        buttonType: {
            default: text("Тип кнопок", "yesNoCancel")
        }
    },
    components: { MessageDialogWindow },
    template: `
    <div>
        <button @click="showModal=true">Show modal</button>
        <MessageDialogWindow
            v-if="showModal"
            :employee="employee"
            :messageText="messageText"
            :buttonType="buttonType"
            :onSave="onSave"
            :onClose="onClose"
        />
    </div>`,
    data() {
        return {
            showModal: false
        };
    },
    methods: {
        onSave(employee: IEmployee) {
            action("onSave")(employee);
        },
        onClose() {
            action("onClose")();
            this.showModal = false;
        }
    }
});
