import { Component, Vue } from "vue-property-decorator";

import { HelloWorld } from "./components/HelloWorld";
import "./app.scss";

@Component({
    template: `<div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>`,
    components: { HelloWorld }
})
export class App extends Vue {}
