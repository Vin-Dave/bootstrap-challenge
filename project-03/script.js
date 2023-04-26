function addAlert(type, text, timeout) {
  type = type || "primary";
  text = text || "Lorem ipsum dolor sit amet.";
  timeout = timeout || 2000;

  let types = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  type = types[Math.floor(Math.random() * types.length)];

  let alertNode = document.createElement("div");
  alertNode.classList.add(
    "alert",
    "alert-" + type,
    "alert-dismissible",
    "fade",
    "show"
  );
  alertNode.setAttribute("role", "alert");

  let alertCode = `
            <h4 class="alert-heading">.alert-${type}</h4>
            <p> ${text} </p>
            <button type="button" class="close" data-dismiss="alert" aria-label="close">
                <span>&times;</span>
            </button>    
        `;

  let alertInstance = new bootstrap.Alert(alertNode);

  setTimeout(function () {
    alertInstance.close();
  }, timeout);

  alertNode.addEventListener("close.bs.alert", function () {
    console.log("close.bs.alert:  alert-" + type + " zamkniety");
  });

  alertNode.addEventListener("closed.bs.alert", function () {
    console.log("closed.bs.alert:  alert-" + type + " zamkniety");
  });

  alertNode.innerHTML = alertCode;
  let alertContainer = document.getElementById("alerts");
  // alertContainer.appendChild(alertNode); // na koniec
  alertContainer.prepend(alertNode);
}
