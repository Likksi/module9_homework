const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();

const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

function parseStudent(studentNode) {
  const nameNode = studentNode.querySelector('name');
  const firstName = nameNode.querySelector('first').textContent;
  const secondName = nameNode.querySelector('second').textContent;
  const lang = nameNode.getAttribute('lang');
  const age = parseInt(studentNode.querySelector('age').textContent);
  const prof = studentNode.querySelector('prof').textContent;

  return {
    name: `${firstName} ${secondName}`,
    age,
    prof,
    lang,
  };
}

const students = Array.from(xmlDoc.querySelectorAll('student')).map(parseStudent);

const resultObject = {
  list: students,
};

console.log(resultObject);
