$("#button-1")
  .text("Click me")
  .click(function() {
    Swal.fire(
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma, which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition."
    );
  });

// 2
$("#button-2")
  .text("Click me")
  .click(function() {
    Swal.fire($("textarea").val());
    $("textarea").val("");
  });

// 3
$("#div-1")
  .on("mouseenter", function() {
    $(this).css("background-color", changeColor());
  })
  .on("mouseleave", function() {
    $(this).css("background-color", "darkgrey");
  });

// 4
$("#with-text p").click(function() {
  $(this).css("color", changeColor());
});

// 5
let span = "Mirza Hamzic";
$("#button-3").click(function() {
  $("#with-span").append("<span>" + span + "</span>");
});

// 6
const friends = [
  "Liam",
  "Emma",
  "Noah",
  "Olivia",
  "William",
  "Ava",
  "James",
  "Isabella",
  "Oliver",
  "Sophia"
];
let i = 0;
$("#button-4").click(function() {
  if (i < 10) {
    $("#with-ul ul").append("<li>" + friends[i] + "</li>");
    i++;
  }
});

// COMMON FUNCTIONS
// change background color
function changeColor(rgb) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return (rgb = `rgb(${r},${g},${b})`);
}
