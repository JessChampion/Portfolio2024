import {
  IRenderResolver_default,
  breakpointClassName,
  components_exports,
  default as default2,
  default10 as default11,
  default11 as default12,
  default12 as default13,
  default13 as default14,
  default14 as default15,
  default15 as default16,
  default16 as default17,
  default17 as default18,
  default18 as default19,
  default19 as default20,
  default2 as default3,
  default20 as default21,
  default21 as default22,
  default22 as default23,
  default23 as default24,
  default24 as default25,
  default25 as default26,
  default26 as default27,
  default27 as default28,
  default28 as default29,
  default29 as default30,
  default3 as default4,
  default30 as default31,
  default31 as default32,
  default32 as default33,
  default33 as default34,
  default34 as default35,
  default35 as default36,
  default36 as default37,
  default37 as default38,
  default38 as default39,
  default39 as default40,
  default4 as default5,
  default40 as default41,
  default41 as default42,
  default42 as default43,
  default43 as default44,
  default44 as default45,
  default45 as default46,
  default46 as default47,
  default47 as default48,
  default48 as default49,
  default49 as default50,
  default5 as default6,
  default50 as default51,
  default51 as default52,
  default52 as default53,
  default53 as default54,
  default54 as default55,
  default55 as default56,
  default56 as default57,
  default57 as default58,
  default58 as default59,
  default59 as default60,
  default6 as default7,
  default60 as default61,
  default61 as default62,
  default62 as default63,
  default63 as default64,
  default64 as default65,
  default65 as default66,
  default7 as default8,
  default8 as default9,
  default9 as default10,
  extractRefHTMLElement,
  interpolate,
  renderSvg,
} from "./chunk-H34Q54F2.js";
import {
  computed,
  createApp,
  defineComponent,
  h,
  inject,
  markRaw,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  resolveComponent,
  unref,
  watch,
} from "./chunk-MYN6HZ3U.js";
import { __export } from "./chunk-PZ5AY32C.js";

// node_modules/@inkline/inkline/i18n/messages/en.mjs
var en = {
  validation: {
    alpha: ({ params }) => {
      let context;
      switch (true) {
        case (params == null ? void 0 : params.allowSpaces) &&
          (params == null ? void 0 : params.allowDashes):
          context = "letters, spaces, and dashes";
          break;
        case params == null ? void 0 : params.allowSpaces:
          context = "letters and spaces";
          break;
        case params == null ? void 0 : params.allowDashes:
          context = "letters and dashes";
          break;
        default:
          context = "letters";
      }
      return `Please enter ${context} only.`;
    },
    alphanumeric: ({ params }) => {
      let context;
      switch (true) {
        case (params == null ? void 0 : params.allowSpaces) &&
          (params == null ? void 0 : params.allowDashes):
          context = "letters, numbers, spaces, and dashes";
          break;
        case params == null ? void 0 : params.allowSpaces:
          context = "letters, numbers, and spaces";
          break;
        case params == null ? void 0 : params.allowDashes:
          context = "letters, numbers, and dashes";
          break;
        default:
          context = "letters and numbers";
      }
      return `Please enter ${context} only.`;
    },
    number: ({ params }) => {
      let context;
      switch (true) {
        case (params == null ? void 0 : params.allowNegative) &&
          (params == null ? void 0 : params.allowDecimal):
          context = "positive or negative decimal numbers";
          break;
        case params == null ? void 0 : params.allowNegative:
          context = "positive or negative numbers";
          break;
        case params == null ? void 0 : params.allowDecimal:
          context = "decimal numbers";
          break;
        default:
          context = "numbers";
      }
      return `Please enter ${context} only.`;
    },
    email: "Please enter a valid email address.",
    max: "Please enter a maximum value of {{params.value}}.",
    maxLength: ({ value }) => {
      if (Array.isArray(value)) {
        return "Please select up to {{params.value}} items.";
      }
      return "Please enter up to {{params.value}} characters.";
    },
    min: "Please enter a minimum value of {{params.value}}.",
    minLength: ({ value }) => {
      if (Array.isArray(value)) {
        return "Please select at least {{params.value}} items.";
      }
      return "Please enter at least {{params.value}} characters.";
    },
    required: "Please enter a value for this field.",
    sameAs: "Please make sure that the two values match.",
    custom: "Please enter a correct value for this field.",
  },
  modals: {
    confirm: "Confirm",
    cancel: "Cancel",
  },
};

// node_modules/@grozav/utils/hasClass.mjs
function hasClass(element, className) {
  if (!element || !className) return false;
  if (className.indexOf(" ") !== -1)
    throw new Error("Class name should not contain spaces.");
  if (element.classList) {
    return element.classList.contains(className);
  } else {
    return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
  }
}

// node_modules/@grozav/utils/addClass.mjs
function addClass(element, classes) {
  if (!element) return;
  let currentClass = element.className;
  const classList = (classes || "").split(" ");
  for (let i = 0, j = classList.length; i < j; i++) {
    const className = classList[i];
    if (!className) continue;
    if (element.classList) {
      element.classList.add(className);
    } else if (!hasClass(element, className)) {
      currentClass += " " + className;
    }
  }
  if (!element.classList) {
    element.className = currentClass;
  }
}

// node_modules/@grozav/utils/clone.mjs
function clone(source) {
  if (Array.isArray(source)) {
    const target = source.slice().map(clone);
    const targetKeys = Object.keys(target);
    Object.keys(source)
      .filter((key) => !targetKeys.includes(key))
      .forEach((key) => {
        target[key] = source[key];
      });
    return target;
  } else if (typeof source === "object") {
    return Object.keys(source).reduce((acc, key) => {
      acc[key] = clone(source[key]);
      return acc;
    }, {});
  }
  return source;
}

// node_modules/@grozav/utils/constants.mjs
var keymap = {
  tab: ["Tab", 9],
  enter: ["Enter", 13],
  esc: ["Escape", 27],
  space: [" ", "Space", 32],
  left: ["ArrowLeft", "Left", 37],
  up: ["ArrowUp", "Up", 38],
  right: ["ArrowRight", "Right", 39],
  down: ["ArrowDown", "Down", 40],
};

// node_modules/@grozav/utils/eventBus.mjs
function createEventBus() {
  const handlers = /* @__PURE__ */ new Map();
  function on2(eventName, fn) {
    let eventFns = handlers.get(eventName);
    if (!eventFns) {
      eventFns = [fn];
    } else {
      eventFns.push(fn);
    }
    handlers.set(eventName, eventFns);
    return () => off2(eventName, fn);
  }
  function off2(eventName, fn) {
    const eventFns = handlers.get(eventName);
    if (eventFns) {
      eventFns.splice(eventFns.indexOf(fn) >>> 0, 1);
    }
  }
  function emit(eventName, event) {
    const eventFns = handlers.get(eventName);
    if (eventFns) {
      eventFns.slice().forEach((handler) => {
        handler(event);
      });
    }
  }
  return {
    on: on2,
    off: off2,
    emit,
  };
}

// node_modules/@grozav/utils/isFocusable.mjs
function isFocusable(element) {
  if (
    element.tabIndex > 0 ||
    (element.tabIndex === 0 && element.getAttribute("tabIndex") !== null)
  ) {
    return true;
  }
  if (element.disabled) {
    return false;
  }
  switch (element.nodeName) {
    case "A":
      return !!element.href && element.rel !== "ignore";
    case "INPUT":
      return element.type !== "hidden" && element.type !== "file";
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    default:
      return false;
  }
}

// node_modules/@grozav/utils/focusAttempt.mjs
function focusAttempt(element) {
  if (!isFocusable(element)) {
    return false;
  }
  try {
    element.focus();
  } catch (e) {}
  return typeof window !== "undefined" && document.activeElement === element;
}

// node_modules/@grozav/utils/focusFirstDescendant.mjs
function focusFirstDescendant(element) {
  for (let i = 0; i < element.childNodes.length; i++) {
    const child = element.childNodes[i];
    if (focusAttempt(child) || focusFirstDescendant(child)) {
      return true;
    }
  }
  return false;
}

// node_modules/@grozav/utils/isFunction.mjs
var isFunction = (fn) => fn instanceof Function;

// node_modules/@grozav/utils/isKey.mjs
var isKey = (key, e) => {
  const keyCode = e.key || e.keyIdentifier || e.keyCode;
  return keymap[key].indexOf(keyCode) !== -1;
};

// node_modules/@grozav/utils/isVisible.mjs
function isVisible(element) {
  return (
    Boolean(element) &&
    Boolean(
      element.offsetWidth ||
        element.offsetHeight ||
        element.getClientRects().length,
    )
  );
}

// node_modules/@grozav/utils/off.mjs
function removeEventListenerBinding(element, event, handler) {
  if (element && event) {
    element.removeEventListener(event, handler, false);
  }
}
function detachEventBinding(element, event, handler) {
  if (element && event) {
    element.detachEvent("on" + event, handler);
  }
}
var _off = () => {
  if (typeof window === "undefined") {
    return () => {};
  }
  if (window.document.removeEventListener) {
    return removeEventListenerBinding;
  } else {
    return detachEventBinding;
  }
};
var off = _off();

// node_modules/@grozav/utils/on.mjs
function addEventListenerBinding(element, event, handler) {
  if (element && event && handler) {
    element.addEventListener(event, handler, false);
  }
}
function attachEventBinding(element, event, handler) {
  if (element && event && handler) {
    element.attachEvent("on" + event, handler);
  }
}
var _on = () => {
  if (typeof window === "undefined") {
    return () => {};
  }
  if (window.document.addEventListener) {
    return addEventListenerBinding;
  } else {
    return attachEventBinding;
  }
};
var on = _on();

