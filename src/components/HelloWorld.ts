import { Component, Prop, Vue } from "vue-property-decorator";

import "./hello-world.scss";

@Component({
    template: require("./HelloWorld.html")
})
export class HelloWorld extends Vue {
    @Prop()
    private msg!: string;
}
