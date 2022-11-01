const mixins = {
  methods: {
    formatPrice(value) {
      return new Intl.NumberFormat("id-ID", {
        minimumFractionDigits: 3,
      }).format(value);
    },
    percentage(partialValue, totalValue) {
      return (100 * partialValue) / totalValue;
    },
    maxDate(maxDate) {
      const date = new Date();
      const now =
        date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2);

      if (now == maxDate) {
        return true;
      }

      if (now > maxDate) {
        return true;
      }

      return false;
    },
    countDay(maxDate) {
      const date = new Date();
      const now =
        date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2);

      const dt1 = new Date(now);
      const dt2 = new Date(maxDate);

      const result =
        Math.floor(
          Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
            Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())
        ) /
        (1000 * 60 * 60 * 24);

      if (result < 0) {
        return 0;
      }

      return result;
    },
  },
};

export default mixins;
