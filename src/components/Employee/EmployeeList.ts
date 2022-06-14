import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";

import { EmployeeListItem } from "./EmployeeListItem";
import "./employee-list.scss";
import { IEmployee } from "../Interfaces";
import { AppModule } from "../../AppModule";

@Component({
    template: require("./EmployeeList.html"),
    components: { EmployeeListItem }
})
export class EmployeeList extends Vue {
    private appModule: AppModule;

    public get employees(): IEmployee[] {
        return this.appModule.getFilteredEmployees;
    }

    created() {
        this.appModule = getModule(AppModule, this.$store);
    }
}
