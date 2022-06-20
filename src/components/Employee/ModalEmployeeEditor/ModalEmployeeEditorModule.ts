import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

import { IEmployee } from "../../../components/Interfaces";

export interface IShowModalEmployeeEditorConfig {
    employee: IEmployee;
    onSave: (employee: IEmployee) => Promise<void>;
    onClose?: () => void;
}

@Module({ name: "ModalEmployeeEditorModule", namespaced: true })
export class ModalEmployeeEditorModule extends VuexModule<ModalEmployeeEditorModule> {
    private isVisible: boolean = false;
    private employee: IEmployee = null;
    private onSave: (employee: IEmployee) => Promise<void> = null;
    private onClose: () => void = null;

    @Mutation
    private commitIsVisible(value: boolean) {
        this.isVisible = value;
    }

    @Mutation
    private commitEmployee(value: IEmployee) {
        this.employee = value;
    }

    @Mutation
    private commitOnSave(value: (employee: IEmployee) => Promise<void>) {
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
    public setOnSave(value: (employee: IEmployee) => Promise<void>) {
        this.commitOnSave(value);
    }

    @Action
    public setOnClose(value: () => void) {
        this.commitOnClose(value);
    }

    @Action
    public show(config: IShowModalEmployeeEditorConfig): void {
        const { employee, onSave, onClose } = config;
        this.commitIsVisible(true);
        this.commitEmployee(employee);
        this.commitOnSave(onSave);
        this.commitOnClose(onClose);
    }

    @Action
    public hide(): void {
        this.context.dispatch("AppModule/setError", false, { root: true });
        this.commitIsVisible(false);
        this.commitEmployee(null);
        this.commitOnSave(null);
        this.commitOnClose(null);
    }

    public get getIsVisible(): boolean {
        return this.isVisible;
    }

    public get getEmployee(): IEmployee {
        return this.employee;
    }

    public get getOnSave(): (employee: IEmployee) => Promise<void> {
        return this.onSave;
    }

    public get getOnClose(): () => void {
        return this.onClose;
    }
}
