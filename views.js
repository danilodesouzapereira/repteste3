// nova linha de comentário
//função para definir configurações de tempo para o Brasil
function formatLocale() {
  var pt_BR = {
    'decimal': ',',
    'thousands': '.',
    'grouping': [3],
    'currency': ['R$', ''],
    'dateTime': '%d/%m/%Y %H:%M:%S.%f',
    'date': '%d/%m/%Y',
    'time': '%H:%M',
    'periods': ['AM', 'PM'],
    'days': ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    'shortDays': ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    'months': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    'shortMonths': ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  }
  //definições locais para tempo
  d3.timeFormatDefaultLocale(pt_BR);
  d3.formatDefaultLocale(pt_BR);
}

//função para fazer o parse de um string para uma data (formato dd/mm/yyyy hh:mm:ss)
function parseTime(val) {
  var pt = d3.timeParse('%d/%m/%Y %H:%M:%S');
  return pt(val);
}

//função para fazer o parse de data
function formatTime(val) {
  var ft = d3.timeFormat('%d/%m/%Y %H:%M:%S');
  return ft(val);
}

//função para formatar um número com N casas decimais
function formatNumber(val, dec = 1) {
  return(val.toLocaleString('pt-BR', {
    minimumFractionDigits: dec,
    maximumFractionDigits: dec
  }));
}