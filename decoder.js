(function () {
  // Delayed anti-debugger trap so decodeShift loads first
  setTimeout(() => {
    setInterval(() => {
      try {
        Function("debugger")();
      } catch (e) {}
    }, 800);
  }, 1200);

  const _d = {
    A: "Su–We",
    B: "We–Sa",
    C: "Mo/Tu/Th/Fr",
    E: "Mo–Fr",
    F: "Mo–Th",
    G: "Su–Th",
    H: "Fr–Mo",
    I: "Su/Mo/Th/Fr",
    J: "Su/Mo/Tu/Th",
    K: "Tu–Fr",
    L: "Sa–Tu",
    M: "Tu–Sa",
    N: "Th–Su",
    O: "Th–Mo",
    P: "Su/Mo/We/Th",
    Q: "Mo/Tu/Fr/Sa",
    R: "Su/Mo/Tu/Fr",
    T: "Sa–We",
    U: "Su/Tu/Th/Fr",
    V: "Sa/Su/Tu/We",
    W: "Fr–Tu",
    X: "Mo/Th/Fr/Sa",
    Y: "Tu/We/Fr/Sa",
    Z: "Mo/We/Fr/Sa",
    "1": "Mo/We/Th/Fr",
    "2": "Su/Mo/Th/Sa",
    "3": "Mo/Tu/We/Fr"
  };
  const _t = { D: "Days", S: "Swing", N: "Nights" };
  const _o = { "1": "Su", "2": "Mo", "3": "Tu", "4": "We", "5": "Th", "6": "Fr", "7": "Sa" };
  const _l = { T: 10, E: 12 };

  function _z(s) {
    return String(s).padStart(2, "0");
  }

  window.decodeShift = function (c) {
    try {
      if (!c) return "Please Enter Shift";
      c = ("" + c).trim();
      if (c.length < 6) return "Please Enter Shift";

      const t = c.charAt(0);
      if (!_t[t]) return "Please Enter Shift";

      let sName, ot, lenCode, startTime;
      const mid = c.substring(1, 5);

      if (mid === "AAAA") {
        sName = "Flex";
        ot = c.charAt(5);
        lenCode = c.charAt(6);
        startTime = c.substring(7, 11);
      } else if (mid === "AAAt") {
        sName = "CA Flex";
        ot = c.charAt(5);
        lenCode = c.charAt(6);
        startTime = c.substring(7, 11);
      } else {
        sName = c.charAt(1);
        ot = c.charAt(2);
        lenCode = c.charAt(3);
        startTime = c.substring(4, 8);
      }

      let dayRange;
      if (sName === "Flex" || sName === "CA Flex") {
        dayRange = sName;
      } else {
        if (!_d[sName]) return "Please Enter Shift";
        dayRange = _d[sName];
      }

      if (!_o[ot] || !_l[lenCode]) return "Please Enter Shift";

      const sh = parseInt(startTime.slice(0, 2), 10);
      const sm = parseInt(startTime.slice(2), 10);

      let eh = (sh + _l[lenCode]) % 24;
      let em = sm + 30;

      if (em >= 60) {
        em -= 60;
        eh = (eh + 1) % 24;
      }

      const startStr = _z(sh) + ":" + _z(sm);
      const endStr = _z(eh) + ":" + _z(em);

      return _t[t] + ", " + dayRange + ", OT " + _o[ot] + ", " + startStr + " - " + endStr;
    } catch (e) {
      return "Please Enter Shift";
    }
  };

  // hidden signature
  console.log("%cCreated by: svvannak", "font-size:0");
})();


