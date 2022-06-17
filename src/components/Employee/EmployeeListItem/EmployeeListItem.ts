import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import "./employee-list-item.scss";
import { IEmployee } from "../../Interfaces";
import { AppModule } from "../../../AppModule";
import { ModalEmployeeEditor } from "../ModalEmployeeEditor/ModalEmployeeEditor";
import { ModalEmployeeEditorModule } from "../ModalEmployeeEditor/ModalEmployeeEditorModule";
import { MessageDialogModule } from "../../Common/MessageDialog/MessageDialogModule";

@Component({
    template: require("./EmployeeListItem.html"),
    components: { ModalEmployeeEditor }
})
export class EmployeeListItem extends Vue {
    @Prop()
    public employee: IEmployee;

    private appModule: AppModule;
    private modalEmployeeEditorModule: ModalEmployeeEditorModule;
    private messageDialogModule: MessageDialogModule;

    public onRemoveEmployee(): void {
        this.appModule.removeServiceEmployee(this.employee.id);
    }

    public onClickEditButton(employee: IEmployee): void {
        this.modalEmployeeEditorModule.show({ employee, onSave: this.onSaveEmployee });
    }

    public onClickDeleteButton(): void {
        this.messageDialogModule.show({
            titleText: "Внимание",
            messageText: `Удалить сотрудника ${this.employee.fullName}?`,
            dialogType: "yesNo",
            onConfirm: this.onRemoveEmployee
        });
    }

    public onSaveEmployee(employee: IEmployee): void {
        this.appModule.updateServiceEmployee(employee);
    }

    public get error(): boolean {
        return this.appModule.getError;
    }

    created() {
        this.appModule = getModule(AppModule, this.$store);
        this.modalEmployeeEditorModule = getModule(ModalEmployeeEditorModule, this.$store);
        this.messageDialogModule = getModule(MessageDialogModule, this.$store);
    }
}
