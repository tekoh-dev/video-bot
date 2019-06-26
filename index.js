const readline = require('readline-sync')
function start(){
  const contentToSearch = {}

  contentToSearch.term = askAndReturnSearchTerm()
  contentToSearch.termPrefix = askAndReturnSearchPrefix()

  function askAndReturnSearchTerm(){
    return readline.question('Type a term: ')
  }
  function askAndReturnSearchPrefix(){
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]
    return selectedPrefixText
  }
  console.log(contentToSearch)
}
start()
