import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";

import "./employee-list-item.scss";
import { IEmployee } from "./Interfaces";
import { AppModule } from "../AppModule";

@Component({
    template: require("./EmployeeListItem.html")
})
export class EmployeeListItem extends Vue {
    @Prop()
    public employee: IEmployee;

    private appModule: AppModule;

    public onRemoveEmployee(deleteId: number): void {
        this.appModule.removeEmployee(deleteId);
    }

    created() {
        this.appModule = getModule(AppModule, this.$store);
    }
}
