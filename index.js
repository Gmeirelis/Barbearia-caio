<script>
    const menuBtn = document.querySelector("header i");
    const menuMobile = document.getElementById("menu-mobile");

    menuBtn.addEventListener("click", () => {
        menuMobile.classList.toggle("menu-open");
    });
</script>
