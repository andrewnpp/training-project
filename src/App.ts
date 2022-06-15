import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";

import { EmployeeOverview } from "./components/Employee/EmployeeOverview/EmployeeOverview";
import "./app.scss";
import { moduledEmployees } from "./components/Employees";
import { AppModule } from "./AppModule";
import { ModalEmployeeEditorContainer } from "./components/Employee/ModalEmployeeEditor/ModalEmployeeEditorContainer";
import { MessageDialogWindowContainer } from "./components/Common/MessageDialogWindow/MessageDialogWindowContainer";

@Component({
    template: require("./App.html"),
    components: { EmployeeOverview, ModalEmployeeEditorContainer, MessageDialogWindowContainer }
})
export class App extends Vue {
    private appModule: AppModule;

    created() {
        this.appModule = getModule(AppModule, this.$store);
        this.appModule.setEmployees(moduledEmployees);
    }
}
