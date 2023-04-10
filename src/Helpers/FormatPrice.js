const FormatPrice = ({ price }) => {
    return Intl.NumberFormat("VN", {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 2,
    }).format(price);
};

export default FormatPrice;