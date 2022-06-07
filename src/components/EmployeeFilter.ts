import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import "./employee-filter.scss";

@Component({
    template: require("./EmployeeFilter.html")
})
export class EmployeeFilter extends Vue {
    public inputText: string = "";

    public managersChecked: boolean = false;

    public clearFilterInput(): void {
        this.inputText = "";
    }

    public onCheckboxChange(): void {
        
    }
 }
