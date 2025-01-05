document.addEventListener("DOMContentLoaded", () => {
    const voucherButton = document.querySelector(".voucher-section button");

    voucherButton.addEventListener("click", () => {
        const voucherInput = document.querySelector("#voucher").value;
        if (voucherInput) {
            alert(`Kode promo "${voucherInput}" digunakan.`);
        } else {
            alert("Silakan masukkan kode promo terlebih dahulu.");
        }
    });
});
