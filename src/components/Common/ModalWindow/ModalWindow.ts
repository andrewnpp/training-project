import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({
    template: require("./ModalWindow.html")
})
export class ModalWindow extends Vue {
    @Prop({ default: "Модальное окно" })
    public titleText: string;
    @Prop({ default: false })
    public hideCloseButton: boolean;
    @Prop()
    public onClose: () => void;

    public onClickClose(): void {
        this.onClose();
    }
}
