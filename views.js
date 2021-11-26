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