// node_modules/@grozav/utils/trim.mjs
function trim(string) {
  return (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
}

// node_modules/@grozav/utils/removeClass.mjs
function removeClass(element, classes) {
  if (!element || !classes) {
    return;
  }
  const classList = classes.split(" ");
  let currentClass = " " + element.className + " ";
  for (let i = 0, j = classList.length; i < j; i++) {
    const className = classList[i];
    if (!className) {
      continue;
    }
    if (element.classList) {
      element.classList.remove(className);
    } else if (hasClass(element, className)) {
      currentClass = currentClass.replace(" " + className + " ", " ");
    }
  }
  if (!element.classList) {
    element.className = trim(currentClass);
  }
}

// node_modules/@grozav/utils/valueByPath.mjs
function getValueByPath(object, path) {
  return path.split(".").reduce((acc, part) => {
    return acc && acc[part];
  }, object);
}
function setValueByPath(object, path, value, initialize = true) {
  const parts = path.split(".");
  const key = parts.pop();
  let target = object;
  parts.forEach((part) => {
    if (!target.hasOwnProperty(part) && initialize) {
      target[part] = {};
    }
    target = target[part];
  });
  if (target && key) {
    target[key] = value;
  }
  return object;
}
function setValuesAlongPath(object, path, values) {
  if (path) {
    path.split(".").reduce((acc, part) => {
      Object.keys(values).forEach((key) => {
        acc[part][key] = values[key];
      });
      return acc && acc[part];
    }, object);
  }
  Object.keys(values).forEach((key) => {
    object[key] = values[key];
  });
  return object;
}

// node_modules/@grozav/utils/uid.mjs
function uid(baseId) {
  return `${baseId ? `${baseId}-` : ""}${Math.random().toString(36).substr(2, 9)}`;
}

// node_modules/@inkline/inkline/i18n/translate.mjs
function translate(path, scope = {}) {
  const template = getValueByPath(i18n.messages[i18n.locale], path);
  const string = (isFunction(template) ? template(scope) : template) || path;
  return interpolate(string, scope);
}

// node_modules/@inkline/inkline/i18n/index.mjs
var i18n = {
  locale: "en",
  messages: {
    en,
  },
};
function setLocale(locale) {
  i18n.locale = locale;
}

// node_modules/@inkline/inkline/constants/breakpoints.mjs
var breakpoints = {
  xs: [0, 575],
  sm: [576, 767],
  md: [768, 991],
  lg: [992, 1199],
  xl: [1200, 1399],
  xxl: [1400, Infinity],
};
var breakpointKeys = ["", "xs", "sm", "md", "lg", "xl", "xxl"];

// node_modules/@inkline/inkline/constants/eventValueMap.mjs
var eventValueMap = {
  input: (e) => e,
  blur: (e) => e.target.value,
  focus: (e) => e.target.value,
  mouseenter: (e) => e.target.value,
  mouseleave: (e) => e.target.value,
};

// node_modules/@inkline/inkline/constants/ids.mjs
var defaultModalContainerId = "inkline-modal-container";
var defaultToastContainerId = "inkline-toast-container";

// node_modules/@inkline/inkline/constants/injectKeys.mjs
var InklineKey = "inkline";
var InklineIconsKey = "inklineIcons";
var InklineModalKey = "inklineModal";
var InklineToastKey = "inklineToast";
var ButtonGroupKey = "ButtonGroup";
var CheckboxGroupKey = "CheckboxGroup";
var CollapsibleKey = "Collapsible";
var DropdownKey = "Dropdown";
var FormKey = "Form";
var FormGroupKey = "FormGroup";
var NavKey = "Nav";
var NavbarKey = "Navbar";
var ProgressKey = "Progress";
var RadioGroupKey = "RadioGroup";
var SelectKey = "Select";
var SidebarKey = "Sidebar";
var TabsKey = "Tabs";

// node_modules/@inkline/inkline/services/modal.mjs
function createModalService(eventBus) {
  return {
    show: (options) => {
      eventBus.emit("show", options);
    },
    hide: (options) => {
      eventBus.emit("hide", options);
    },
    hideAll: () => {
      eventBus.emit("hideAll", {});
    },
  };
}

// node_modules/@inkline/inkline/services/toast.mjs
function createToastService(eventBus) {
  return {
    show: (options) => {
      eventBus.emit("show", options);
    },
    hide: (options) => {
      eventBus.emit("hide", options);
    },
    hideAll: () => {
      eventBus.emit("hideAll", {});
    },
  };
}

// node_modules/@inkline/inkline/constants/instances.mjs
var modalEventBus = createEventBus();
var modalService = createModalService(modalEventBus);
var toastEventBus = createEventBus();
var toastService = createToastService(toastEventBus);

// node_modules/@inkline/inkline/constants/keymap.mjs
var keymap2 = {
  tab: ["Tab", 9],
  enter: ["Enter", 13],
  esc: ["Escape", 27],
  space: [" ", "Space", 32],
  left: ["ArrowLeft", "Left", 37],
  up: ["ArrowUp", "Up", 38],
  right: ["ArrowRight", "Right", 39],
  down: ["ArrowDown", "Down", 40],
};

// node_modules/@inkline/inkline/constants/validation.mjs
var defaultValidationStateValues = {
  pristine: true,
  dirty: false,
  untouched: true,
  touched: false,
  valid: true,
  invalid: false,
  errors: [],
};
var defaultValidationFieldValues = {
  value: void 0,
  validators: [],
};
var reservedValidationFields = [
  "value",
  "validators",
  "pristine",
  "dirty",
  "untouched",
  "touched",
  "valid",
  "invalid",
  "errors",
];

// node_modules/@inkline/inkline/composables/modals/builder.mjs
function useModalBuilder() {
  return modalService;
}

// node_modules/@inkline/inkline/composables/modals/alert.mjs
function useAlert() {
  const builder = useModalBuilder();
  return (options) =>
    new Promise((resolve) => {
      const id = uid("alert");
      builder.show({
        id,
        type: "alert",
        onClose: () => resolve(),
        header: options.title,
        body: options.message,
        footer:
          options.footer ||
          h(
            default6,
            {
              onClick: () => {
                builder.hide({ id });
              },
              color: "primary",
              ...options.confirmButtonProps,
            },
            () => options.confirmButtonText ?? translate("modals.confirm"),
          ),
        ...options,
      });
    });
}

// node_modules/@inkline/inkline/composables/modals/confirm.mjs
function useConfirm() {
  const builder = useModalBuilder();
  return (options) =>
    new Promise((resolve) => {
      const id = uid("confirm");
      builder.show({
        id,
        type: "confirm",
        onClose: () => resolve(false),
        header: options.title,
        body: options.message,
        footer:
          options.footer ||
          h("div", [
            h(
              default6,
              {
                onClick: () => {
                  builder.hide({ id });
                  resolve(false);
                },
                ...options.cancelButtonProps,
              },
              () => options.cancelButtonText ?? translate("modals.cancel"),
            ),
            h(
              default6,
              {
                onClick: () => {
                  builder.hide({ id });
                  resolve(true);
                },
                color: "primary",
                ...options.confirmButtonProps,
              },
              () => options.confirmButtonText ?? translate("modals.confirm"),
            ),
          ]),
        ...options,
      });
    });
}

// node_modules/@inkline/inkline/composables/modals/prompt.mjs
function usePrompt() {
  const modalService2 = useModalBuilder();
  return (options) =>
    new Promise((resolve, reject) => {
      const id = uid("prompt");
      const { schema, form, validate } = useForm(
        options.schema || {
          input: {
            validators: ["required"],
          },
        },
      );
      const disabled = computed(
        () => schema.value.invalid || schema.value.pristine,
      );
      modalService2.show({
        id,
        type: "prompt",
        onClose: () => reject(new Error("Prompt cancelled")),
        header: options.title,
        body:
          options.body ||
          h("div", [
            h("p", options.message),
            h(
              default20,
              {
                modelValue: schema,
                "onUpdate:modelValue"(value) {
                  schema.value = value;
                },
              },
              () => [
                ...(options.inputs ?? [
                  h(default21, {}, () => [
                    h(default27, {
                      name: "input",
                      placeholder: "Enter a value...",
                      ...options.inputProps,
                    }),
                    h(default22, {
                      for: "input",
                    }),
                  ]),
                ]),
              ],
            ),
          ]),
        footer:
          options.footer ||
          markRaw(
            defineComponent({
              setup() {
                return () =>
                  h("div", [
                    h(
                      default6,
                      {
                        onClick: () => {
                          modalService2.hide({ id });
                          reject(new Error("Prompt cancelled"));
                        },
                        ...options.cancelButtonProps,
                      },
                      () =>
                        options.cancelButtonText ?? translate("modals.cancel"),
                    ),
                    h(
                      default6,
                      {
                        onClick: async () => {
                          await validate();
                          if (schema.value.valid) {
                            modalService2.hide({ id });
                            resolve(form.value);
                          }
                        },
                        disabled: disabled.value,
                        color: "primary",
                        ...options.confirmButtonProps,
                      },
                      () =>
                        options.confirmButtonText ??
                        translate("modals.confirm"),
                    ),
                  ]);
              },
            }),
          ),
        ...options,
      });
    });
}

// node_modules/@inkline/inkline/composables/useClickOutside.mjs
function useClickOutside(props) {
  const binding = (event) => {
    const fn = unref(props.fn);
    if (!props.elementRef.value) {
      return;
    }
    const target = event.target;
    if (!isVisible(props.elementRef.value) || !target) {
      return;
    }
    if (
      props.elementRef.value === target ||
      props.elementRef.value.contains(target)
    ) {
      return;
    }
    fn(event);
  };
  onMounted(() => {
    if (typeof window !== "undefined") {
      on(window.document, "mousedown", binding);
    }
  });
  onUnmounted(() => {
    if (typeof window !== "undefined") {
      off(window.document, "mousedown", binding);
    }
  });
}

// node_modules/@inkline/inkline/composables/useCollapsible.mjs
function useCollapsible(props) {
  const open = ref(props.modelValue.value);
  const collapsible = ref(
    typeof props.collapse.value === "boolean" ? props.collapse.value : false,
  );
  const windowWidth = ref(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );
  const classes = computed(() => ({
    "-open": open.value,
    "-collapsible": collapsible.value,
    [`-collapse-${props.collapse.value}`]: Boolean(props.collapse.value),
  }));
  watch(
    () => props.modelValue.value,
    (value) => {
      open.value = value;
    },
  );
  onMounted(() => {
    if (typeof window !== "undefined") {
      on(window, "resize", onWindowResize);
      onWindowResize();
    }
  });
  onBeforeUnmount(() => {
    if (typeof window !== "undefined") {
      off(window, "resize", onWindowResize);
    }
  });
  function setCollapsible() {
    if (props.collapse.value === true || props.collapse.value === false) {
      collapsible.value = props.collapse.value;
    } else {
      collapsible.value =
        windowWidth.value <= breakpoints[props.collapse.value][1];
    }
  }
  function setOpen(value) {
    open.value = value;
    props.emit("update:modelValue", open.value);
  }
  function toggleOpen() {
    open.value = !open.value;
    props.emit("update:modelValue", open.value);
  }
  function onWindowResize() {
    if (typeof window === "undefined") {
      return;
    }
    if (typeof props.collapse.value !== "boolean") {
      const currentWindowWidth = window.innerWidth;
      if (
        windowWidth.value <= breakpoints[props.collapse.value][1] &&
        currentWindowWidth > breakpoints[props.collapse.value][1]
      ) {
        setOpen(false);
      }
      windowWidth.value = window.innerWidth;
    }
    setCollapsible();
  }
  return { open, collapsible, classes, setOpen, toggleOpen };
}

// node_modules/@inkline/inkline/composables/useInkline.mjs
function useInkline() {
  return inject(InklineKey);
}

// node_modules/@inkline/inkline/composables/useComponentColor.mjs
function useComponentColor(props) {
  const inkline = useInkline();
  const color = computed(() => {
    var _a, _b, _c;
    let colorClass = props.currentColor.value || "light";
    if (
      !props.currentColor.value &&
      (inkline == null ? void 0 : inkline.options)
    ) {
      if (
        (_a = inkline.options.componentOptions[props.componentName]) == null
          ? void 0
          : _a.color
      ) {
        colorClass =
          (_b = inkline.options.componentOptions[props.componentName]) == null
            ? void 0
            : _b.color;
      } else if (inkline.options.color) {
        colorClass = inkline.options.color;
      } else if (inkline.options.colorMode === "system") {
        colorClass =
          typeof window !== "undefined" &&
          ((_c = window.matchMedia) == null
            ? void 0
            : _c.call(window, "(prefers-color-scheme: dark)").matches)
            ? "dark"
            : "light";
      } else {
        colorClass = inkline.options.colorMode;
      }
    }
    return colorClass;
  });
  return { color };
}

// node_modules/@inkline/inkline/composables/useComponentSize.mjs
function useComponentSize(props) {
  const inkline = useInkline();
  const size2 = computed(() => {
    var _a, _b;
    let sizeClass = props.currentSize.value || "md";
    if (
      !props.currentSize.value &&
      (inkline == null ? void 0 : inkline.options)
    ) {
      if (
        (_a = inkline.options.componentOptions[props.componentName]) == null
          ? void 0
          : _a.size
      ) {
        sizeClass =
          (_b = inkline.options.componentOptions[props.componentName]) == null
            ? void 0
            : _b.size;
      } else if (inkline.options.size) {
        sizeClass = inkline.options.size;
      }
    }
    return sizeClass;
  });
  return { size: size2 };
}

// node_modules/@inkline/inkline/validation/validators/constants.mjs
var alpha = {
  "en-US": /^[A-Z]+$/i,
  "bg-BG": /^[А-Я]+$/i,
  "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[A-ZÆØÅ]+$/i,
  "de-DE": /^[A-ZÄÖÜß]+$/i,
  "el-GR": /^[Α-ω]+$/i,
  "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  "nb-NO": /^[A-ZÆØÅ]+$/i,
  "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  "nn-NO": /^[A-ZÆØÅ]+$/i,
  "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  "ru-RU": /^[А-ЯЁ]+$/i,
  "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
  "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
  "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
  "sv-SE": /^[A-ZÅÄÖ]+$/i,
  "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
  "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
  // eslint-disable-line no-misleading-character-class
};
var alphanumeric = {
  "en-US": /^[0-9A-Z]+$/i,
  "bg-BG": /^[0-9А-Я]+$/i,
  "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[0-9A-ZÆØÅ]+$/i,
  "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
  "el-GR": /^[0-9Α-ω]+$/i,
  "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
  "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
  "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
  "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
  "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  "ru-RU": /^[0-9А-ЯЁ]+$/i,
  "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
  "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
  "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
  "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
  "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
  // eslint-disable-line no-misleading-character-class
};
var decimal = {
  "en-US": ".",
  ar: "٫",
};
var arabicLocales = [
  "AE",
  "BH",
  "DZ",
  "EG",
  "IQ",
  "JO",
  "KW",
  "LB",
  "LY",
  "MA",
  "QM",
  "QA",
  "SA",
  "SD",
  "SY",
  "TN",
  "YE",
];
var englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
var dotDecimal = ["ar-EG", "ar-LB", "ar-LY"];
var commaDecimal = [
  "bg-BG",
  "cs-CZ",
  "da-DK",
  "de-DE",
  "el-GR",
  "en-ZM",
  "es-ES",
  "fr-FR",
  "it-IT",
  "ku-IQ",
  "hu-HU",
  "nb-NO",
  "nn-NO",
  "nl-NL",
  "pl-PL",
  "pt-PT",
  "ru-RU",
  "sl-SI",
  "sr-RS@latin",
  "sr-RS",
  "sv-SE",
  "tr-TR",
  "uk-UA",
];
englishLocales.forEach((locale) => {
  alpha[`en-${locale}`] = alpha["en-US"];
  alphanumeric[`en-${locale}`] = alphanumeric["en-US"];
  decimal[`en-${locale}`] = decimal["en-US"];
});
arabicLocales.forEach((locale) => {
  alpha[`ar-${locale}`] = alpha.ar;
  alphanumeric[`ar-${locale}`] = alphanumeric.ar;
  decimal[`ar-${locale}`] = decimal.ar;
});
dotDecimal.forEach((locale) => {
  decimal[locale] = decimal["en-US"];
});
commaDecimal.forEach((locale) => {
  decimal[locale] = decimal.ar;
});
alpha["pt-BR"] = alpha["pt-PT"];
alphanumeric["pt-BR"] = alphanumeric["pt-PT"];
decimal["pt-BR"] = decimal["pt-PT"];
alpha["pl-Pl"] = alpha["pl-PL"];
alphanumeric["pl-Pl"] = alphanumeric["pl-PL"];
decimal["pl-Pl"] = decimal["pl-PL"];

// node_modules/@inkline/inkline/validation/validators/alpha.mjs
var alpha2 = (rawValue, options) => {
  const locale = options.locale || "en-US";
  const process = (v) => {
    let value = String(v);
    if (options.allowDashes) {
      value = value.replace(/-/g, "");
    }
    if (options.allowSpaces) {
      value = value.replace(/ /g, "");
    }
    return value;
  };
  if ((rawValue == null ? void 0 : rawValue.constructor) === Array) {
    return rawValue.every((v) => alpha[locale].test(process(v)));
  }
  return alpha[locale].test(process(rawValue));
};

// node_modules/@inkline/inkline/validation/validators/alphanumeric.mjs
var alphanumeric2 = (rawValue, options) => {
  const locale = options.locale || "en-US";
  const process = (v) => {
    let value = String(v);
    if (options.allowDashes) {
      value = value.replace(/-/g, "");
    }
    if (options.allowSpaces) {
      value = value.replace(/ /g, "");
    }
    return value;
  };
  if ((rawValue == null ? void 0 : rawValue.constructor) === Array) {
    return rawValue.every((v) => alphanumeric[locale].test(process(v)));
  }
  return alphanumeric[locale].test(process(rawValue));
};

// node_modules/@inkline/inkline/validation/validators/custom.mjs
var custom = async (value, options) => {
  if (!options.validator) {
    console.error("No `validator` function provided for custom validator.");
    return true;
  }
  if ((value == null ? void 0 : value.constructor) === Array) {
    let valid = true;
    for (const v of value) {
      valid = valid && (await options.validator(v, options));
    }
    return valid;
  }
  return options.validator(value, options);
};

// node_modules/@inkline/inkline/validation/validators/number.mjs
var number = (value, options) => {
  let regExpString = "\\d+";
  if (options.allowNegative) {
    regExpString = "[-]?" + regExpString;
  }
  if (options.allowDecimal) {
    regExpString += "([\\.\\,]\\d+)?";
  }
  const regExp = new RegExp(`^${regExpString}$`);
  if ((value == null ? void 0 : value.constructor) === Array) {
    return value.every((v) => regExp.test(v));
  }
  return regExp.test(String(value));
};

// node_modules/@inkline/inkline/validation/validators/email.mjs
var validator =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var email = (value) => {
  if ((value == null ? void 0 : value.constructor) === Array) {
    return value.every((v) => !v || validator.test(String(v)));
  }
  return !value || validator.test(String(value));
};

// node_modules/@inkline/inkline/validation/validators/max.mjs
var max = (value, options) => {
  if (typeof options.value === "undefined") {
    console.error('The "value" option must be specified for "max" validator.');
    return true;
  }
  if (typeof value === "undefined" || value === null) {
    return false;
  }
  const process = (v) => Number(v);
  if (Array.isArray(value)) {
    return value.every((v) => process(v) <= options.value);
  }
  return process(value) <= options.value;
};

// node_modules/@inkline/inkline/validation/validators/maxLength.mjs
var maxLength = (value, options) => {
  if (typeof options.value === "undefined") {
    console.error(
      'The "value" option must be specified for "maxLength" validator.',
    );
    return true;
  }
  if (typeof value === "undefined" || value === null) {
    return false;
  }
  if (value.constructor === Array) {
    return value.length <= options.value;
  }
  if (typeof value === "object") {
    return Object.keys(value).length <= options.value;
  }
  return String(value).length <= options.value;
};

// node_modules/@inkline/inkline/validation/validators/min.mjs
var min = (value, options) => {
  if (typeof options.value === "undefined") {
    console.error('The "value" option must be specified for "min" validator.');
    return true;
  }
  if (typeof value === "undefined" || value === null) {
    return false;
  }
  const process = (v) => Number(v);
  if (Array.isArray(value)) {
    return value.every((v) => process(v) >= options.value);
  }
  return process(value) >= options.value;
};

// node_modules/@inkline/inkline/validation/validators/minLength.mjs
var minLength = (value, options) => {
  if (typeof options.value === "undefined") {
    console.error(
      'The "value" option must be specified for "minLength" validator.',
    );
    return true;
  }
  if (typeof value === "undefined" || value === null) {
    return false;
  }
  if (value.constructor === Array) {
    return value.length >= options.value;
  }
  if (typeof value === "object") {
    return Object.keys(value).length >= options.value;
  }
  return String(value).length >= options.value;
};

// node_modules/@inkline/inkline/validation/validators/required.mjs
var required = (value, options) => {
  if (value === void 0 || value === null) {
    return false;
  }
  if (value.constructor === Array) {
    return !!value.length;
  }
  if (typeof value === "boolean") {
    return options.invalidateFalse ? !!value : true;
  }
  return !!String(value).trim().length;
};

// node_modules/@inkline/inkline/validation/validators/sameAs.mjs
var sameAs = (value, options) => {
  if (!options.target) {
    console.error(
      'The "target" option must be specified for "sameAs" validator.',
    );
    return false;
  }
  const targetSchema = getValueByPath(options.schema, options.target);
  if (!targetSchema) {
    throw new Error(
      `Could not find target with name '${options.target}' in 'sameAs' validator.`,
    );
  }
  return value === targetSchema.value;
};

// node_modules/@inkline/inkline/types/guards/validation.mjs
function isFormField(schema) {
  return (
    Object.keys(schema).length === 0 ||
    schema.hasOwnProperty("value") ||
    schema.hasOwnProperty("validators")
  );
}
function isFormFieldArray(schema) {
  return Array.isArray(schema) && schema.every(isFormField);
}
function isFormGroup(schema) {
  return !isFormField(schema);
}
function isFormGroupArray(schema) {
  return Array.isArray(schema) && schema.every(isFormGroup);
}

// node_modules/@inkline/inkline/validation/schema/createSchema.mjs
function createFormFieldSchema(field) {
  return {
    ...defaultValidationStateValues,
    ...defaultValidationFieldValues,
    ...field,
  };
}
function createFormArraySchema(items) {
  return items.map((item) => {
    if (isFormGroup(item)) {
      return createSchema(item);
    }
    return createFormFieldSchema(item);
  });
}
function createFormSchema(schema) {
  const resolved = {
    ...defaultValidationStateValues,
  };
  for (const key of Object.keys(schema)) {
    const field = schema[key];
    if (Array.isArray(field)) {
      resolved[key] = createFormArraySchema(field);
    } else if (isFormGroup(field)) {
      resolved[key] = createSchema(field);
    } else if (isFormField(field)) {
      resolved[key] = createFormFieldSchema(field);
    }
  }
  return resolved;
}
function createSchema(schema) {
  return createFormSchema(schema);
}

// node_modules/@inkline/inkline/validation/schema/createSchemaFromDefaults.mjs
function createSchemaFromDefaults(defaultValues) {
  const resolved = {
    ...defaultValidationStateValues,
  };
  for (const key of Object.keys(defaultValues)) {
    const field = defaultValues[key];
    if (Array.isArray(field)) {
      resolved[key] = field.map((item) => {
        if (typeof item === "object") {
          return createSchemaFromDefaults(item);
        }
        return createFormFieldSchema({ value: item });
      });
    } else if (typeof field === "object") {
      resolved[key] = createSchemaFromDefaults(field);
    } else {
      resolved[key] = createFormFieldSchema({
        value: field,
      });
    }
  }
  return resolved;
}

// node_modules/@inkline/inkline/validation/schema/serializeSchema.mjs
function serializeSchema(schema) {
  const serializedSchema = {};
  Object.keys(schema).forEach((key) => {
    if (!schema.hasOwnProperty(key) || reservedValidationFields.includes(key)) {
      return;
    }
    const schemaField = schema[key];
    if (Array.isArray(schemaField)) {
      serializedSchema[key] = schemaField.map((item) => {
        if (isFormGroup(item)) {
          return serializeSchema(item);
        }
        return item.value;
      });
    } else if (isFormGroup(schemaField)) {
      serializedSchema[key] = serializeSchema(schemaField);
    } else if (isFormField(schemaField)) {
      serializedSchema[key] = schemaField.value;
    }
  });
  return serializedSchema;
}

// node_modules/@inkline/inkline/validation/schema/setSchemaStateRecursively.mjs
function setSchemaStateRecursively(schema, values) {
  const resolvedSchema = {
    ...schema,
  };
  Object.keys(values).forEach((key) => {
    const value = values[key];
    if (!Array.isArray(schema)) {
      resolvedSchema[key] = value;
    }
  });
  Object.keys(schema)
    .filter((key) => !reservedValidationFields.includes(key))
    .forEach((key) => {
      const field = schema[key];
      if (typeof schema[key] === "object" || Array.isArray(schema[key])) {
        resolvedSchema[key] = setSchemaStateRecursively(field, values);
      }
    });
  return resolvedSchema;
}

// node_modules/@inkline/inkline/validation/register.mjs
var validators = {
  alpha: alpha2,
  alphanumeric: alphanumeric2,
  custom,
  number,
  email,
  max,
  maxLength,
  min,
  minLength,
  required,
  sameAs,
};
function registerValidator(name, validator2) {
  validators[name] = validator2;
}
function unregisterValidator(name) {
  delete validators[name];
}

// node_modules/@inkline/inkline/validation/schema/validateSchema.mjs
async function validateFormField(schema, path = "", rootSchema) {
  const errors = [];
  const resolvedSchema = {
    ...schema,
  };
  let valid = true;
  for (const rawValidator of resolvedSchema.validators || []) {
    const validator2 = {
      ...(typeof rawValidator === "string"
        ? { name: rawValidator }
        : rawValidator),
      schema: rootSchema,
      path,
    };
    const valueIsValid = await validators[validator2.name](
      resolvedSchema.value,
      validator2,
    );
    if (!valueIsValid) {
      const { name, message, ...params } = validator2;
      const i18nParams = {
        name: path.split(".").pop(),
        value: schema.value,
        params,
      };
      const errorMessage =
        (message instanceof Function ? message() : message) ||
        translate(`validation.${name}`, i18nParams);
      errors.push({ name, message: errorMessage, path });
    }
    valid = valid && valueIsValid;
  }
  resolvedSchema.valid = valid;
  resolvedSchema.invalid = !valid;
  resolvedSchema.errors = errors;
  return resolvedSchema;
}
async function validateFormFieldArray(schema, path = "", rootSchema) {
  return Promise.all(
    schema.map((item, index) => {
      return validateFormField(
        item,
        path ? `${path}.${index}` : `${index}`,
        rootSchema,
      );
    }),
  );
}
async function validateFormArray(schema, path = "", rootSchema) {
  return Promise.all(
    schema.map((item, index) => {
      return validateForm(
        item,
        path ? `${path}.${index}` : `${index}`,
        rootSchema,
      );
    }),
  );
}
async function validateForm(schema, name = "", rootSchema) {
  const resolvedSchema = {
    ...schema,
  };
  let valid = true;
  const resolvedSchemaKeys = Object.keys(resolvedSchema).filter(
    (key) => !reservedValidationFields.includes(key),
  );
  for (const key of resolvedSchemaKeys) {
    const field = resolvedSchema[key];
    let fieldIsValid = true;
    if (isFormFieldArray(field)) {
      resolvedSchema[key] = await validateFormFieldArray(
        field,
        name ? `${name}.${key}` : `${key}`,
        rootSchema,
      );
    } else if (isFormGroupArray(field)) {
      resolvedSchema[key] = await validateFormArray(
        field,
        name ? `${name}.${key}` : `${key}`,
        rootSchema,
      );
    } else if (isFormField(field)) {
      resolvedSchema[key] = await validateFormField(
        field,
        name ? `${name}.${key}` : key,
        rootSchema,
      );
    } else if (isFormGroup(field)) {
      resolvedSchema[key] = await validateForm(
        field,
        name ? `${name}.${key}` : key,
        rootSchema,
      );
    }
    if (Array.isArray(resolvedSchema[key])) {
      fieldIsValid = resolvedSchema[key].every((item) => item.valid);
    } else {
      fieldIsValid = resolvedSchema[key].valid;
    }
    valid = valid && fieldIsValid;
  }
  resolvedSchema.valid = valid;
  resolvedSchema.invalid = !valid;
  return resolvedSchema;
}
async function validateSchema(schema) {
  return validateForm(schema, "", schema);
}

// node_modules/@inkline/inkline/composables/useForm.mjs
function useForm(formSchema) {
  const schema = ref(createSchema(formSchema));
  const form = computed(() => serializeSchema(schema.value));
  async function validate() {
    schema.value = await validateSchema(schema.value);
  }
  return {
    form,
    schema,
    validate,
  };
}

// node_modules/@inkline/inkline/composables/useIsServer.mjs
function useIsServer() {
  const isServer = ref(typeof window === "undefined");
  return { isServer };
}

// node_modules/@inkline/inkline/composables/useLinkable.mjs
function useLinkable(props) {
  const inkline = useInkline();
  const isLink = computed(() => {
    return props.to.value || props.href.value;
  });
  const tag = computed(() => {
    var _a;
    const routerComponent =
      (_a = inkline == null ? void 0 : inkline.options) == null
        ? void 0
        : _a.routerComponent;
    if (props.to.value && routerComponent) {
      return typeof routerComponent === "string"
        ? resolveComponent(routerComponent)
        : routerComponent;
    } else if (props.href.value) {
      return "a";
    } else {
      return props.tag.value;
    }
  });
  return { tag, isLink };
}

// node_modules/@inkline/inkline/composables/useModal.mjs
function useModal() {
  const builder = useModalBuilder();
  const alert = useAlert();
  const confirm = useConfirm();
  const prompt = usePrompt();
  return {
    ...builder,
    alert,
    confirm,
    prompt,
  };
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce(
  (acc, side) =>
    acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]),
  [],
);
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v,
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom",
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start",
};
function clamp(start, value, end) {
  return max2(start, min2(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide =
    alignmentAxis === "x"
      ? alignment === (rtl ? "end" : "start")
        ? "right"
        : "left"
      : alignment === "start"
        ? "bottom"
        : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [
    getOppositeAlignmentPlacement(placement),
    oppositePlacement,
    getOppositeAlignmentPlacement(oppositePlacement),
  ];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(
    /start|end/g,
    (alignment) => oppositeAlignmentMap[alignment],
  );
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(
    /left|right|bottom|top/g,
    (side) => oppositeSideMap[side],
  );
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding,
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number"
    ? expandPaddingObject(padding)
    : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding,
      };
}
function rectToClientRect(rect) {
  const { x, y, width, height } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y,
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let { reference, floating } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height,
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height,
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY,
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY,
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y,
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null
    ? void 0
    : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy,
  });
  let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const { name, fn } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset,
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating,
      },
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data,
      },
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects =
            reset.rects === true
              ? await platform2.getElementRects({
                  reference,
                  floating,
                  strategy,
                })
              : reset.rects;
        }
        ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData,
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const { x, y, platform: platform2, rects, elements, strategy } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0,
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(
    await platform2.getClippingRect({
      element: (
        (_await$platform$isEle = await (platform2.isElement == null
          ? void 0
          : platform2.isElement(element))) != null
          ? _await$platform$isEle
          : true
      )
        ? element
        : element.contextElement ||
          (await (platform2.getDocumentElement == null
            ? void 0
            : platform2.getDocumentElement(elements.floating))),
      boundary,
      rootBoundary,
      strategy,
    }),
  );
  const rect =
    elementContext === "floating"
      ? {
          x,
          y,
          width: rects.floating.width,
          height: rects.floating.height,
        }
      : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null
    ? void 0
    : platform2.getOffsetParent(elements.floating));
  const offsetScale = (await (platform2.isElement == null
    ? void 0
    : platform2.isElement(offsetParent)))
    ? (await (platform2.getScale == null
        ? void 0
        : platform2.getScale(offsetParent))) || {
        x: 1,
        y: 1,
      }
    : {
        x: 1,
        y: 1,
      };
  const elementClientRect = rectToClientRect(
    platform2.convertOffsetParentRelativeRectToViewportRelativeRect
      ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements,
          rect,
          offsetParent,
          strategy,
        })
      : rect,
  );
  return {
    top:
      (clippingClientRect.top - elementClientRect.top + paddingObject.top) /
      offsetScale.y,
    bottom:
      (elementClientRect.bottom -
        clippingClientRect.bottom +
        paddingObject.bottom) /
      offsetScale.y,
    left:
      (clippingClientRect.left - elementClientRect.left + paddingObject.left) /
      offsetScale.x,
    right:
      (elementClientRect.right -
        clippingClientRect.right +
        paddingObject.right) /
      offsetScale.x,
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData,
    } = state;
    const { element, padding = 0 } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y,
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff =
      rects.reference[length] +
      rects.reference[axis] -
      coords[axis] -
      rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null
      ? void 0
      : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (
      !clientSize ||
      !(await (platform2.isElement == null
        ? void 0
        : platform2.isElement(arrowOffsetParent)))
    ) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding =
      clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min2(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min2(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max3 = clientSize - arrowDimensions[length] - maxPadding;
    const center =
      clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset3 = clamp(min$1, center, max3);
    const shouldAddOffset =
      !middlewareData.arrow &&
      getAlignment(placement) != null &&
      center !== offset3 &&
      rects.reference[length] / 2 -
        (center < min$1 ? minPadding : maxPadding) -
        arrowDimensions[length] / 2 <
        0;
    const alignmentOffset = shouldAddOffset
      ? center < min$1
        ? center - min$1
        : center - max3
      : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset3,
        centerOffset: center - offset3 - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset,
        }),
      },
      reset: shouldAddOffset,
    };
  },
});
var flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements,
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if (
        (_middlewareData$arrow = middlewareData.arrow) != null &&
        _middlewareData$arrow.alignmentOffset
      ) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null
        ? void 0
        : platform2.isRTL(elements.floating));
      const fallbackPlacements =
        specifiedFallbackPlacements ||
        (isBasePlacement || !flipAlignment
          ? [getOppositePlacement(initialPlacement)]
          : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(
          ...getOppositeAxisPlacements(
            initialPlacement,
            flipAlignment,
            fallbackAxisSideDirection,
            rtl,
          ),
        );
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData =
        ((_middlewareData$flip = middlewareData.flip) == null
          ? void 0
          : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [
        ...overflowsData,
        {
          placement,
          overflows,
        },
      ];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex =
          (((_middlewareData$flip2 = middlewareData.flip) == null
            ? void 0
            : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData,
            },
            reset: {
              placement: nextPlacement,
            },
          };
        }
        let resetPlacement =
          (_overflowsData$filter = overflowsData
            .filter((d) => d.overflows[0] <= 0)
            .sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null
            ? void 0
            : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 =
                (_overflowsData$filter2 = overflowsData
                  .filter((d) => {
                    if (hasFallbackAxisSideDirection) {
                      const currentSideAxis = getSideAxis(d.placement);
                      return (
                        currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                        // reading directions favoring greater width.
                        currentSideAxis === "y"
                      );
                    }
                    return true;
                  })
                  .map((d) => [
                    d.placement,
                    d.overflows
                      .filter((overflow2) => overflow2 > 0)
                      .reduce((acc, overflow2) => acc + overflow2, 0),
                  ])
                  .sort((a, b) => a[1] - b[1])[0]) == null
                  ? void 0
                  : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement,
            },
          };
        }
      }
      return {};
    },
  };
};
async function convertValueToCoords(state, options) {
  const { placement, platform: platform2, elements } = state;
  const rtl = await (platform2.isRTL == null
    ? void 0
    : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let { mainAxis, crossAxis, alignmentAxis } =
    typeof rawValue === "number"
      ? {
          mainAxis: rawValue,
          crossAxis: 0,
          alignmentAxis: null,
        }
      : {
          mainAxis: 0,
          crossAxis: 0,
          alignmentAxis: null,
          ...rawValue,
        };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical
    ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti,
      }
    : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti,
      };
}
var offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const { x, y, placement, middlewareData } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (
        placement ===
          ((_middlewareData$offse = middlewareData.offset) == null
            ? void 0
            : _middlewareData$offse.placement) &&
        (_middlewareData$arrow = middlewareData.arrow) != null &&
        _middlewareData$arrow.alignmentOffset
      ) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement,
        },
      };
    },
  };
};
var shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const { x, y, placement } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let { x: x2, y: y2 } = _ref;
            return {
              x: x2,
              y: y2,
            };
          },
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y,
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord,
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
        },
      };
    },
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (
    (node == null || (_node$ownerDocument = node.ownerDocument) == null
      ? void 0
      : _node$ownerDocument.defaultView) || window
  );
}
function getDocumentElement(node) {
  var _ref;
  return (_ref =
    (isNode(node) ? node.ownerDocument : node.document) || window.document) ==
    null
    ? void 0
    : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return (
    value instanceof HTMLElement ||
    value instanceof getWindow(value).HTMLElement
  );
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return (
    value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot
  );
}
function isOverflowElement(element) {
  const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
  return (
    /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) &&
    !["inline", "contents"].includes(display)
  );
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle(element);
  return (
    css.transform !== "none" ||
    css.perspective !== "none" ||
    (css.containerType ? css.containerType !== "normal" : false) ||
    (!webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false)) ||
    (!webkit && (css.filter ? css.filter !== "none" : false)) ||
    ["transform", "perspective", "filter"].some((value) =>
      (css.willChange || "").includes(value),
    ) ||
    ["paint", "layout", "strict", "content"].some((value) =>
      (css.contain || "").includes(value),
    )
  );
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isTopLayer(currentNode)) {
      return null;
    }
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop,
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset,
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result =
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    (isShadowRoot(node) && node.host) || // Fallback.
    getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody =
    scrollableAncestor ===
    ((_node$ownerDocument2 = node.ownerDocument) == null
      ? void 0
      : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(
      win,
      win.visualViewport || [],
      isOverflowElement(scrollableAncestor) ? scrollableAncestor : [],
      win.frameElement && traverseIframes
        ? getOverflowAncestors(win.frameElement)
        : [],
    );
  }
  return list.concat(
    scrollableAncestor,
    getOverflowAncestors(scrollableAncestor, [], traverseIframes),
  );
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback =
    round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback,
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const { width, height, $ } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y,
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop,
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (
    !floatingOffsetParent ||
    (isFixed && floatingOffsetParent !== getWindow(element))
  ) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(
  element,
  includeScale,
  isFixedStrategy,
  offsetParent,
) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(
    domElement,
    isFixedStrategy,
    offsetParent,
  )
    ? getVisualOffsets(domElement)
    : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin =
      offsetParent && isElement(offsetParent)
        ? getWindow(offsetParent)
        : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left =
        iframeRect.left +
        (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) *
          iframeScale.x;
      const top =
        iframeRect.top +
        (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y,
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let { elements, rect, offsetParent, strategy } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || (topLayer && isFixed)) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0,
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
    if (
      getNodeName(offsetParent) !== "body" ||
      isOverflowElement(documentElement)
    ) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y,
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return (
    getBoundingClientRect(getDocumentElement(element)).left +
    getNodeScroll(element).scrollLeft
  );
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(
    html.scrollWidth,
    html.clientWidth,
    body.scrollWidth,
    body.clientWidth,
  );
  const height = max2(
    html.scrollHeight,
    html.clientHeight,
    body.scrollHeight,
    body.clientHeight,
  );
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle(body).direction === "rtl") {
    x += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y,
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || (visualViewportBased && strategy === "fixed")) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y,
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y,
  };
}
function getClientRectFromClippingAncestor(
  element,
  clippingAncestor,
  strategy,
) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (
    parentNode === stopNode ||
    !isElement(parentNode) ||
    isLastTraversableNode(parentNode)
  ) {
    return false;
  }
  return (
    getComputedStyle(parentNode).position === "fixed" ||
    hasFixedPositionAncestor(parentNode, stopNode)
  );
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(
    (el) => isElement(el) && getNodeName(el) !== "body",
  );
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed
      ? !currentNodeIsContaining && !currentContainingBlockComputedStyle
      : (!currentNodeIsContaining &&
          computedStyle.position === "static" &&
          !!currentContainingBlockComputedStyle &&
          ["absolute", "fixed"].includes(
            currentContainingBlockComputedStyle.position,
          )) ||
        (isOverflowElement(currentNode) &&
          !currentNodeIsContaining &&
          hasFixedPositionAncestor(element, currentNode));
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let { element, boundary, rootBoundary, strategy } = _ref;
  const elementClippingAncestors =
    boundary === "clippingAncestors"
      ? isTopLayer(element)
        ? []
        : getClippingElementAncestors(element, this._c)
      : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce(
    (accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(
        element,
        clippingAncestor,
        strategy,
      );
      accRect.top = max2(rect.top, accRect.top);
      accRect.right = min2(rect.right, accRect.right);
      accRect.bottom = min2(rect.bottom, accRect.bottom);
      accRect.left = max2(rect.left, accRect.left);
      return accRect;
    },
    getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy),
  );
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top,
  };
}
function getDimensions(element) {
  const { width, height } = getCssDimensions(element);
  return {
    width,
    height,
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0,
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
    if (
      getNodeName(offsetParent) !== "body" ||
      isOverflowElement(documentElement)
    ) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(
        offsetParent,
        true,
        isFixed,
        offsetParent,
      );
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height,
  };
}
function isStaticPositioned(element) {
  return getComputedStyle(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (
    !isHTMLElement(element) ||
    getComputedStyle(element).position === "fixed"
  ) {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (
    offsetParent &&
    isTableElement(offsetParent) &&
    isStaticPositioned(offsetParent)
  ) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (
    offsetParent &&
    isLastTraversableNode(offsetParent) &&
    isStaticPositioned(offsetParent) &&
    !isContainingBlock(offsetParent)
  ) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(
      data.reference,
      await getOffsetParentFn(data.floating),
      data.strategy,
    ),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height,
    },
  };
};
function isRTL(element) {
  return getComputedStyle(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL,
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const { left, top, width, height } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin =
      -insetTop +
      "px " +
      -insetRight +
      "px " +
      -insetBottom +
      "px " +
      -insetLeft +
      "px";
    const options = {
      rootMargin,
      threshold: max2(0, min2(1, threshold)) || 1,
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument,
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false,
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors =
    ancestorScroll || ancestorResize
      ? [
          ...(referenceEl ? getOverflowAncestors(referenceEl) : []),
          ...getOverflowAncestors(floating),
        ]
      : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll &&
      ancestor.addEventListener("scroll", update, {
        passive: true,
      });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo =
    referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null ||
            _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (
      prevRefRect &&
      (nextRefRect.x !== prevRefRect.x ||
        nextRefRect.y !== prevRefRect.y ||
        nextRefRect.width !== prevRefRect.width ||
        nextRefRect.height !== prevRefRect.height)
    ) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null ||
      _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var arrow2 = arrow;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options,
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache,
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache,
  });
};

