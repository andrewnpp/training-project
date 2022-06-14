import Vue from "vue";
import Component from "vue-class-component";

import { EmployeeFilter } from "./EmployeeFilter";
import { EmployeeList } from "./EmployeeList";
import "./employee-overview.scss";

@Component({
    template: require("./EmployeeOverview.html"),
    components: { EmployeeFilter, EmployeeList }
})
export class EmployeeOverview extends Vue {}
