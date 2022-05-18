import React from "react";

export default function ItemDetailContainer() {
  const [teclado, setTeclado] = React.useState([]);

  const getTeclado = new Promise((resolve, reject) => {
    resolve();
  }).then(() => {
    console.log("getItem");
  });

  React.useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=teclados")
      .then((response) => response.json())
      .then((json) => setTeclado(json.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="ItemDetailContainer">
      {teclado.map((item) => console.log({ item }))}
    </div>
  );
}
