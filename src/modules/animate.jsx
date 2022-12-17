export const addAnimate = (el, animation, speed, effect) => {
  el.classList.add(
    `animate__animated`,
    `animate__${animation}`,
    `animate__${speed}`,
    `${effect}`
  );
  el.addEventListener("animationend", () => {
    el.classList.remove(
      `animate__animated`,
      `animate__${animation}`,
      `animate__${speed}`,
      `${effect}`
    );
  });
};

export const addAnimatePro = (el, animation, speed, effect) => {
  return new Promise((resolve) => {
    el.classList.add(
      `animate__animated`,
      `animate__${animation}`,
      `animate__${speed}`,
      `${effect}`
    );

    el.addEventListener("animationend", () => {
      el.classList.remove(
        `animate__animated`,
        `animate__${animation}`,
        `animate__${speed}`,
        `${effect}`
      );
      resolve("animationEnd");
    });
  });
};

export const addAnimateProFade = (el, animation, speed, effect) => {
  return new Promise((resolve) => {
    el.classList.add(
      `db`,
      `animate__animated`,
      `animate__${animation}`,
      `animate__${speed}`,
      `${effect}`
    );

    el.addEventListener("animationend", () => {
      el.classList.remove(
        `animate__animated`,
        `animate__${animation}`,
        `animate__${speed}`,
        `${effect}`
      );
      resolve("animationEnd");
    });
  });
};

export function addAnimatejQuery(el, animation, speed) {
  var dfd = $.Deferred();

  el.addClass([
    "animate__animated",
    "animate__" + animation,
    "animate__" + speed,
  ]).on("animationend", function () {
    $(this).removeClass([
      "animate__animated",
      "animate__" + animation,
      "animate__" + speed,
    ]);
    console.log("1");
    dfd.resolve("animationend");
    // setTimeout(() => {
    //   dfd.resolve("animationend");
    // }, 7000);
  });
  return dfd.promise();
}
