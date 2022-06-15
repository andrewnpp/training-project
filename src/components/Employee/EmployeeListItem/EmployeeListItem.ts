import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import "./employee-list-item.scss";
import { IEmployee } from "../../Interfaces";
import { AppModule } from "../../../AppModule";
import { ModalEmployeeEditor } from "../ModalEmployeeEditor/ModalEmployeeEditor";
import { ModalEmployeeEditorModule } from "../ModalEmployeeEditor/ModalEmployeeEditorModule";
import { MessageDialogWindowModule } from "../../Common/MessageDialogWindow/MessageDialogWindowModule";

@Component({
    template: require("./EmployeeListItem.html"),
    components: { ModalEmployeeEditor }
})
export class EmployeeListItem extends Vue {
    @Prop()
    public employee: IEmployee;

    private appModule: AppModule;
    private modalEmployeeEditorModule: ModalEmployeeEditorModule;
    private messageDialogWindowModule: MessageDialogWindowModule;

    public onRemoveEmployee(employee: IEmployee): void {
        this.appModule.removeEmployee(employee);
    }

    public onClickEditButton(employee: IEmployee): void {
        this.modalEmployeeEditorModule.show({ employee, onSave: this.onSaveEmployee });
    }

    public onClickDeleteButton(employee: IEmployee): void {
        this.messageDialogWindowModule.show({
            employee,
            messageText: `Удалить сотрудника ${employee.fullName}?`,
            buttonType: "yesNoCancel",
            onSave: this.onRemoveEmployee
        });
    }

    public onSaveEmployee(employee: IEmployee): void {
        this.appModule.updateEmployee(employee);
    }

    created() {
        this.appModule = getModule(AppModule, this.$store);
        this.modalEmployeeEditorModule = getModule(ModalEmployeeEditorModule, this.$store);
        this.messageDialogWindowModule = getModule(MessageDialogWindowModule, this.$store);
    }
}
