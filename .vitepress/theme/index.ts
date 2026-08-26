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
  ICheckboxGroup,
  IDropdown,
  IForm,
  IFormLabel,
  IHeader,
  IIcon,
  IInput,
  ILayout,
  ILayoutAside,
  ILayoutContent,
  ILayoutFooter,
  ILayoutHeader,
  IModal,
  IModalContainer,
  IRadioButtons,
  IFormGroup,
} from "@inkline/inkline/components";

export default {
  Layout,
  enhanceApp({ app }) {
    app.use(Inkline, {
      components: {
        IButton,
        ICheckboxGroup,
        IDropdown,
        IHeader,
        IIcon,
        IInput,
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
