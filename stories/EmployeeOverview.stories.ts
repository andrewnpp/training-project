import Vuex from "vuex";
import { withKnobs } from "@storybook/addon-knobs";
import { getModule } from "vuex-module-decorators";

import { EmployeeOverview } from "../src/components/Employee/EmployeeOverview";
import { ModalEmployeeEditor } from "../src/components/Employee/ModalEmployeeEditor";
import { AppModule } from "../src/AppModule";
import { moduledEmployees } from "../src/components/Employees";

export default {
    title: "Employees",
    decorators: [withKnobs]
};

export const employeeOverview = () => ({
    components: { EmployeeOverview, ModalEmployeeEditor },
    template: `
    <div>
        <EmployeeOverview />
    </div>`,
    store: new Vuex.Store({
        modules: { AppModule }
    }),
    created() {
        const module = getModule(AppModule, this.$store);
        module.setEmployees(moduledEmployees);
        module.setIsEditing(false);
    }
});
