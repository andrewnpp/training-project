import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

import { IEmployee } from "../../../components/Interfaces";

export interface IShowModalEmployeeEditorConfig {
    employee: IEmployee;
    onSave: (employee: IEmployee) => void;
    onClose?: () => void;
}

@Module({ name: "ModalEmployeeEditorModule", namespaced: true })
export class ModalEmployeeEditorModule extends VuexModule<ModalEmployeeEditorModule> {
    public isVisible: boolean = false;
    public employee: IEmployee = null;
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
    public setOnSave(value: (employee: IEmployee) => void) {
        this.commitOnSave(value);
    }

    @Action
    public setOnClose(value: () => void) {
        this.commitOnClose(value);
    }

    @Action
    public show(config: IShowModalEmployeeEditorConfig): void {
        const { employee, onSave, onClose } = config;
        this.setIsVisible(true);
        this.setEmployee(employee);
        this.setOnSave(onSave);
        this.setOnClose(onClose);
    }

    @Action
    public hide(): void {
        this.setIsVisible(false);
        this.setEmployee(null);
        this.setOnSave(null);
        this.setOnClose(null);
    }

    public get getIsVisible(): boolean {
        return this.isVisible;
    }

    public get getEmployee(): IEmployee {
        return this.employee;
    }

    public get getOnSave(): (employee: IEmployee) => void {
        return this.onSave;
    }

    public get getOnClose(): () => void {
        return this.onClose;
    }
}
