import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import { ModalWindow } from "../../Common/ModalWindow/ModalWindow";
import { EmployeeForm } from "../EmployeeForm/EmployeeForm";
import { IEmployee } from "../../Interfaces";
import { AppModule } from "../../../AppModule";

@Component({
    template: require("./ModalEmployeeEditor.html"),
    components: { ModalWindow, EmployeeForm }
})
export class ModalEmployeeEditor extends Vue {
    private appModule: AppModule;

    @Prop()
    public employee: IEmployee;
    @Prop()
    public onSave: (editedEmployee: IEmployee) => void;
    @Prop()
    public onClose: () => void;

    public get title(): string {
        if (this.error) {
            return "Произошла ошибка";
        }
        return this.employee ? "Редактирование" : "Добавление";
    }

    public get error(): boolean {
        return this.appModule.getError;
    }

    public onSaveForm(employee: IEmployee): void {
        this.onSave(employee);
    }

    created() {
        this.appModule = getModule(AppModule, this.$store);
    }
}
