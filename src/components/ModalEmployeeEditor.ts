import Vue from "vue";
import Component from "vue-class-component";

import { ModalWindow } from "./ModalWindow";
import { EmployeeForm } from "./EmployeeForm";
import "./modal-employee-editor.scss";

@Component({
    template: require("./ModalEmployeeEditor.html"),
    components: { ModalWindow, EmployeeForm }
})
export class ModalEmployeeEditor extends Vue {}
