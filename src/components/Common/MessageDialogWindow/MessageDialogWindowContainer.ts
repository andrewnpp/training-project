import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";

import { MessageDialogWindow } from "./MessageDialogWindow";
import { MessageDialogWindowModule } from "./MessageDialogWindowModule";
import { IEmployee, IMessageDialogWindowButtons } from "src/components/Interfaces";

@Component({
    template: `
    <MessageDialogWindow
        v-if="isVisible"
        :employee="employee"
        :messageText="messageText"
        :buttonType="buttonType"
        :onSave="onSave"
        :onClose="onClose"
    />`,
    components: { MessageDialogWindow }
})
export class MessageDialogWindowContainer extends Vue {
    private messageDialogWindowModule: MessageDialogWindowModule;

    public get isVisible(): boolean {
        return this.messageDialogWindowModule.getIsVisible;
    }

    public get employee(): IEmployee {
        return this.messageDialogWindowModule.getEmployee;
    }

    public get messageText(): string {
        return this.messageDialogWindowModule.getMessageText;
    }

    public get buttonType(): IMessageDialogWindowButtons {
        return this.messageDialogWindowModule.getButtonType;
    }

    public onSave(employee: IEmployee): void {
        this.messageDialogWindowModule.getOnSave?.(employee);
    }

    public onClose(): void {
        this.messageDialogWindowModule.getOnClose?.();
        this.messageDialogWindowModule.hide();
    }

    created() {
        this.messageDialogWindowModule = getModule(MessageDialogWindowModule, this.$store);
    }
}
