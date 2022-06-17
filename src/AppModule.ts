import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

import { IEmployee } from "./components/Interfaces";
import { IEmployeeService, EmployeeServiceTest } from "./services";

@Module({ name: "AppModule", namespaced: true })
export class AppModule extends VuexModule<AppModule> {
    private employees: IEmployee[] = [];
    private inputText: string = "";
    private onlyManagers: boolean = false;
    private isEditing: boolean = false;
    private editorFullName: string = "";
    private editorPosition: string = "";
    private editorIsManager: boolean = false;
    private employeeBeingEdited: IEmployee = null;
    private employeeServiceTest: IEmployeeService = new EmployeeServiceTest();
    private loading: boolean = false;
    private error: boolean = false;

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

    @Mutation
    private commitLoading(value: boolean): void {
        this.loading = value;
    }

    @Mutation
    private commitError(value: boolean): void {
        this.error = value;
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
    public async removeServiceEmployee(deleteId: number): Promise<void> {
        this.commitError(false);
        this.commitLoading(true);
        try {
            await this.employeeServiceTest.removeEmployee(deleteId.toString());
            this.commitRemoveEmployee(deleteId);
            this.commitLoading(false);
        } catch (err) {
            this.context.dispatch(
                "MessageDialogModule/show",
                {
                    titleText: "Error",
                    messageText: "Произошла ошибка",
                    dialogType: "ok",
                    onConfirm: () => this.setError(false),
                    onCancel: () => this.setError(false)
                },
                { root: true }
            );
            this.commitLoading(false);
            this.commitError(true);
        }
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

    @Action
    public setError(value: boolean): void {
        this.commitError(value);
    }

    @Action
    public async fetchEmployees(): Promise<void> {
        this.commitLoading(true);
        const employees = await this.employeeServiceTest.getEmployees();
        this.commitEmployees(
            employees.map(employee => ({
                fullName: employee.name,
                position: employee.position,
                isManager: employee.isManager,
                id: +employee.code
            }))
        );
        this.commitLoading(false);
    }

    @Action
    public async addServiceEmployee(value: IEmployee): Promise<void> {
        this.context.dispatch("ModalEmployeeEditorModule/setPreviousEmployee", value, { root: true });
        this.commitError(false);
        this.commitLoading(true);
        try {
            await this.employeeServiceTest.addEmployee({
                name: value.fullName,
                position: value.position,
                isManager: value.isManager,
                code: value.id.toString()
            });
            this.commitAddEmployee(value);
            this.commitLoading(false);
        } catch (err) {
            this.commitLoading(false);
            this.commitError(true);
            this.context.dispatch(
                "ModalEmployeeEditorModule/show",
                { employee: this.context.rootGetters["ModalEmployeeEditorModule/getPreviousEmployee"], onSave: this.addServiceEmployee },
                { root: true }
            );
        }
    }

    @Action
    public async updateServiceEmployee(value: IEmployee): Promise<void> {
        this.context.dispatch("ModalEmployeeEditorModule/setPreviousEmployee", value, { root: true });
        this.commitError(false);
        this.commitLoading(true);
        try {
            await this.employeeServiceTest.updateEmployee({
                name: value.fullName,
                position: value.position,
                isManager: value.isManager,
                code: value.id.toString()
            });
            this.commitUpdateEmployee(value);
            this.commitLoading(false);
        } catch (err) {
            this.commitLoading(false);
            this.commitError(true);
            this.context.dispatch(
                "ModalEmployeeEditorModule/show",
                { employee: this.context.rootGetters["ModalEmployeeEditorModule/getPreviousEmployee"], onSave: this.updateServiceEmployee },
                { root: true }
            );
        }
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

    public get getLoading(): boolean {
        return this.loading;
    }

    public get getError(): boolean {
        return this.error;
    }
}
