import Vuex from "vuex";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { getModule } from "vuex-module-decorators";

import { ModalWindow } from "../src/components/ModalWindow";
import { AppModule } from "../src/AppModule";

export default {
    title: "Employees",
    decorators: [withKnobs]
};

export const modalWindow = () => ({
    props: {
        titleText: { default: text("Заглавие", "Редактирование сотрудника") },
        hideTitleText: { default: boolean("Спрятать заглавие", false) },
        hideCloseButton: { default: boolean("Спрятать кнопку закрытия", false) }
    },
    components: { ModalWindow },
    template: `
    <ModalWindow
        :titleText="titleText"
        :hideTitleText="hideTitleText"
        :hideCloseButton="hideCloseButton"
    />`,
    store: new Vuex.Store({
        modules: { AppModule }
    }),
    created() {
        const module = getModule(AppModule, this.$store);
        module.setIsEditing(true);
    }
});
