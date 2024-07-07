// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue";
import type { Theme } from "vitepress";
import { Inkline } from "@inkline/inkline";
import "./style.scss";
import JcMockup from "./global-components/JcMockup.vue";
import JcGallery from "./global-components/JcGallery.vue";
import ComponentSafeMailTo from "./global-components/ComponentSafeMailTo.vue";
import {
  IButton,
  IForm,
  IFormLabel,
  IHeader,
  IIcon,
  ILayout,
  ILayoutAside,
  ILayoutContent,
  ILayoutFooter,
  ILayoutHeader,
  IModal,
  IModalContainer,
  IRadioButtons,
  IFormGroup,
  ISelect,
} from "@inkline/inkline/components";

export default {
  Layout,
  enhanceApp({ app }) {
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
        IForm,
        IFormLabel,
        IFormGroup,
        IRadioButtons,
        ISelect,
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
