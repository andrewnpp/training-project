import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";

import { MessageDialog } from "./MessageDialog";
import { MessageDialogModule } from "./MessageDialogModule";
import { IMessageDialogType } from "src/components/Interfaces";
import { AppModule } from "../../../AppModule";

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
    private appModule: AppModule;

    public get isVisible(): boolean {
        return this.messageDialogModule.getIsVisible;
    }

    public get titleText(): string {
        if (this.error) {
            return "Error";
        }
        return this.messageDialogModule.getTitleText;
    }

    public get messageText(): string {
        if (this.error) {
            return "Произошла ошибка удаления";
        }
        return this.messageDialogModule.getMessageText;
    }

    public get dialogType(): IMessageDialogType {
        if (this.error) {
            return "ok";
        }
        return this.messageDialogModule.getDialogType;
    }

    public get confirmTitle(): string {
        if (this.error) {
            return "Ок";
        }
        return this.messageDialogModule.getConfirmTitle;
    }

    public get error(): boolean {
        return this.appModule.getError;
    }

    public onConfirm(): void {
        if (this.error) {
            this.messageDialogModule.hide();
            this.appModule.setError(false);
        } else {
            this.messageDialogModule
                .getOnConfirm?.()
                .then(() => this.messageDialogModule.hide())
                .catch(err => console.log(err));
        }
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
        this.appModule = getModule(AppModule, this.$store);
    }
}
