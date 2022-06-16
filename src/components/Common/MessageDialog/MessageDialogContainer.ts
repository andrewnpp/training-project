import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";

import { MessageDialog } from "./MessageDialog";
import { MessageDialogModule } from "./MessageDialogModule";
import { IMessageDialogType } from "src/components/Interfaces";

@Component({
    template: `
    <MessageDialog
        v-if="isVisible"
        :titleText="titleText"
        :messageText="messageText"
        :dialogType="dialogType"
        :confirmTitle="confirmTitle"
        :onConfirm="onConfirm"
        :onDeny="onDeny"
        :onCancel="onCancel"
    />`,
    components: { MessageDialog }
})
export class MessageDialogContainer extends Vue {
    private messageDialogModule: MessageDialogModule;

    public get isVisible(): boolean {
        return this.messageDialogModule.getIsVisible;
    }

    public get titleText(): string {
        return this.messageDialogModule.getTitleText;
    }

    public get messageText(): string {
        return this.messageDialogModule.getMessageText;
    }

    public get dialogType(): IMessageDialogType {
        return this.messageDialogModule.getDialogType;
    }

    public get confirmTitle(): string {
        return this.messageDialogModule.getConfirmTitle;
    }

    public onConfirm(): void {
        this.messageDialogModule.getOnConfirm?.();
        this.messageDialogModule.hide();
    }

    public onDeny(): void {
        this.messageDialogModule.getOnDeny?.();
        this.messageDialogModule.hide();
    }

    public onCancel(): void {
        this.messageDialogModule.getOnCancel?.();
        this.messageDialogModule.hide();
    }

    created() {
        this.messageDialogModule = getModule(MessageDialogModule, this.$store);
    }
}
