import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

import { IEmployee, IMessageDialogWindowButtons } from "src/components/Interfaces";

export interface IShowMessageDialogWindowConfig {
    employee: IEmployee;
    messageText: string;
    buttonType: IMessageDialogWindowButtons;
    onSave: (employee: IEmployee) => void;
    onClose?: () => void;
}

@Module({ name: "MessageDialogWindowModule", namespaced: true })
export class MessageDialogWindowModule extends VuexModule<MessageDialogWindowModule> {
    public isVisible: boolean = false;
    public employee: IEmployee = null;
    public messageText: string = null;
    public buttonType: IMessageDialogWindowButtons = null;
    public onSave: (employee: IEmployee) => void = null;
    public onClose: () => void = null;

    @Mutation
    private commitIsVisible(value: boolean) {
        this.isVisible = value;
    }

    @Mutation
    private commitEmployee(value: IEmployee) {
        this.employee = value;
    }

    @Mutation
    private commitMessageText(value: string) {
        this.messageText = value;
    }

    @Mutation
    private commitButtonType(value: IMessageDialogWindowButtons): void {
        this.buttonType = value;
    }

    @Mutation
    private commitOnSave(value: (employee: IEmployee) => void) {
        this.onSave = value;
    }

    @Mutation
    private commitOnClose(value: () => void) {
        this.onClose = value;
    }

    @Action
    public setIsVisible(value: boolean) {
        this.commitIsVisible(value);
    }

    @Action
    public setEmployee(value: IEmployee) {
        this.commitEmployee(value);
    }

    @Action
    public setMessageText(value: string) {
        this.commitMessageText(value);
    }

    @Action
    public setButtonType(value: IMessageDialogWindowButtons): void {
        this.commitButtonType(value);
    }

    @Action
    public setOnSave(value: (employee: IEmployee) => void) {
        this.commitOnSave(value);
    }

    @Action
    public setOnClose(value: () => void) {
        this.commitOnClose(value);
    }

    @Action
    public show(config: IShowMessageDialogWindowConfig): void {
        const { employee, messageText, buttonType, onSave, onClose } = config;
        this.setIsVisible(true);
        this.setEmployee(employee);
        this.setMessageText(messageText);
        this.setButtonType(buttonType);
        this.setOnSave(onSave);
        this.setOnClose(onClose);
    }

    @Action
    public hide(): void {
        this.setIsVisible(false);
        this.setEmployee(null);
        this.setMessageText(null);
        this.setButtonType(null);
        this.setOnSave(null);
        this.setOnClose(null);
    }

    public get getIsVisible(): boolean {
        return this.isVisible;
    }

    public get getEmployee(): IEmployee {
        return this.employee;
    }

    public get getMessageText(): string {
        return this.messageText;
    }

    public get getButtonType(): IMessageDialogWindowButtons {
        return this.buttonType;
    }

    public get getOnSave(): (employee: IEmployee) => void {
        return this.onSave;
    }

    public get getOnClose(): () => void {
        return this.onClose;
    }
}
