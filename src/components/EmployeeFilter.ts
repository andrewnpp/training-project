import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";

import "./employee-filter.scss";
import { AppModule } from "../AppModule";

@Component({
    template: require("./EmployeeFilter.html")
})
export class EmployeeFilter extends Vue {
    private appModule: AppModule;

    public get inputText(): string {
        return this.appModule.getInputText;
    }

    public get onlyManagers(): boolean {
        return this.appModule.getOnlyManagers;
    }

    public onChangeInputTextHandler(event: Event): void {
        this.appModule.setInputText((<HTMLInputElement>event.target).value);
    }

    public onClearFilterInput(): void {
        this.appModule.setInputText("");
    }

    public onChangeCheckboxHandler(event: Event): void {
        this.appModule.setOnlyManagers((<HTMLInputElement>event.target).checked);
    }

    created() {
        this.appModule = getModule(AppModule, this.$store);
    }
}
