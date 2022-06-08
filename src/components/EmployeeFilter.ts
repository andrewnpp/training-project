import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import "./employee-filter.scss";

@Component({
    template: require("./EmployeeFilter.html")
})
export class EmployeeFilter extends Vue {
    public inputTextModel: string = "";
    public managersChecked: boolean = false;

    public clearFilterInput(): void {
        this.inputTextModel = "";
        this.onInputTextChange("");
    }
    public onInputTextChange(text: string): void {
        this.$emit("input-text-change", text);
    }
    public onCheckboxChange(bool: boolean): void {
        this.$emit("checkbox-change", bool);
    }
}
