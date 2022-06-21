import Vue from "vue";
import Component from "vue-class-component";

import { EmployeeFilter } from "../EmployeeFilter/EmployeeFilter";
import { EmployeeList } from "../EmployeeList/EmployeeList";

@Component({
    template: require("./EmployeeOverview.html"),
    components: { EmployeeFilter, EmployeeList }
})
export class EmployeeOverview extends Vue {}
