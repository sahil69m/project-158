createPoster: function (item) {
    const entityE1 = document.createElement("a-entity");
    entityEl.setAttribute("visible",true);
    entityE1.setAttribute("geometry",{
        primitive: "plane",
        width:20,
        height:28
    }),
    entityE1.setAttribute("position",{x: 0, y: 5,Z:0.1}),
    entityE1.setAttribute("material",{src: item.url})
} 

handleMouseEvents: function () {
    //Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
        const id = this.el.getAttribute("id");
        const posterId = [
            "superman",
            "spiderman",
            "caption-aero",
            "outer-space",
        ];

        if (posterId.includes(id)) {
            const postersContainer = document.querySelector("#poster-container");
            postersContainer.setAttribute("cursor-listener", {
                selectedId: id,
            });
            this.el.setAttribute("material",{ color: "#1565c0"});
        }
    });
}
init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
},