import Vue from "vue";
import Component from "vue-class-component";
import { Inject, Prop } from "vue-property-decorator";

import "./employee-list-item.scss";
import { Employee } from "./Interfaces";

@Component({
    template: require("./EmployeeListItem.html")
})
export class EmployeeListItem extends Vue {
    @Prop()
    public employee: Employee;
    @Inject()
    public onDeleteEmployee: void;
}
