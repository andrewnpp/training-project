import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";

import { ModalEmployeeEditor } from "../src/components/Employee/ModalEmployeeEditor";
import { IEmployee } from "src/components/Interfaces";

export default {
    title: "Employees",
    decorators: [withKnobs]
};

export const modalEmployeeEditor = () => ({
    props: {
        employee: { default: object("employee", null) }
    },
    components: { ModalEmployeeEditor },
    template: `
    <div>
        <button @click="showModal=true">Show modal</button>
        <ModalEmployeeEditor
            v-if="showModal"
            :employee="employee"
            :onSaveAction="onSaveAction"
            :onClose="onClose"
        />
    </div>`,
    data() {
        return {
            showModal: false
        };
    },
    methods: {
        onSaveAction(employee: IEmployee) {
            action("onSaveAction")(employee);
        },
        onClose() {
            this.showModal = false;
        }
    }
});
