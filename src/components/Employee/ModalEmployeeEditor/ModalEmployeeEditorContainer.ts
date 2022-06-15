import { IEmployee } from "src/components/Interfaces";
import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";

import { ModalEmployeeEditor } from "./ModalEmployeeEditor";
import { ModalEmployeeEditorModule } from "./ModalEmployeeEditorModule";

@Component({
    template: `
    <ModalEmployeeEditor
        v-if="isVisible"
        :employee="employee"
        :onSave="onSave"
        :onClose="onClose"
    />`,
    components: { ModalEmployeeEditor }
})
export class ModalEmployeeEditorContainer extends Vue {
    private modalEmployeeEditorModule: ModalEmployeeEditorModule;

    public get isVisible(): boolean {
        return this.modalEmployeeEditorModule.getIsVisible;
    }

    public get employee(): IEmployee {
        return this.modalEmployeeEditorModule.getEmployee;
    }

    public onSave(employee: IEmployee): void {
        this.modalEmployeeEditorModule.getOnSave?.(employee);
    }

    public onClose(): void {
        this.modalEmployeeEditorModule.getOnClose?.();
        this.modalEmployeeEditorModule.hide();
    }

    created() {
        this.modalEmployeeEditorModule = getModule(ModalEmployeeEditorModule, this.$store);
    }
}
