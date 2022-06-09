import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";

import { EmployeeEditor } from "./components/EmployeeEditor";
import { EmployeeOverview } from "./components/EmployeeOverview";
import "./app.scss";
import { moduledEmployees } from "./components/Employees";
import { AppModule } from "./AppModule";

@Component({
    template: require("./App.html"),
    components: { EmployeeOverview, EmployeeEditor }
})
export class App extends Vue {
    private appModule: AppModule;

    created() {
        this.appModule = getModule(AppModule, this.$store);
        this.appModule.setEmployees(moduledEmployees);
    }
}
