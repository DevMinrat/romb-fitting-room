function setFirstSelectedItems() {
  const objItems = [
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
    {
      id: 0,
    },
  ];

  if (localStorage.getItem("selectedItems") === null) {
    localStorage.setItem("selectedItems", JSON.stringify(objItems));
  }
}

export default setFirstSelectedItems;
