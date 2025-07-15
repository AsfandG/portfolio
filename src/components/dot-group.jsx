import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyle =
    "relative bg-yellow before:absolute before:size-4 before:rounded-full before:border-2 before:border-yellow before:-left-1/2 before:-top-1/2";
  return (
    <div className="flex flex-col gap-6 fixed top-1/2 right-9">
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedStyle : "bg-dark-grey"
        } size-2 rounded-full`}
        href={`#home`}
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        className={`${
          selectedPage === "about" ? selectedStyle : "bg-dark-grey"
        } size-2 rounded-full`}
        href={`#about`}
        onClick={() => setSelectedPage("about")}
      />
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyle : "bg-dark-grey"
        } size-2 rounded-full`}
        href={`#skills`}
        onClick={() => setSelectedPage("skills")}
      />
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyle : "bg-dark-grey"
        } size-2 rounded-full`}
        href={`#projects`}
        onClick={() => setSelectedPage("projects")}
      />

      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedStyle : "bg-dark-grey"
        } size-2 rounded-full`}
        href={`#contact`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
