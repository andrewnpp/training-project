import Vue from "vue";
import Component from "vue-class-component";
import { Inject, InjectReactive } from "vue-property-decorator";

import "./employee-filter.scss";

@Component({
    template: require("./EmployeeFilter.html")
})
export class EmployeeFilter extends Vue {
    @InjectReactive()
    public inputText: string;
    @Inject()
    public onChangeInputText: (text: string) => void;
    @InjectReactive()
    public onlyManagers: boolean;
    @Inject()
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
