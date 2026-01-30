const message = `Haloo cayang aku bingung bilang nya.\nIntinya kamu banyak banget salah paham tentang aku sayang.\n\nAku sama skali ga ada niatan debatin, aku cuman sekadar nanya aja sayang cuman kamu uda emosi\n\nMakanya sampe punya argumen "seolah olah" padahal ga seperti kamu bayangkan, dan akhirnya kamu pake kata yang ga aku sukaa lagi cuek.\n\nAnyway, seperti aku bilang aku selalu kena kambing hitam, aku cuman bisa diam saat kamu ngetik gitu supaya kamu ga makin marah, tapi aku ga kuat gini terus sayang...`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

