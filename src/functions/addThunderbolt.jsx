const addThunderbolt = (Pokemon) => {
  const updatedComponent = () => {
    const thunderboltMove = () => {
      window.alert("I'm a goddamn thunderbolt boiiiiii!");
    };

    return <Pokemon onThunder={thunderboltMove} />;
  };

  return updatedComponent;
};

export default addThunderbolt;
