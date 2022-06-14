import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import { Component } from "vue";

import { EmployeeForm } from "../src/components/Employee/EmployeeForm";
import { IEmployee } from "src/components/Interfaces";

export default {
    title: "Employees/Employee Form",
    decorators: [withKnobs]
};

function getEmployeeStory(employee: IEmployee): Component {
    return {
        props: {
            employee: { default: object("employee", employee) }
        },
        components: { EmployeeForm },
        template: '<EmployeeForm :employee="employee" :onSave="onSave" :onCancel="onCancel" />',
        methods: {
            onSave(employee: IEmployee) {
                action("onSave")(employee);
            },
            onCancel() {
                action("onCancel")();
            }
        }
    };
}

export const emptyEmployee = () => getEmployeeStory(null);
export const defaultEmployee = () => getEmployeeStory({ id: Date.now(), fullName: "ФИО", position: "Должность", isManager: true });