// node_modules/@inkline/inkline/composables/usePopupControl.mjs
function usePopupControl(props) {
  const visible = ref(props.componentProps.value.visible);
  const instance = ref();
  const animating = ref(false);
  const triggerStack = ref(0);
  onMounted(() => {
    addEventListeners();
  });
  onUnmounted(() => {
    removeEventListeners();
  });
  watch(
    () => props.componentProps.value.visible,
    (value) => {
      if (value) {
        show();
      } else {
        hide2();
      }
    },
  );
  function addEventListeners() {
    const triggerRef = extractRefHTMLElement(props.triggerRef);
    const popupRef = extractRefHTMLElement(props.popupRef);
    if (!triggerRef || !popupRef) {
      return;
    }
    [].concat(props.componentProps.value.events).forEach((trigger) => {
      switch (trigger) {
        case "hover":
          on(
            triggerRef,
            "mouseenter",
            props.componentProps.value.interactable ? hoverShow : show,
          );
          on(
            triggerRef,
            "mouseleave",
            props.componentProps.value.interactable ? hoverHide : hide2,
          );
          if (props.componentProps.value.interactable) {
            on(popupRef, "mouseenter", hoverShow);
            on(popupRef, "mouseleave", hoverHide);
          }
          break;
        case "click":
          on(triggerRef, "click", onClick);
          break;
        case "focus":
          for (const child of triggerRef.children) {
            on(child, "focus", show);
            on(child, "blur", hide2);
          }
          break;
        default:
          break;
      }
    });
  }
  function removeEventListeners() {
    const triggerRef = extractRefHTMLElement(props.triggerRef);
    const popupRef = extractRefHTMLElement(props.popupRef);
    if (!triggerRef || !popupRef) {
      return;
    }
    [].concat(props.componentProps.value.events).forEach((trigger) => {
      switch (trigger) {
        case "hover":
          off(
            triggerRef,
            "mouseenter",
            props.componentProps.value.interactable ? hoverShow : show,
          );
          off(
            triggerRef,
            "mouseleave",
            props.componentProps.value.interactable ? hoverHide : hide2,
          );
          if (props.componentProps.value.interactable) {
            off(popupRef, "mouseenter", hoverShow);
            off(popupRef, "mouseleave", hoverHide);
          }
          break;
        case "click":
          off(triggerRef, "click", onClick);
          break;
        case "focus":
          for (const child of triggerRef.children) {
            off(child, "focus", show);
            off(child, "blur", hide2);
          }
          break;
        default:
          break;
      }
    });
  }
  function show() {
    if (
      props.componentProps.value.disabled ||
      props.componentProps.value.readonly ||
      visible.value
    ) {
      return;
    }
    triggerStack.value += 1;
    visible.value = true;
    createPopup();
    props.emit("update:visible", true);
  }
  function hide2() {
    if (
      props.componentProps.value.disabled ||
      props.componentProps.value.readonly ||
      !visible.value
    ) {
      return;
    }
    triggerStack.value -= 1;
    if (triggerStack.value <= 0) {
      triggerStack.value = 0;
      visible.value = false;
      props.emit("update:visible", false);
      setTimeout(
        () => destroyPopup(),
        props.componentProps.value.animationDuration,
      );
    }
  }
  function onClick() {
    if (visible.value) {
      hide2();
    } else {
      show();
    }
  }
  function onClickOutside() {
    props.emit("click:outside");
    if (!props.componentProps.value.visible) {
      hide2();
    }
  }
  function onKeyEscape() {
    hide2();
  }
  function hoverShow() {
    animating.value = false;
    show();
  }
  function hoverHide() {
    animating.value = true;
    setTimeout(() => {
      if (animating.value) {
        hide2();
      }
    }, props.componentProps.value.hoverHideDelay);
  }
  function createPopup() {
    if (typeof window === "undefined") {
      return;
    }
    const triggerRef = extractRefHTMLElement(props.triggerRef);
    const popupRef = extractRefHTMLElement(props.popupRef);
    const arrowRef = extractRefHTMLElement(props.arrowRef);
    if (!triggerRef || !popupRef) {
      throw new Error("Trigger and popup elements are required.");
    }
    instance.value = autoUpdate(triggerRef, popupRef, () => {
      computePosition2(triggerRef, popupRef, {
        strategy: "absolute",
        placement: props.componentProps.value.placement,
        middleware: [
          offset2(props.componentProps.value.offset),
          flip2(),
          shift2({ padding: 6 }),
        ].concat(arrowRef ? [arrow2({ element: arrowRef })] : []),
        ...props.componentProps.value.popupOptions,
      }).then(({ x, y, placement, middlewareData }) => {
        Object.assign(popupRef.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
        popupRef == null
          ? void 0
          : popupRef.setAttribute("data-popup-placement", placement);
        if (arrowRef) {
          const { x: arrowX, y: arrowY } = middlewareData.arrow;
          const staticSide = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right",
          }[placement.split("-")[0]];
          Object.assign(arrowRef.style, {
            left: arrowX !== null ? `${arrowX}px` : "",
            top: arrowY !== null ? `${arrowY}px` : "",
            right: "",
            bottom: "",
            [staticSide]: "-6px",
          });
        }
      });
    });
  }
  function destroyPopup() {
    if (instance.value) {
      instance.value();
      instance.value = void 0;
    }
  }
  function focusTrigger() {
    const triggerRef = extractRefHTMLElement(props.triggerRef);
    if (!triggerRef) {
      return;
    }
    for (const child of triggerRef.children) {
      if (focusFirstDescendant(child)) {
        child.focus();
        break;
      }
    }
  }
  return {
    visible,
    show,
    hide: hide2,
    onClick,
    onClickOutside,
    onKeyEscape,
    focusTrigger,
    createPopup,
    destroyPopup,
  };
}

