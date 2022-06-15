import Vue from "vue";
import Vuex from "vuex";

import { AppModule } from "../AppModule";
import { ModalEmployeeEditorModule } from "../components/Employee/ModalEmployeeEditor/ModalEmployeeEditorModule";
import { MessageDialogWindowModule } from "../components/Common/MessageDialogWindow/MessageDialogWindowModule";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: { AppModule, ModalEmployeeEditorModule, MessageDialogWindowModule }
});
