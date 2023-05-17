AFRAME.registerComponent("tour", {
  init: function () {
    this.comicContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Captain Aero",
        url: "assets/posters/captain-aero-poster.jpg",
      },
      {
        id: "budapest",
        title: "Outer Space",
        url: "assets/posters/outer-space-poster.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Spiderman",
        url: "assets/posters/spiderman-poster.jpg",
      },
      {
        id: "new-york-city",
        title: "Superman",
        url: "assets/posters/superman-poster.jpg",
      },
    ];
    let previousXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item);
      // Thumbnail Element
      const thumbnail = this.createThumbnail(item);
      borderEl.appendChild(thumbnail);
      // Title Text Element
      const titleEl = this.createTitle(position,item);
      borderEl.appendChild(titleEl);
      this.comicContainer.appendChild(borderEl);
    }
  },
  
  createBorder: function(position, id){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id",id);
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("geometry",{primitive:"plane", width:22, height:30});
    entityEl.setAttribute("position",position);
    entityEl.setAttribute("material",{color:"#0077cc", opacity:1});
    return entityEl;
  },
  createThumbnail: function(item){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
    });

    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
  createTitle: function(position, item){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("text",{font:"exo2bold", align:"center", width:70, color:"#e65100", value:item.title});
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position",elPosition);
    return entityEl;
  },
});
