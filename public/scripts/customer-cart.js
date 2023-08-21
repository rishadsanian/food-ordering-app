/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


const renderOrderItems = function (orderItems) {
  const $cartContainer = $(".cart-container");
  $cartContainer.empty(); // Clear any existing content

  const $cartTitle = $("<h2>").addClass("section-title").text("Your cart");

  $cartContainer.append($cartTitle);

  for (const orderItem of orderItems) {
    const $orderItem = $("<div>").addClass(
      `orderItem-${orderItem.id} card-hov-shadow `
    ); 
    
    const $itemPicture = $("<img>")
      .addClass("itemPciture")
      .attr("src", orderItem.picture_url)
      .css({ width: "100px", height: "100px" });

    const $itemQuantity = $("<p>")
      .addClass("itemQuantity")
      .text(orderItem.quantity);

    const $orderItemName = $("<p>")
      .addClass("itemName")
      .text(orderItem.name)
      .css({ fontWeight: "bold" });

    const $itemUnitPrice = $("<p>")
      .addClass("unitPrice")
      .text("$ " + (orderItem.unit_price / 100).toFixed(2));

    const $orderItemBody = $("<body>")
      .addClass("ordertem card-body")
      .css({ display: "flex", "justify-content": "space-between" });

    $orderItemBody.append(
      $itemPicture,
      $itemQuantity,
      $orderItemName,
      $itemUnitPrice
    );
    $orderItem.append($orderItemBody);

    $cartContainer.append($orderItem);

    const $confirmationButton = $("<button>")
      .addClass("confirmation-button")
      .text("confirm");

    $confirmationButton.on("click", function () {
      $cartContainer.hide();

      console.log("order sent");
    });

    const cartTotal = function (order_items) {
      let total = 0;
      order_items.forEach((item) => {
        total += item.unit_price * item.quantity;
      });
      return total;
    };

    const $cartTotal = $("<p>")
      .addClass("cartTotal")
      .text("$ " + cartTotal);

    const $orderItemFooter = $("<footer>")
      .addClass("orderItem card-footer")
      .css({
        display: "flex",
        "justify-content": "space-between",
        alignItems: "center",
      });

    $orderItemFooter.append($confirmationButton, $cartTotal);
    $cartContainer.append($orderItemFooter);
  }
};
