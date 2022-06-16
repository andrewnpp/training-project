import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import "./message-dialog-content.scss";
import { IEmployee, IMessageDialogType } from "src/components/Interfaces";

@Component({
    template: require("./MessageDialogContent.html")
})
export class MessageDialogContent extends Vue {
    @Prop()
    public employee: IEmployee;
    @Prop()
    public messageText: string;
    @Prop()
    public dialogType: IMessageDialogType;
    @Prop()
    public onSave: (employee: IEmployee) => void;
    @Prop()
    public onClose: () => void;

    public onConfirm(employee: IEmployee): void {
        this.onSave(employee);
        this.onClose();
    }
}