// node_modules/@inkline/inkline/composables/useToast.mjs
function useToast() {
  return toastService;
}

// node_modules/@inkline/inkline/composables/useValidation.mjs
function useValidation(options) {
  var _a, _b;
  const inkline = useInkline();
  const form = inject(FormKey, null);
  const formGroup = inject(FormGroupKey, null);
  const schema = form
    ? computed(() => {
        var _a2;
        return (
          form.schema &&
          ((_a2 = options.validate) == null ? void 0 : _a2.value) &&
          getValueByPath(form.schema.value, options.name.value)
        );
      })
    : ref(((_a = options.schema) == null ? void 0 : _a.value) || null);
  if (!form && ((_b = options.schema) == null ? void 0 : _b.value)) {
    watch(
      () => {
        var _a2;
        return (_a2 = options.schema) == null ? void 0 : _a2.value;
      },
      (value) => {
        schema.value = value;
      },
    );
  }
  function shouldValidate(schema2, eventName) {
    var _a2, _b2;
    if (!((_a2 = options.validate) == null ? void 0 : _a2.value)) {
      return;
    }
    const events = schema2.validateOn
      ? [].concat(schema2.validateOn)
      : (_b2 = inkline == null ? void 0 : inkline.options) == null
        ? void 0
        : _b2.validateOn;
    return events.includes(eventName);
  }
  async function setValue(name, value) {
    var _a2, _b2;
    if (!((_a2 = options.validate) == null ? void 0 : _a2.value)) {
      return;
    }
    let resolvedSchema = clone(schema.value);
    const targetSchema = getValueByPath(resolvedSchema, name);
    if (!targetSchema) {
      throw new Error(
        'Schema to be validated not found. Did you forget to match the schema key to the input "name" prop?',
      );
    }
    resolvedSchema = setValueByPath(resolvedSchema, `${name}.value`, value);
    resolvedSchema = setValuesAlongPath(resolvedSchema, name, {
      pristine: false,
      dirty: true,
    });
    if (shouldValidate(targetSchema, "input")) {
      resolvedSchema = await validateSchema(resolvedSchema);
    }
    schema.value = resolvedSchema;
    (_b2 = options.onUpdate) == null
      ? void 0
      : _b2.call(options, resolvedSchema);
  }
  async function setTouched(name, event) {
    var _a2, _b2;
    if (!((_a2 = options.validate) == null ? void 0 : _a2.value)) {
      return;
    }
    let resolvedSchema = clone(schema.value);
    const targetSchema = getValueByPath(resolvedSchema, name);
    if (!targetSchema) {
      throw new Error(
        'Schema to be validated not found. Did you forget to match the schema key to the input "name" prop?',
      );
    }
    resolvedSchema = setValuesAlongPath(resolvedSchema, name, {
      untouched: false,
      touched: true,
    });
    if (shouldValidate(targetSchema, event.type)) {
      resolvedSchema = await validateSchema(resolvedSchema);
    }
    schema.value = resolvedSchema;
    (_b2 = options.onUpdate) == null
      ? void 0
      : _b2.call(options, resolvedSchema);
  }
  async function onSubmit(event) {
    var _a2, _b2, _c;
    if (!((_a2 = options.validate) == null ? void 0 : _a2.value)) {
      return;
    }
    let resolvedSchema = await validateSchema(schema.value);
    resolvedSchema = setSchemaStateRecursively(resolvedSchema, {
      untouched: false,
      touched: true,
    });
    if (resolvedSchema.valid) {
      (_b2 = options.onSubmit) == null ? void 0 : _b2.call(options, event);
    }
    schema.value = resolvedSchema;
    (_c = options.onUpdate) == null ? void 0 : _c.call(options, resolvedSchema);
  }
  async function onInput(nameRef, value) {
    var _a2, _b2;
    const name = unref(nameRef);
    if (!((_a2 = options.validate) == null ? void 0 : _a2.value) || !name) {
      return;
    }
    if (formGroup) {
      formGroup.onInput(name, value);
    } else if (form) {
      form.onInput(name, value);
    } else if ((_b2 = options.schema) == null ? void 0 : _b2.value) {
      await setValue(name, value);
    }
  }
  function onBlur(nameRef, event) {
    var _a2, _b2;
    const name = unref(nameRef);
    if (!((_a2 = options.validate) == null ? void 0 : _a2.value) || !name) {
      return;
    }
    if (formGroup) {
      formGroup.onBlur(name, event);
    } else if (form) {
      form.onBlur(name, event);
    } else if ((_b2 = options.schema) == null ? void 0 : _b2.value) {
      setTouched(name, event);
    }
  }
  return { schema, onSubmit, onInput, onBlur };
}
function useFormValidationError(options) {
  const hasError = computed(() => {
    if (typeof options.error.value === "boolean") {
      return options.error.value;
    } else if (options.schema.value && options.error.value) {
      let visible = true;
      [].concat(options.error.value).forEach((status) => {
        visible = visible && options.schema.value[status];
      });
      return visible;
    }
    return false;
  });
  return { hasError };
}

