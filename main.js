 const Quotes = [
  {'author': 'Oscar Wilde', 
   'quote': 'Be yourself; everyone else is already taken.'
  },
  {'author': 'Marilyn Monroe', 
   'quote': 'So many books, so little time'
  },
  {'author': ' Marcus Tullius Cicero', 
   'quote': 'A room without books is like a body without a soul.'
  },
  {'author': ' Mae West', 
   'quote': 'You only live once, but if you do it right, once is enough.'
  },
  {'author': 'Elbert Hubbard', 
   'quote': 'A friend is someone who knows all about you and still loves you.'
  },
  {'author': 'Elbert Hubbard', 
   'quote': 'Do not take life too seriously. You will not get out alive.'
  },
];

function Quote(){
  random = Number.parseInt(Math.random()*Quotes.length + 1);
  document.querySelector('#quote').textContent = `\"${Quotes[random].quote}\"`;
  document.querySelector('#author').textContent = `--${Quotes[random].author}`;
  
}
