let data = [
    {
      name: 'Jared',
      age: '32'
    },
    {
        name: 'George',
        age: '32'
      },
      {
        name: 'Barak',
        age: '28'
      },
      {
        name: 'Ayaan',
        age: '30'
      },  
      {
        name: 'Kris',
        age: '21'
      },  
      {
        name: 'Jared',
        age: '16'
      },
]; 

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old.' + '</div>';
});

info.innerHTML = details.join('\n');