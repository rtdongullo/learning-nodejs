import {} from 'node:fs';

writeFile('./hello.html', '<h1>deleting Node.js</h1>', () => {
    console.log('File added');
});

console.log('Learning');