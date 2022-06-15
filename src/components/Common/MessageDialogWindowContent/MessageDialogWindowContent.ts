import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import "./message-dialog-window-content.scss";
import { IEmployee, IMessageDialogWindowButtons } from "src/components/Interfaces";

@Component({
    template: require("./MessageDialogWindowContent.html")
})
export class MessageDialogWindowContent extends Vue {
    @Prop()
    public employee: IEmployee;
    @Prop()
    public messageText: string;
    @Prop()
    public buttonType: IMessageDialogWindowButtons;
    @Prop()
    public onSave: (employee: IEmployee) => void;
    @Prop()
    public onClose: () => void;

    public onConfirm(employee: IEmployee): void {
        this.onSave(employee);
        this.onClose();
    }
}
