import { Component, Vue } from "vue-property-decorator";

import { EmployeeOverview } from "./components/EmployeeOverview";
import "./app.scss";
import { Employee } from "./components/Interfaces";

@Component({
    template: require("./App.html"),
    components: { EmployeeOverview }
})
export class App extends Vue {
    public employees: Employee[] = [
        {
            fullName: "Иван Иванович Иванов",
            position: "Инженер",
            isManager: false,
            id: 1
        },
        {
            fullName: "Егор Егорович Егоров",
            position: "Директор",
            isManager: true,
            id: 2
        },
        {
            fullName: "Петр Петрович Петров",
            position: "Стажер",
            isManager: false,
            id: 3
        },
    ];
    public inputText: string = "";
    public onlyManagers: boolean = false;

    public get filteredEmployees(): Employee[] {
        if (this.onlyManagers) {
            return this.employees.filter(item => {
                return item.isManager && item.fullName.toLowerCase().indexOf(this.inputText.toLocaleLowerCase()) !== -1;
            });
        }
        return this.employees.filter(item => {
            return item.fullName.toLowerCase().indexOf(this.inputText.toLocaleLowerCase()) !== -1;
        });
    }

    public changeInputText(text: string): void {
        this.inputText = text;
        console.log(this.inputText);
    }
    public onCheckboxChange(bool: boolean): void {
        this.onlyManagers = bool;
    }
    public deleteEmployee(deleteId: number): void {
        this.employees = this.employees.filter(({id}) => id !== deleteId);
    }
}