// node_modules/@inkline/inkline/controllers/OverlayController.mjs
var OverlayController = {
  instances: {},
  stack: [],
  zIndex: 1050,
  register(instance) {
    const name = unref(instance.name);
    if (name) {
      OverlayController.instances[name] = instance;
    }
  },
  unregister(instance) {
    const name = unref(instance.name);
    if (name) {
      OverlayController.instances[name] = null;
      delete OverlayController.instances[name];
    }
  },
  open(name) {
    if (typeof window === "undefined") {
      return;
    }
    OverlayController.stack.push(name);
    const element = unref(OverlayController.instances[name].elementRef);
    if (element) {
      element.style.zIndex = OverlayController.zIndex++;
    }
  },
  close(name) {
    if (typeof window === "undefined") {
      return;
    }
    OverlayController.stack.splice(OverlayController.stack.indexOf(name), 1);
  },
  getTopOverlay() {
    const topOverlayName = OverlayController.stack.slice(-1)[0] || "";
    return OverlayController.instances[topOverlayName];
  },
  onPressEscape() {
    const topOverlay = OverlayController.getTopOverlay();
    if (topOverlay && topOverlay.closeOnPressEscape) {
      topOverlay.hide();
    }
  },
};

// node_modules/@inkline/inkline/plugins/colorMode.mjs
var onChangeColorMode = (colorMode) => {
  let color;
  if (colorMode === "system") {
    color = matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } else {
    color = colorMode;
  }
  removeClass(document.documentElement, "light-theme dark-theme");
  addClass(document.documentElement, `${color}-theme`);
};
var colorModeLocalStorageKey = "inkline-color-mode";
var ColorModePlugin = {
  install: (app, { inkline, renderMode }) => {
    if (typeof window !== "undefined") {
      const onDarkModeMediaQueryChange = () => {
        if (inkline.options.colorMode === "system") {
          onChangeColorMode(inkline.options.colorMode);
        }
      };
      const darkModeMediaQuery = matchMedia("(prefers-color-scheme: dark)");
      if (darkModeMediaQuery.addEventListener) {
        darkModeMediaQuery.addEventListener(
          "change",
          onDarkModeMediaQueryChange,
        );
      } else {
        darkModeMediaQuery.addListener(onDarkModeMediaQueryChange);
      }
      watch(
        () => inkline.options.colorMode,
        (colorMode) => {
          onChangeColorMode(colorMode);
          if (inkline.options.colorModeStrategy === "localStorage") {
            localStorage.setItem(colorModeLocalStorageKey, colorMode);
          }
        },
      );
      if (
        inkline.options.colorModeStrategy === "localStorage" &&
        renderMode === "client"
      ) {
        const storedColorMode = localStorage.getItem(colorModeLocalStorageKey);
        if (storedColorMode) {
          inkline.options.colorMode = storedColorMode;
        }
      } else {
        onChangeColorMode(inkline.options.colorMode);
      }
    }
  },
};

