import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import { Prop } from "vue-property-decorator";

import "./modal-window.scss";
import { AppModule } from "../AppModule";

@Component({
    template: require("./ModalWindow.html")
})
export class ModalWindow extends Vue {
    @Prop({ default: "Редактирование сотрудника" })
    public titleText: string;
    @Prop({ default: false })
    public hideTitleText: boolean;
    @Prop({ default: false })
    public hideCloseButton: boolean;

    private appModule: AppModule;

    public get isEditing(): boolean {
        return this.appModule.getIsEditing;
    }

    public onCancellEditing(): void {
        this.appModule.setIsEditing(false);
        this.appModule.setEditorFullName("");
        this.appModule.setEditorPosition("");
        this.appModule.setEditorIsManager(false);
        this.appModule.setEmployeeBeingEdited(null);
    }

    created() {
        this.appModule = getModule(AppModule, this.$store);
    }
}
