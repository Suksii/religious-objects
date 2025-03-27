import "./FondSection.scss";

const FondSection = () => {
  const fondLink = "https://fzm.me/v/";
  const fondLogo =
    "https://upload.wikimedia.org/wikipedia/commons/2/23/Coat_of_arms_of_Montenegro.svg";
  const goToFond = () => {
    window.open(fondLink);
  };

  return (
    <div className="fond_container" onClick={goToFond}>
      <p className="l_text">
        "Vjerski objekti Crne Gore" je projekat koji se realizuje podrškom:
      </p>
      <div className="fond">
        <img src={fondLogo} alt={"fond"} />
        <p style={{ width: "100%" }}>
          <span style={{ fontWeight: "semibold" }}>
            Fond za zaštitu i ostvarivanje manjinskih prava{" "}
          </span>
          Crne Gore
        </p>
      </div>
    </div>
  );
};

export default FondSection;
