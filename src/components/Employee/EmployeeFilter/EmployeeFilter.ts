import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";

import { AppModule } from "../../../AppModule";
import { ModalEmployeeEditorModule } from "../ModalEmployeeEditor/ModalEmployeeEditorModule";
import { IEmployee } from "../../Interfaces";
import { ModalEmployeeEditor } from "../ModalEmployeeEditor/ModalEmployeeEditor";

@Component({
    template: require("./EmployeeFilter.html"),
    components: { ModalEmployeeEditor }
})
export class EmployeeFilter extends Vue {
    private appModule: AppModule;
    private modalEmployeeEditorModule: ModalEmployeeEditorModule;

    public get inputText(): string {
        return this.appModule.getInputText;
    }

    public get onlyManagers(): boolean {
        return this.appModule.getOnlyManagers;
    }

    public onChangeInputTextHandler(event: Event): void {
        this.appModule.setInputText((<HTMLInputElement>event.target).value);
    }

    public onClearFilterInput(): void {
        this.appModule.setInputText("");
    }

    public onChangeCheckboxHandler(event: Event): void {
        this.appModule.setOnlyManagers((<HTMLInputElement>event.target).checked);
    }

    public onClickAddButton(): void {
        this.modalEmployeeEditorModule.show({ employee: null, onSave: this.appModule.addServiceEmployee });
    }

    public onAddEmployee(employee: IEmployee): void {
        this.appModule.addServiceEmployee(employee);
    }

    created() {
        this.appModule = getModule(AppModule, this.$store);
        this.modalEmployeeEditorModule = getModule(ModalEmployeeEditorModule, this.$store);
    }
}
