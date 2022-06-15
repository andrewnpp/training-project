import { action } from "@storybook/addon-actions";
import { withKnobs, object, text } from "@storybook/addon-knobs";

import { MessageDialogWindowContent } from "../src/components/Common/MessageDialogWindowContent/MessageDialogWindowContent";
import { IEmployee } from "src/components/Interfaces";

export default {
    title: "Dialog",
    decorators: [withKnobs]
};

export const messageDialogWindowContent = () => ({
    props: {
        employee: {
            default: object("employee", { id: Date.now(), fullName: "Фамилия Имя Отчество", position: "Должность", isManager: true })
        },
        messageText: {
            default: text("Сообщение", "Удалить сотрудника?")
        },
        buttonType: {
            default: text("Тип кнопок", "yesNoCancel")
        }
    },
    components: { MessageDialogWindowContent },
    template: `
    <MessageDialogWindowContent
        :employee="employee"
        :messageText="messageText"
        :buttonType="buttonType"
        :onSave="onSave"
        :onClose="onClose"
    />`,
    methods: {
        onSave(employee: IEmployee) {
            action("onSave")(employee);
        },
        onClose() {
            action("onClose")();
        }
    }
});
