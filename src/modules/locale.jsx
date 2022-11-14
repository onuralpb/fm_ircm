import Numeral from "numeral";

const locale = () => {
  // load a locale
  Numeral.register("locale", "tr", {
    delimiters: {
      thousands: " ",
      decimal: ",",
    },
    abbreviations: {
      thousand: "bn",
      million: "mn",
      billion: "mr",
      trillion: "tn",
    },
    ordinal: function (number) {
      return number === 1 ? "inci" : "ème";
    },
    currency: {
      symbol: "₺",
    },
  });

  // switch between locales
  Numeral.locale("tr");
};

export default locale;