// node_modules/@inkline/inkline/icons.mjs
var icons_exports = {};
__export(icons_exports, {
  inkCaretDown: () => inkCaretDown,
  inkCheck: () => inkCheck,
  inkChevronDown: () => inkChevronDown,
  inkCircle: () => inkCircle,
  inkClear: () => inkClear,
  inkDanger: () => inkDanger,
  inkEye: () => inkEye,
  inkEyeOff: () => inkEyeOff,
  inkInfo: () => inkInfo,
  inkMinus: () => inkMinus,
  inkPlus: () => inkPlus,
  inkSearch: () => inkSearch,
  inkSort: () => inkSort,
  inkSortAsc: () => inkSortAsc,
  inkSortDesc: () => inkSortDesc,
  inkTimes: () => inkTimes,
  inkWarning: () => inkWarning,
});
var inkCaretDown = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "28",
    viewBox: "0 0 16 28",
    fill: "currentColor",
  },
  children: [
    {
      name: "title",
      type: "element",
      value: "",
      attributes: {},
      children: [
        {
          name: "",
          type: "text",
          value: "caret-down",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M16 11c0 0.266-0.109 0.516-0.297 0.703l-7 7c-0.187 0.187-0.438 0.297-0.703 0.297s-0.516-0.109-0.703-0.297l-7-7c-0.187-0.187-0.297-0.438-0.297-0.703 0-0.547 0.453-1 1-1h14c0.547 0 1 0.453 1 1z",
      },
      children: [],
    },
  ],
};
var inkCheck = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "currentColor",
  },
  children: [
    {
      name: "title",
      type: "element",
      value: "",
      attributes: {},
      children: [
        {
          name: "",
          type: "text",
          value: "check",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M23.625 3.5l-13.125 13.125-6.125-6.125-4.375 4.375 10.5 10.5 17.5-17.5z",
      },
      children: [],
    },
  ],
};
var inkChevronDown = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "currentColor",
  },
  children: [
    {
      name: "title",
      type: "element",
      value: "",
      attributes: {},
      children: [
        {
          name: "",
          type: "text",
          value: "chevron-down",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M26.297 12.625l-11.594 11.578c-0.391 0.391-1.016 0.391-1.406 0l-11.594-11.578c-0.391-0.391-0.391-1.031 0-1.422l2.594-2.578c0.391-0.391 1.016-0.391 1.406 0l8.297 8.297 8.297-8.297c0.391-0.391 1.016-0.391 1.406 0l2.594 2.578c0.391 0.391 0.391 1.031 0 1.422z",
      },
      children: [],
    },
  ],
};
var inkCircle = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "28",
    viewBox: "0 0 24 28",
    fill: "currentColor",
  },
  children: [
    {
      name: "title",
      type: "element",
      value: "",
      attributes: {},
      children: [
        {
          name: "",
          type: "text",
          value: "circle",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z",
      },
      children: [],
    },
  ],
};
var inkDanger = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "currentColor",
  },
  children: [
    {
      name: "title",
      type: "element",
      value: "",
      attributes: {},
      children: [
        {
          name: "",
          type: "text",
          value: "danger",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M14 2.625c-3.038 0-5.895 1.183-8.043 3.332s-3.332 5.005-3.332 8.043c0 3.038 1.183 5.895 3.332 8.043s5.005 3.332 8.043 3.332c3.038 0 5.895-1.183 8.043-3.332s3.332-5.005 3.332-8.043c0-3.038-1.183-5.895-3.332-8.043s-5.005-3.332-8.043-3.332zM14 0v0c7.732 0 14 6.268 14 14s-6.268 14-14 14c-7.732 0-14-6.268-14-14s6.268-14 14-14zM12.25 19.25h3.5v3.5h-3.5zM12.25 5.25h3.5v10.5h-3.5z",
      },
      children: [],
    },
  ],
};
var inkInfo = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "currentColor",
  },
  children: [
    {
      name: "title",
      type: "element",
      value: "",
      attributes: {},
      children: [
        { name: "", type: "text", value: "info", attributes: {}, children: [] },
      ],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M12.25 8.313c0-0.722 0.591-1.313 1.313-1.313h0.875c0.722 0 1.313 0.591 1.313 1.313v0.875c0 0.722-0.591 1.313-1.313 1.313h-0.875c-0.722 0-1.313-0.591-1.313-1.313v-0.875z",
      },
      children: [],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M17.5 21h-7v-1.75h1.75v-5.25h-1.75v-1.75h5.25v7h1.75z",
      },
      children: [],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M14 0c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zM14 25.375c-6.282 0-11.375-5.093-11.375-11.375s5.093-11.375 11.375-11.375 11.375 5.093 11.375 11.375-5.093 11.375-11.375 11.375z",
      },
      children: [],
    },
  ],
};
var inkMinus = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "currentColor",
  },
  children: [
    {
      name: "title",
      type: "element",
      value: "",
      attributes: {},
      children: [
        {
          name: "",
          type: "text",
          value: "minus",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M0 11.375v5.25c0 0.483 0.392 0.875 0.875 0.875h26.25c0.483 0 0.875-0.392 0.875-0.875v-5.25c0-0.483-0.392-0.875-0.875-0.875h-26.25c-0.483 0-0.875 0.392-0.875 0.875z",
      },
      children: [],
    },
  ],
};
var inkPlus = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "currentColor",
  },
  children: [
    {
      name: "title",
      type: "element",
      value: "",
      attributes: {},
      children: [
        { name: "", type: "text", value: "plus", attributes: {}, children: [] },
      ],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M27.125 10.5h-9.625v-9.625c0-0.483-0.392-0.875-0.875-0.875h-5.25c-0.483 0-0.875 0.392-0.875 0.875v9.625h-9.625c-0.483 0-0.875 0.392-0.875 0.875v5.25c0 0.483 0.392 0.875 0.875 0.875h9.625v9.625c0 0.483 0.392 0.875 0.875 0.875h5.25c0.483 0 0.875-0.392 0.875-0.875v-9.625h9.625c0.483 0 0.875-0.392 0.875-0.875v-5.25c0-0.483-0.392-0.875-0.875-0.875z",
      },
      children: [],
    },
  ],
};
var inkSearch = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "currentColor",
  },
  children: [
    {
      name: "title",
      type: "element",
      value: "",
      attributes: {},
      children: [
        {
          name: "",
          type: "text",
          value: "search",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M27.132 23.827l-6.632-5.641c-0.686-0.617-1.419-0.9-2.011-0.873 1.566-1.834 2.511-4.213 2.511-6.813 0-5.799-4.701-10.5-10.5-10.5s-10.5 4.701-10.5 10.5 4.701 10.5 10.5 10.5c2.6 0 4.98-0.946 6.813-2.511-0.027 0.592 0.256 1.326 0.873 2.011l5.641 6.632c0.966 1.073 2.544 1.164 3.506 0.201s0.872-2.54-0.201-3.506zM10.5 17.5c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z",
      },
      children: [],
    },
  ],
};
var inkSortAsc = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "28",
    viewBox: "0 0 16 28",
    fill: "currentColor",
  },
  children: [
    {
      name: "title",
      type: "element",
      value: "",
      attributes: {},
      children: [
        {
          name: "",
          type: "text",
          value: "sort-asc",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M16 11c0 0.547-0.453 1-1 1h-14c-0.547 0-1-0.453-1-1 0-0.266 0.109-0.516 0.297-0.703l7-7c0.187-0.187 0.438-0.297 0.703-0.297s0.516 0.109 0.703 0.297l7 7c0.187 0.187 0.297 0.438 0.297 0.703z",
      },
      children: [],
    },
  ],
};
var inkSortDesc = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "28",
    viewBox: "0 0 16 28",
    fill: "currentColor",
  },
  children: [
    {
      name: "title",
      type: "element",
      value: "",
      attributes: {},
      children: [
        {
          name: "",
          type: "text",
          value: "sort-desc",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M16 17c0 0.266-0.109 0.516-0.297 0.703l-7 7c-0.187 0.187-0.438 0.297-0.703 0.297s-0.516-0.109-0.703-0.297l-7-7c-0.187-0.187-0.297-0.438-0.297-0.703 0-0.547 0.453-1 1-1h14c0.547 0 1 0.453 1 1z",
      },
      children: [],
    },
  ],
};
var inkSort = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "28",
    viewBox: "0 0 16 28",
    fill: "currentColor",
  },
  children: [
    {
      name: "title",
      type: "element",
      value: "",
      attributes: {},
      children: [
        { name: "", type: "text", value: "sort", attributes: {}, children: [] },
      ],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M16 17c0 0.266-0.109 0.516-0.297 0.703l-7 7c-0.187 0.187-0.438 0.297-0.703 0.297s-0.516-0.109-0.703-0.297l-7-7c-0.187-0.187-0.297-0.438-0.297-0.703 0-0.547 0.453-1 1-1h14c0.547 0 1 0.453 1 1zM16 11c0 0.547-0.453 1-1 1h-14c-0.547 0-1-0.453-1-1 0-0.266 0.109-0.516 0.297-0.703l7-7c0.187-0.187 0.438-0.297 0.703-0.297s0.516 0.109 0.703 0.297l7 7c0.187 0.187 0.297 0.438 0.297 0.703z",
      },
      children: [],
    },
  ],
};
var inkTimes = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "currentColor",
  },
  children: [
    {
      name: "title",
      type: "element",
      value: "",
      attributes: {},
      children: [
        {
          name: "",
          type: "text",
          value: "times",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M27.745 22.495c-0-0-0-0-0-0l-8.494-8.494 8.494-8.494c0-0 0-0 0-0 0.091-0.091 0.158-0.198 0.2-0.312 0.116-0.311 0.050-0.675-0.2-0.925l-4.013-4.013c-0.25-0.25-0.614-0.316-0.925-0.2-0.114 0.042-0.221 0.109-0.312 0.2 0 0-0 0-0 0l-8.494 8.494-8.494-8.494c-0-0-0-0-0-0-0.091-0.091-0.198-0.158-0.312-0.2-0.311-0.116-0.675-0.050-0.925 0.2l-4.013 4.013c-0.25 0.25-0.316 0.614-0.2 0.925 0.042 0.114 0.109 0.221 0.2 0.312 0 0 0 0 0 0l8.494 8.494-8.494 8.494c-0 0-0 0-0 0-0.091 0.091-0.157 0.198-0.2 0.312-0.116 0.311-0.050 0.675 0.2 0.925l4.013 4.013c0.25 0.25 0.614 0.316 0.925 0.2 0.114-0.042 0.221-0.109 0.312-0.2 0-0 0-0 0-0l8.494-8.494 8.494 8.494c0 0 0 0 0 0 0.092 0.091 0.198 0.158 0.312 0.2 0.311 0.116 0.675 0.050 0.925-0.2l4.013-4.013c0.25-0.25 0.316-0.614 0.2-0.925-0.042-0.114-0.109-0.221-0.2-0.312z",
      },
      children: [],
    },
  ],
};
var inkWarning = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "currentColor",
  },
  children: [
    {
      name: "title",
      type: "element",
      value: "",
      attributes: {},
      children: [
        {
          name: "",
          type: "text",
          value: "warning",
          attributes: {},
          children: [],
        },
      ],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M14 2.537l11.733 23.385h-23.467l11.733-23.385zM14 0c-0.603 0-1.207 0.407-1.665 1.221l-11.951 23.819c-0.916 1.628-0.137 2.96 1.731 2.96h23.77c1.868 0 2.647-1.332 1.731-2.96h0l-11.951-23.819c-0.458-0.814-1.061-1.221-1.665-1.221v0z",
      },
      children: [],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M15.75 22.75c0 0.966-0.784 1.75-1.75 1.75s-1.75-0.784-1.75-1.75c0-0.966 0.784-1.75 1.75-1.75s1.75 0.784 1.75 1.75z",
      },
      children: [],
    },
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        d: "M14 19.25c-0.966 0-1.75-0.784-1.75-1.75v-5.25c0-0.966 0.784-1.75 1.75-1.75s1.75 0.784 1.75 1.75v5.25c0 0.966-0.784 1.75-1.75 1.75z",
      },
      children: [],
    },
  ],
};
var inkEye = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
  },
  children: [
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        fill: "currentColor",
        d: "M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z",
      },
      children: [],
    },
  ],
};
var inkEyeOff = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
  },
  children: [
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        fill: "currentColor",
        d: "M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z",
      },
      children: [],
    },
  ],
};
var inkClear = {
  name: "svg",
  type: "element",
  value: "",
  attributes: {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
  },
  children: [
    {
      name: "path",
      type: "element",
      value: "",
      attributes: {
        fill: "currentColor",
        d: "M15.71 8.29a1 1 0 0 0-1.42 0L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0 0-1.42Zm3.36-3.36A10 10 0 1 0 4.93 19.07A10 10 0 1 0 19.07 4.93Zm-1.41 12.73A8 8 0 1 1 20 12a7.95 7.95 0 0 1-2.34 5.66Z",
      },
      children: [],
    },
  ],
};

