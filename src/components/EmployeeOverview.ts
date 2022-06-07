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
    // @Prop()
    // private employees: string;
    @Prop()
    private employees: Employee[];
    @Prop()
    private deleteEmployee: void;
}
