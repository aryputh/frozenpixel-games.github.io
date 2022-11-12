// Footer
document.querySelector("footer").innerHTML = `&copy; ${new Date().getFullYear().toString()} FrozenPixel Games`;

// Cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor");

document.body.appendChild(cursor);
document.addEventListener("mousemove", (e) => {
    const mouseLeft = e.pageX + 4;
    const mouseTop = e.pageY + 4;

    cursor.style.left = `${mouseLeft}px`;
    cursor.style.top = `${mouseTop}px`;
});
document.addEventListener("mousedown", () => {
    if (!cursor.classList.contains("large")) cursor.classList.add("large");
});
document.addEventListener("mouseup", () => {
    if (cursor.classList.contains("large")) cursor.classList.remove("large");
})