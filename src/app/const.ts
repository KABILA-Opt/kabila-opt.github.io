const IMG_FOLDER = "/img";

const convenientStore = (key: string, value?: string) => {
  if (value === undefined) return window.localStorage.getItem(key);
  return window.localStorage.setItem(key, value.toString());
};

type Locale = "en" | "fr";

const LOCALE_KEY = "__locale";

function params(k: string) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(k);
}

function locale(v?: Locale) {
  if (!v) {
    return convenientStore(LOCALE_KEY) || "en";
  }

  convenientStore(LOCALE_KEY, v);
}