// node_modules/@inkline/inkline/plugins/icons.mjs
var IconsPlugin = {
  install: (app, { icons } = { icons: {} }) => {
    app.provide(InklineIconsKey, {
      ...icons_exports,
      ...icons,
    });
  },
};

// node_modules/@inkline/inkline/plugins/modal.mjs
var ModalPlugin = {
  install: (app, { inkline }) => {
    app.config.globalProperties.$modal = modalService;
    app.provide(InklineModalKey, modalService);
    if (typeof window === "undefined") {
      return;
    }
    const containerId = defaultModalContainerId;
    const containerDataAttrbiute = `data-${containerId}`;
    let container = document.querySelector(`#${containerId}`);
    if (!container) {
      container = document.createElement("div");
      container.id = containerId;
      document.body.appendChild(container);
    }
    if (!container.hasAttribute(containerDataAttrbiute)) {
      const modalApp = createApp(default39, {
        eventBus: modalEventBus,
      });
      modalApp.provide(InklineKey, inkline);
      modalApp.use(IconsPlugin);
      container.setAttribute(containerDataAttrbiute, "");
      modalApp.mount(container);
    }
  },
};

// node_modules/@inkline/inkline/plugins/overlay.mjs
var OverlayPlugin = {
  install: () => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", (e) => {
        if (isKey("esc", e)) {
          OverlayController.onPressEscape();
        }
      });
    }
  },
};

