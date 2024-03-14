function minhaFuncao1() {
  $(".btn-danger").empty().append("Novo nome");
  $(".btn-danger").css({
    color: '#00ff00',
    textTransform: 'uppercase',
    width: '70%',
  });
}

function minhaFuncao2() {
  $("#area-mensagens").empty();
  var alunos = ["Aluno 01", "Aluno 02", "Aluno 03", "Aluno 04", "Aluno 05"];

  $.each(alunos, function (index, value) {
    $("#area-mensagens").append(`<p>${value}</p>`);
  });
}
