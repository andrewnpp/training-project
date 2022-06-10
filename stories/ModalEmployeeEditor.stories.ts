import Vuex from "vuex";
import { withKnobs } from "@storybook/addon-knobs";
import { getModule } from "vuex-module-decorators";

import { ModalEmployeeEditor } from "../src/components/ModalEmployeeEditor";
import { AppModule } from "../src/AppModule";

export default {
    title: "Employees",
    decorators: [withKnobs]
};

export const modalEmployeeEditor = () => ({
    components: { ModalEmployeeEditor },
    template: "<ModalEmployeeEditor />",
    store: new Vuex.Store({
        modules: { AppModule }
    }),
    created() {
        const module = getModule(AppModule, this.$store);
        module.setIsEditing(true);
    }
});
