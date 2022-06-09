import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

import { IEmployee } from "./components/Interfaces";

@Module({ name: "AppModule", namespaced: true })
export class AppModule extends VuexModule<AppModule> {
    public employees: IEmployee[] = [];
    public inputText: string = "";
    public onlyManagers: boolean = false;

    @Mutation
    private commitEmployees(value: IEmployee[]): void {
        this.employees = value;
    }

    @Mutation
    private commitInputText(value: string): void {
        this.inputText = value;
    }

    @Mutation
    private commitOnlyManagers(value: boolean): void {
        this.onlyManagers = value;
    }

    @Mutation
    private commitRemoveEmployee(deleteId: number): void {
        this.employees = this.employees.filter(({ id }) => id !== deleteId);
    }

    @Action
    public setEmployees(value: IEmployee[]): void {
        this.commitEmployees(value);
    }

    @Action
    public setInputText(value: string): void {
        this.commitInputText(value);
    }

    @Action
    public setOnlyManagers(value: boolean): void {
        this.commitOnlyManagers(value);
    }

    @Action
    public removeEmployee(deleteId: number): void {
        this.commitRemoveEmployee(deleteId);
    }

    public get getEmployees(): IEmployee[] {
        return this.employees;
    }

    public get getInputText(): string {
        return this.inputText;
    }

    public get getOnlyManagers(): boolean {
        return this.onlyManagers;
    }

    public get getFilteredEmployees(): IEmployee[] {
        return this.employees.filter(item => {
            return (
                (!this.onlyManagers || item.isManager) &&
                (!this.inputText || item.fullName.toLowerCase().includes(this.inputText.toLowerCase()))
            );
        });
    }
}
