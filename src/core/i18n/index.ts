

import { I18nManager } from "./i18n-manager";

export let i18nManager = new I18nManager();

export let t = i18nManager.translate.bind(i18nManager);