import Vue from "vue";
import Component from "vue-class-component";

import { EmployeeOverview } from "./components/EmployeeOverview";
import "./app.scss";
import { Employee } from "./components/Interfaces";
import { moduledEmployees } from "./components/Employees";
import { Provide, ProvideReactive } from "vue-property-decorator";

@Component({
    template: require("./App.html"),
    components: { EmployeeOverview }
})
export class App extends Vue {
    public employees: Employee[] = [];
    @ProvideReactive()
    public inputText: string = "";
    @ProvideReactive()
    public onlyManagers: boolean = false;

    @ProvideReactive("employees")
    public get filteredEmployees(): Employee[] {
        return this.employees.filter(item => {
            return (
                (!this.onlyManagers || item.isManager) &&
                (!this.inputText || item.fullName.toLowerCase().includes(this.inputText.toLowerCase()))
            );
        });
    }

    @Provide()
    public onChangeInputText(text: string): void {
        this.inputText = text;
    }

    @Provide()
    public onChangeCheckbox(value: boolean): void {
        this.onlyManagers = value;
    }

    @Provide()
    public onDeleteEmployee(deleteId: number): void {
        this.employees = this.employees.filter(({ id }) => id !== deleteId);
    }

    created() {
        this.employees = moduledEmployees;
    }
}
