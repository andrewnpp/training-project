import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { EmployeeFilter } from "./EmployeeFilter";
import { EmployeeList } from "./EmployeeList";
import "./employee-overview.scss";
import { Employee } from "./Interfaces";

@Component({
    template: require("./EmployeeOverview.html"),
    components: { EmployeeFilter, EmployeeList }
})
export class EmployeeOverview extends Vue {
    @Prop()
    public inputText: string;
    @Prop()
    public onChangeInputText: (text: string) => void;
    @Prop()
    public onlyManagers: boolean;
    @Prop()
    public onChangeCheckbox: (value: boolean) => void;
    @Prop()
    public employees: Employee[];
    @Prop()
    public onDeleteEmployee: void;
}
