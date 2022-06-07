import { Component, Vue } from "vue-property-decorator";

import { EmployeeOverview } from "./components/EmployeeOverview";
import "./app.scss";
import { Employee } from "./components/Interfaces";

@Component({
    template: `<div id="app">
        <EmployeeOverview
            :employees="employees"
            :deleteEmployee="deleteEmployee"
        />
    </div>`,
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

    public deleteEmployee(deleteId: number): void {
        this.employees = this.employees.filter(({id}) => id !== deleteId);
    }
}
