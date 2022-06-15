import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

import { IEmployee } from "./components/Interfaces";

@Module({ name: "AppModule", namespaced: true })
export class AppModule extends VuexModule<AppModule> {
    public employees: IEmployee[] = [];
    public inputText: string = "";
    public onlyManagers: boolean = false;
    public isEditing: boolean = false;
    public editorFullName: string = "";
    public editorPosition: string = "";
    public editorIsManager: boolean = false;
    public employeeBeingEdited: IEmployee = null;

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

    @Mutation
    private commitIsEditing(value: boolean): void {
        this.isEditing = value;
    }

    @Mutation
    private commitEditorFullName(value: string): void {
        this.editorFullName = value;
    }

    @Mutation
    private commitEditorPosition(value: string): void {
        this.editorPosition = value;
    }

    @Mutation
    private commitEditorIsManager(value: boolean): void {
        this.editorIsManager = value;
    }

    @Mutation
    private commitUpdateEmployee(value: IEmployee): void {
        const updateIndex: number = this.employees.findIndex(item => item.id === value.id);
        const copy = { ...value };
        if (updateIndex !== -1) {
            this.employees.splice(updateIndex, 1, copy);
        }
    }

    @Mutation
    private commitAddEmployee(value: IEmployee): void {
        this.employees.push(value);
    }

    @Mutation
    private commitEmployeeBeingEdited(value: IEmployee): void {
        this.employeeBeingEdited = value;
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
    public removeEmployee(employee: IEmployee): void {
        this.commitRemoveEmployee(employee.id);
    }

    @Action
    public setIsEditing(value: boolean): void {
        this.commitIsEditing(value);
    }

    @Action
    public setEditorFullName(value: string): void {
        this.commitEditorFullName(value);
    }

    @Action
    public setEditorPosition(value: string): void {
        this.commitEditorPosition(value);
    }

    @Action
    public setEditorIsManager(value: boolean): void {
        this.commitEditorIsManager(value);
    }

    @Action
    public setEmployeeBeingEdited(value: IEmployee): void {
        this.commitEmployeeBeingEdited(value);
    }

    @Action
    public updateEmployee(value: IEmployee): void {
        this.commitUpdateEmployee(value);
    }

    @Action
    public addEmployee(value: IEmployee): void {
        this.commitAddEmployee(value);
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

    public get getIsEditing(): boolean {
        return this.isEditing;
    }

    public get getEditorFullName(): string {
        return this.editorFullName;
    }

    public get getEditorPosition(): string {
        return this.editorPosition;
    }

    public get getEditorIsManager(): boolean {
        return this.editorIsManager;
    }

    public get getEmployeeBeingEdited(): IEmployee {
        return this.employeeBeingEdited;
    }

    public get getFilteredEmployees(): IEmployee[] {
        return this.employees.filter(item => {
            return (
                (!this.onlyManagers || item.isManager) &&
                (!this.inputText || item.fullName.toLowerCase().includes(this.inputText.toLowerCase()))
            );
        });
    }

    public get getSaveButtonDisabled(): boolean {
        return !(this.editorFullName && this.editorPosition);
    }
}
