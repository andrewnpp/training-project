import Vue from "vue";
import Vuex from "vuex";

import { AppModule } from "../AppModule";
import { ModalEmployeeEditorModule } from "../components/Employee/ModalEmployeeEditor/ModalEmployeeEditorModule";
import { MessageDialogModule } from "../components/Common/MessageDialog/MessageDialogModule";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: { AppModule, ModalEmployeeEditorModule, MessageDialogModule }
});
