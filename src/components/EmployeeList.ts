import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { EmployeeListItem } from "./EmployeeListItem";
import "./employee-list.scss";
import { Employee } from "./Interfaces";

@Component({
    template: require("./EmployeeList.html"),
    components: { EmployeeListItem }
})
export class EmployeeList extends Vue {
    // @Prop()
    // private employees: string[];
    @Prop()
    private employees: Employee[];
    @Prop()
    private deleteEmployee: void;
    
}
