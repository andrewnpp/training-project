import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { ModalWindow } from "../ModalWindow/ModalWindow";
import { IMessageDialogType } from "src/components/Interfaces";

@Component({
    template: require("./MessageDialog.html"),
    components: { ModalWindow }
})
export class MessageDialog extends Vue {
    @Prop()
    public titleText: string;
    @Prop()
    public messageText: string;
    @Prop()
    public dialogType: IMessageDialogType;
    @Prop()
    public confirmTitle: string;
    @Prop()
    public onConfirm: () => void;
    @Prop()
    public onDeny: () => void;
    @Prop()
    public onCancel: () => void;

    public get confirmTitleText(): string {
        if (this.confirmTitle) {
            return this.confirmTitle;
        }
        if (this.dialogType === "ok") {
            return "Ок";
        }
        return "Да";
    }
}
