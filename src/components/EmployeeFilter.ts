import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import "./employee-filter.scss";

@Component({
    template: require("./EmployeeFilter.html")
})
export class EmployeeFilter extends Vue {
    @Prop()
    public inputText: string;
    @Prop()
    public onChangeInputText: (text: string) => void;
    @Prop()
    public onlyManagers: boolean;
    @Prop()
    public onChangeCheckbox: (value: boolean) => void;

    public textInputHandler(event: Event): void {
        this.onChangeInputText((<HTMLInputElement>event.target).value);
    }

    public clearFilterInput(): void {
        this.onChangeInputText("");
    }

    public checkboxChangeHandler(event: Event): void {
        this.onChangeCheckbox((<HTMLInputElement>event.target).checked);
    }
}
