// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue";
import type {Theme} from "vitepress";
import {Inkline} from "@inkline/inkline";
import {
    IButton,
    IHeader,
    IIcon,
    ILayout,
    ILayoutAside,
    ILayoutContent,
    ILayoutFooter,
    ILayoutHeader,
    IModal,
    IModalContainer,
} from "@inkline/inkline/components";
import "./style.scss";
import JcMockup from "./global-components/JcMockup.vue";
import JcGallery from "./global-components/JcGallery.vue";
import ComponentSafeMailTo from "./global-components/ComponentSafeMailTo.vue";

export default {
    Layout,
    enhanceApp({app}) {
        app.use(Inkline, {
            components: {
                IButton,
                IHeader,
                IIcon,
                ILayout,
                ILayoutAside,
                ILayoutContent,
                ILayoutFooter,
                ILayoutHeader,
                IModal,
                IModalContainer,
            },
            color: "",
            colorMode: "dark",
            colorModeStrategy: "localStorage",
        });
        app.component("JcMockup", JcMockup);
        app.component("JcGallery", JcGallery);
        app.component("ComponentSafeMailTo", ComponentSafeMailTo);
    },
} satisfies Theme;
