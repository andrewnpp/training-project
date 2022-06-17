import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

import { IMessageDialogType } from "src/components/Interfaces";

export interface IShowMessageDialogConfig {
    titleText: string;
    messageText: string;
    dialogType: IMessageDialogType;
    confirmTitle?: string;
    onConfirm?: () => void;
    onDeny?: () => void;
    onCancel?: () => void;
}

@Module({ name: "MessageDialogModule", namespaced: true })
export class MessageDialogModule extends VuexModule<MessageDialogModule> {
    private isVisible: boolean = false;
    private titleText: string = null;
    private messageText: string = null;
    private dialogType: IMessageDialogType = null;
    private confirmTitle: string = null;
    private onConfirm: () => void = null;
    private onDeny: () => void = null;
    private onCancel: () => void = null;

    @Mutation
    private commitIsVisible(value: boolean) {
        this.isVisible = value;
    }

    @Mutation
    private commitTitleText(value: string) {
        this.titleText = value;
    }

    @Mutation
    private commitMessageText(value: string) {
        this.messageText = value;
    }

    @Mutation
    private commitDialogType(value: IMessageDialogType): void {
        this.dialogType = value;
    }

    @Mutation
    private commitConfirmTitle(value: string) {
        this.confirmTitle = value;
    }

    @Mutation
    private commitOnConfirm(value: () => void) {
        this.onConfirm = value;
    }

    @Mutation
    private commitOnDeny(value: () => void) {
        this.onDeny = value;
    }

    @Mutation
    private commitOnCancel(value: () => void) {
        this.onCancel = value;
    }

    @Action
    public setIsVisible(value: boolean) {
        this.commitIsVisible(value);
    }

    @Action
    public setTitleText(value: string) {
        this.commitTitleText(value);
    }

    @Action
    public setMessageText(value: string) {
        this.commitMessageText(value);
    }

    @Action
    public setDialogType(value: IMessageDialogType): void {
        this.commitDialogType(value);
    }

    @Action
    public setConfirmTitle(value: string) {
        this.commitConfirmTitle(value);
    }

    @Action
    public setOnConfirm(value: () => void) {
        this.commitOnConfirm(value);
    }

    @Action
    public setOnDeny(value: () => void) {
        this.commitOnDeny(value);
    }

    @Action
    public setOnCancel(value: () => void) {
        this.commitOnCancel(value);
    }

    @Action
    public show(config: IShowMessageDialogConfig): void {
        const { titleText, messageText, dialogType, confirmTitle, onConfirm, onDeny, onCancel } = config;
        this.commitIsVisible(true);
        this.commitTitleText(titleText);
        this.commitMessageText(messageText);
        this.commitDialogType(dialogType);
        this.commitConfirmTitle(confirmTitle);
        this.commitOnConfirm(onConfirm);
        this.commitOnDeny(onDeny);
        this.commitOnCancel(onCancel);
    }

    @Action
    public hide(): void {
        this.commitIsVisible(false);
        this.commitTitleText(null);
        this.commitMessageText(null);
        this.commitDialogType(null);
        this.commitConfirmTitle(null);
        this.commitOnConfirm(null);
        this.commitOnDeny(null);
        this.commitOnCancel(null);
    }

    public get getIsVisible(): boolean {
        return this.isVisible;
    }

    public get getTitleText(): string {
        return this.titleText;
    }

    public get getMessageText(): string {
        return this.messageText;
    }

    public get getDialogType(): IMessageDialogType {
        return this.dialogType;
    }

    public get getConfirmTitle(): string {
        return this.confirmTitle;
    }

    public get getOnConfirm(): () => void {
        return this.onConfirm;
    }

    public get getOnDeny(): () => void {
        return this.onDeny;
    }

    public get getOnCancel(): () => void {
        return this.onCancel;
    }
}
