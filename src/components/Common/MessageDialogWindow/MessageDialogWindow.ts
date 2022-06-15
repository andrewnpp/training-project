import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { ModalWindow } from "../ModalWindow/ModalWindow";
import { MessageDialogWindowContent } from "../MessageDialogWindowContent/MessageDialogWindowContent";
import "./message-dialog-window.scss";
import { IEmployee, IMessageDialogWindowButtons } from "src/components/Interfaces";

@Component({
    template: require("./MessageDialogWindow.html"),
    components: { ModalWindow, MessageDialogWindowContent }
})
export class MessageDialogWindow extends Vue {
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
}
