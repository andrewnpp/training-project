import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import "./employee-list-item.scss";
import { IEmployee } from "./Interfaces";
import { AppModule } from "../AppModule";

@Component({
    template: require("./EmployeeListItem.html")
})
export class EmployeeListItem extends Vue {
    @Prop()
    public employee: IEmployee;

    private appModule: AppModule;

    public onRemoveEmployee(deleteId: number): void {
        this.appModule.removeEmployee(deleteId);
    }

    public onClickEditButton(employee: IEmployee): void {
        this.appModule.setIsEditing(true);
        this.appModule.setEmployeeBeingEdited(employee);
        this.appModule.setEditorFullName(employee.fullName);
        this.appModule.setEditorPosition(employee.position);
        this.appModule.setEditorIsManager(employee.isManager);
    }

    created() {
        this.appModule = getModule(AppModule, this.$store);
    }
}
