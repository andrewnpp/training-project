import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

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

    public get loading(): boolean {
        return this.appModule.getLoading;
    }

    public onClickEditButton(employee: IEmployee): void {
        this.modalEmployeeEditorModule.show({ employee, onSave: this.appModule.updateServiceEmployee });
    }

    public onClickDeleteButton(): void {
        this.messageDialogModule.show({
            titleText: "Внимание",
            messageText: `Удалить сотрудника ${this.employee.fullName}?`,
            dialogType: "yesNo",
            onConfirm: () => this.appModule.removeServiceEmployee(this.employee.id)
        });
    }

    created() {
        this.appModule = getModule(AppModule, this.$store);
        this.modalEmployeeEditorModule = getModule(ModalEmployeeEditorModule, this.$store);
        this.messageDialogModule = getModule(MessageDialogModule, this.$store);
    }
}
