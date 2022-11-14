import waitFor from "./waitFor";

const Loader = () => {
  return (
    <div id="loaderContent">
      {/* <div className="ball-grid-pulse">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}

      <div className="ball-pulse-sync">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export const Loader1 = () => {
  return (
    // <div className="ball-pulse-sync text-center">
    //   <div></div>
    //   <div></div>
    //   <div></div>
    // </div>
    <div className="ball-clip-rotate text-center">
      <div></div>
    </div>
  );
};

export default Loader;
