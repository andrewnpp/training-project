import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { IEmployee } from "../../Interfaces";

@Component({
    template: require("./EmployeeForm.html")
})
export class EmployeeForm extends Vue {
    @Prop()
    public employee: IEmployee;
    @Prop()
    public onSave: (editedEmployee: IEmployee) => void;
    @Prop()
    public onCancel: () => void;

    public fullName: string = "";
    public position: string = "";
    public isManager: boolean = false;

    public get saveButtonDisabled(): boolean {
        return !(this.fullName && this.position);
    }

    public onSaveEditing(): void {
        this.onSave({
            id: this.employee?.id || Date.now(),
            fullName: this.fullName,
            position: this.position,
            isManager: this.isManager
        });
    }

    public onCancelEditing(): void {
        this.onCancel();
    }

    created() {
        if (this.employee) {
            this.fullName = this.employee.fullName;
            this.position = this.employee.position;
            this.isManager = this.employee.isManager;
        }
    }
}
