import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import "./employee-list-item.scss";
import { IEmployee } from "../Interfaces";
import { AppModule } from "../../AppModule";
import { ModalEmployeeEditor } from "./ModalEmployeeEditor";

@Component({
    template: require("./EmployeeListItem.html"),
    components: { ModalEmployeeEditor }
})
export class EmployeeListItem extends Vue {
    @Prop()
    public employee: IEmployee;

    private appModule: AppModule;

    public showEmployeeEditor: boolean = false;
    public editedEmployee: IEmployee = null;

    public onRemoveEmployee(deleteId: number): void {
        this.appModule.removeEmployee(deleteId);
    }

    public onClickEditButton(employee: IEmployee): void {
        this.editedEmployee = employee;
        this.showEmployeeEditor = true;
    }

    public onSaveEmployee(employee: IEmployee): void {
        this.appModule.updateEmployee(employee);
    }

    public onCloseEmployeeEditor(): void {
        this.showEmployeeEditor = false;
    }

    created() {
        this.appModule = getModule(AppModule, this.$store);
    }
}
