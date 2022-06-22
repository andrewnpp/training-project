import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";

import { EmployeeOverview } from "./components/Employee/EmployeeOverview/EmployeeOverview";
import { AppModule } from "./AppModule";
import { ModalEmployeeEditorContainer } from "./components/Employee/ModalEmployeeEditor/ModalEmployeeEditorContainer";
import { MessageDialogContainer } from "./components/Common/MessageDialog/MessageDialogContainer";

@Component({
    template: require("./App.html"),
    components: { EmployeeOverview, ModalEmployeeEditorContainer, MessageDialogContainer }
})
export class App extends Vue {
    private appModule: AppModule;

    created() {
        this.appModule = getModule(AppModule, this.$store);
        this.appModule.fetchEmployees();
    }
}
