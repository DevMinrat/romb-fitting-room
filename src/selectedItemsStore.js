function setFirstSelectedItems() {
  const objItems = [
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
  ];

  localStorage.setItem("firstRenderItems", false);

  if (!JSON.parse(localStorage.getItem("firstRenderItems"))) {
    localStorage["firstRenderItems"] = true;
    localStorage.setItem("selectedItems", JSON.stringify(objItems));
  }
}

export default setFirstSelectedItems;
