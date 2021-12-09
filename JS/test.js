// alert("hello")

// Let = permet de déclarer une variable à l'intérieur du bloc dans lequel il est (contrairement à var)
// console.log = permet de voir le résultat dans la console
// then 1 = formate la réponse / then 2 = traite les données / catch = dans le cas où l'appel à l'url bug
// 

document.querySelector('#contact').addEventListener('input', function() {
  if (this.value.length == 5) {
    let url = `http://127.0.0.1:8000/contact/${this.value}`;
    fetch(url).then((response) => 
      response.json().then((data) => {
      console.log(data);
      let affichage = `${data.contact_id}`;
      document.querySelector('#id').innerHTML = affichage;
      })
    ).catch((err) => console.log('Erreur : ' + err));
  }
});

// document.querySelector('#contact').addEventListener('submit', function() {
//   if (this.value.length == 5) {
//     let url = `http://127.0.0.1:8000/contact/${this.value}`;
//     fetch(url).then((response) => 
//       response.json().then((data) => {
//       console.log(data);
//       let affichage = `${data.contact_id}`;
//       document.querySelector('#id').innerHTML = affichage;
//       })
//     ).catch((err) => console.log('Erreur : ' + err));
//   }
// });

document.querySelector('#age_2').addEventListener('input', function() {
  if (this.value.lenght == 2) {
    let url = `http://127.0.0.1:8000/age/${this.value}`;
    fetch(url).then((response) =>
      response.json().then((data) => {
      console.log(data);
      let affichage_age = `${data.future_age}`;
      document.querySelector('#age').innerHTML = affichage_age;
      })
    ).catch((err) => console.log('Erreur : ' + err));
  }
}
);