// node_modules/@inkline/inkline/plugins/toast.mjs
var ToastPlugin = {
  install: (app, { inkline }) => {
    app.config.globalProperties.$toast = toastService;
    app.provide(InklineToastKey, toastService);
    if (typeof window === "undefined") {
      return;
    }
    const containerId = defaultToastContainerId;
    const containerDataAttribute = `data-${containerId}`;
    let container = document.querySelector(`#${containerId}`);
    if (!container) {
      container = document.createElement("div");
      container.id = containerId;
      document.body.appendChild(container);
    }
    if (!container.hasAttribute(containerDataAttribute)) {
      const toastApp = createApp(default63, {
        eventBus: toastEventBus,
      });
      toastApp.provide(InklineKey, inkline);
      toastApp.use(IconsPlugin);
      container.setAttribute(containerDataAttribute, "");
      toastApp.mount(container);
    }
  },
};

// node_modules/@inkline/inkline/plugin.mjs
function createInklineService({
  icons,
  // eslint-disable-line @typescript-eslint/no-unused-vars
  components,
  // eslint-disable-line @typescript-eslint/no-unused-vars
  ...options
}) {
  return {
    form(schema) {
      return createSchema(schema);
    },
    setLocale(locale) {
      setLocale(locale);
    },
    options: reactive(options),
  };
}
var defaultOptions = {
  color: "",
  colorMode: "system",
  colorModeStrategy: "localStorage",
  components: {},
  componentOptions: {},
  icons: {},
  locale: "en",
  renderMode: "client",
  routerComponent: "RouterLink",
  size: "",
  validateOn: ["input", "blur"],
  toast: {
    position: "bottom-right",
    duration: 3500,
  },
  modal: {},
};
var Inkline = {
  install(app, options = {}) {
    const { components, icons, renderMode, ...overrideOptions } = options;
    const extendedOptions = {
      ...defaultOptions,
      ...overrideOptions,
    };
    for (const componentIndex in components) {
      app.component(componentIndex, components[componentIndex]);
    }
    const inklineService = createInklineService(extendedOptions);
    app.config.globalProperties.$inkline = inklineService;
    app.provide(InklineKey, inklineService);
    if (typeof window !== "undefined") {
      addClass(document.body, "inkline");
    }
    app.use(ColorModePlugin, { inkline: inklineService, renderMode });
    app.use(IconsPlugin, { icons });
    app.use(ModalPlugin, { inkline: inklineService });
    app.use(OverlayPlugin);
    app.use(ToastPlugin, { inkline: inklineService });
  },
};
export {
  ButtonGroupKey,
  CheckboxGroupKey,
  CollapsibleKey,
  ColorModePlugin,
  DropdownKey,
  FormGroupKey,
  FormKey,
  default2 as IAlert,
  default3 as IBadge,
  default4 as IBreadcrumb,
  default5 as IBreadcrumbItem,
  default6 as IButton,
  default7 as IButtonGroup,
  default8 as ICard,
  default66 as ICheckableButtonGroup,
  default9 as ICheckbox,
  default10 as ICheckboxButtons,
  default11 as ICheckboxGroup,
  default12 as ICollapsible,
  default13 as ICollapsibleItem,
  default14 as IColumn,
  default15 as IContainer,
  default16 as IDropdown,
  default17 as IDropdownDivider,
  default18 as IDropdownItem,
  default19 as IExpandTransition,
  default20 as IForm,
  default22 as IFormError,
  default21 as IFormGroup,
  default23 as IFormLabel,
  default24 as IHamburgerMenu,
  default25 as IHeader,
  default26 as IIcon,
  default27 as IInput,
  default28 as ILayout,
  default29 as ILayoutAside,
  default30 as ILayoutContent,
  default31 as ILayoutFooter,
  default32 as ILayoutHeader,
  default33 as IListGroup,
  default34 as IListGroupItem,
  default35 as ILoader,
  default36 as IMark,
  default37 as IMedia,
  default38 as IModal,
  default39 as IModalContainer,
  default40 as INav,
  default41 as INavItem,
  default42 as INavbar,
  default43 as INavbarBrand,
  default44 as INavbarCollapsible,
  default45 as INumberInput,
  default46 as IPagination,
  default47 as IPopover,
  default48 as IProgress,
  default49 as IProgressBar,
  default50 as IRadio,
  default51 as IRadioButtons,
  default52 as IRadioGroup,
  IRenderResolver_default as IRenderResolver,
  default53 as IRow,
  default54 as ISelect,
  default55 as ISelectOption,
  default56 as ISidebar,
  default59 as ITab,
  default60 as ITabTitle,
  default57 as ITable,
  default58 as ITabs,
  default61 as ITextarea,
  default62 as IToast,
  default63 as IToastContainer,
  default64 as IToggle,
  default65 as ITooltip,
  IconsPlugin,
  Inkline,
  InklineIconsKey,
  InklineKey,
  InklineModalKey,
  InklineToastKey,
  ModalPlugin,
  NavKey,
  NavbarKey,
  OverlayController,
  OverlayPlugin,
  ProgressKey,
  RadioGroupKey,
  SelectKey,
  SidebarKey,
  TabsKey,
  ToastPlugin,
  alpha2 as alpha,
  alphanumeric2 as alphanumeric,
  breakpointClassName,
  breakpointKeys,
  breakpoints,
  colorModeLocalStorageKey,
  components_exports as components,
  createFormArraySchema,
  createFormFieldSchema,
  createFormSchema,
  createInklineService,
  createSchema,
  createSchemaFromDefaults,
  custom,
  defaultModalContainerId,
  defaultOptions,
  defaultToastContainerId,
  defaultValidationFieldValues,
  defaultValidationStateValues,
  email,
  eventValueMap,
  extractRefHTMLElement,
  i18n,
  interpolate,
  isFormField,
  isFormFieldArray,
  isFormGroup,
  isFormGroupArray,
  keymap2 as keymap,
  max,
  maxLength,
  min,
  minLength,
  modalEventBus,
  modalService,
  number,
  onChangeColorMode,
  registerValidator,
  renderSvg,
  required,
  reservedValidationFields,
  sameAs,
  serializeSchema,
  setLocale,
  setSchemaStateRecursively,
  toastEventBus,
  toastService,
  translate,
  unregisterValidator,
  useAlert,
  useClickOutside,
  useCollapsible,
  useComponentColor,
  useComponentSize,
  useConfirm,
  useForm,
  useFormValidationError,
  useInkline,
  useIsServer,
  useLinkable,
  useModal,
  useModalBuilder,
  usePopupControl,
  usePrompt,
  useToast,
  useValidation,
  validateForm,
  validateFormArray,
  validateFormField,
  validateFormFieldArray,
  validateSchema,
  validators,
};
//# sourceMappingURL=@inkline_inkline.js.map
