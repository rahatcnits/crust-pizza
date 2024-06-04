document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("datepicker");

    dateInput.addEventListener("input", function() {
        const input = dateInput.value.replace(/\D/g, ''); // Remove all non-numeric characters
        let formattedDate = '';

        if (input.length <= 2) {
            formattedDate = input;
        } else if (input.length <= 4) {
            formattedDate = `${input.slice(0, 2)}/${input.slice(2)}`;
        } else {
            formattedDate = `${input.slice(0, 2)}/${input.slice(2, 4)}/${input.slice(4, 8)}`;
        }

        dateInput.value = formattedDate;
    });
});
