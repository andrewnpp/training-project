import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";

import "./employee-form.scss";
import { IEmployee } from "./Interfaces";
import { AppModule } from "../AppModule";

@Component({
    template: require("./EmployeeForm.html")
})
export class EmployeeForm extends Vue {
    private appModule: AppModule;

    public get editorFullName(): string {
        return this.appModule.getEditorFullName;
    }

    public get editorPosition(): string {
        return this.appModule.getEditorPosition;
    }

    public get editorIsManager(): boolean {
        return this.appModule.getEditorIsManager;
    }

    public get saveButtonDisabled(): boolean {
        return this.appModule.getSaveButtonDisabled;
    }

    public onChangeEditorFullNameHandler(event: Event): void {
        this.appModule.setEditorFullName((<HTMLInputElement>event.target).value);
    }

    public onChangeEditorPositionHandler(event: Event): void {
        this.appModule.setEditorPosition((<HTMLInputElement>event.target).value);
    }

    public onChangeEditorIsManagerHandler(event: Event): void {
        this.appModule.setEditorIsManager((<HTMLInputElement>event.target).checked);
    }

    public onCancellEditing(): void {
        this.appModule.setIsEditing(false);
        this.appModule.setEditorFullName("");
        this.appModule.setEditorPosition("");
        this.appModule.setEditorIsManager(false);
        this.appModule.setEmployeeBeingEdited(null);
    }

    public onSaveEditing(): void {
        const employeeBeingEdited = this.appModule.getEmployeeBeingEdited;
        const employee: IEmployee = {
            fullName: this.appModule.getEditorFullName,
            position: this.appModule.getEditorPosition,
            isManager: this.appModule.getEditorIsManager,
            id: employeeBeingEdited ? employeeBeingEdited.id : Date.now()
        };
        if (employeeBeingEdited) {
            this.appModule.updateEmployee(employee);
        } else {
            this.appModule.addEmployee(employee);
        }
        this.onCancellEditing();
    }

    created() {
        this.appModule = getModule(AppModule, this.$store);
    }
}
