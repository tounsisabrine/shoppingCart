let productsdb =[

    { id: 1,
      title: "Micro-casque"  ,
      size:"Large",
      imageUrl:"images/microcasque.jpg.",
    },
    { id: 2,
        title: "Laptop"  ,
        size:"Large",
        imageUrl:"images/laptop.jpg",
      },
      { id: 3,
        title: "Mouse"  ,
        size:"Small",
        imageUrl:"images/mouse.jpg",
      },
      { id: 4,
        title: "Tablette"  ,
        size:"Meduim",
        imageUrl:"images/tablette.jpg",
      },


    ];
    localStorage.setItem("products", JSON.stringify(productsdb));