import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { ModalWindow } from "../src/components/Common/ModalWindow";

export default {
    title: "Modal",
    decorators: [withKnobs]
};

export const modalWindow = () => ({
    props: {
        titleText: { default: text("Заглавие", "Модальное окно") },
        hideCloseButton: { default: boolean("Спрятать кнопку закрытия", false) }
    },
    components: { ModalWindow },
    template: `
    <div>
        <button @click="showModal=true">Show modal</button>
        <modal-window
            v-if="showModal"
            :titleText="titleText"
            :hideCloseButton="hideCloseButton"
            :onClose="onClose"
        >
            <h3>Content</h3>
        </modal-window>
    </div>`,
    data() {
        return {
            showModal: false
        };
    },
    methods: {
        onClose() {
            this.showModal = false;
        }
    }
});
