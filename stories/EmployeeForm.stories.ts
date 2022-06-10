import Vuex from "vuex";
import { withKnobs, object } from "@storybook/addon-knobs";

import { EmployeeForm } from "../src/components/EmployeeForm";
import { AppModule } from "../src/AppModule";

export default {
    title: "Employees",
    decorators: [withKnobs]
};

export const employeeForm = () => ({
    components: { EmployeeForm },
    template: "<EmployeeForm />",
    store: new Vuex.Store({
        modules: { AppModule }
    })
});
