import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { ModalWindow } from "../Common/ModalWindow";
import { EmployeeForm } from "./EmployeeForm";
import "./modal-employee-editor.scss";
import { IEmployee } from "../Interfaces";

@Component({
    template: require("./ModalEmployeeEditor.html"),
    components: { ModalWindow, EmployeeForm }
})
export class ModalEmployeeEditor extends Vue {
    @Prop()
    public employee: IEmployee;
    @Prop()
    public onSaveAction: (editedEmployee: IEmployee) => void;
    @Prop()
    public onClose: () => void;

    public get title(): string {
        return this.employee ? "Редактирование" : "Добавление";
    }

    public onSaveForm(employee: IEmployee): void {
        this.onSaveAction(employee);
        this.onClose();
    }
}
