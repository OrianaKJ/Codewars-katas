// Description:
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// My solution:
const correct = string => {
    let splited = string.split('');
    if(splited.includes('5')) {
        splited = splited.map(l => l.replace('5', 'S'))
    }
    if(splited.includes('1')) {
        splited = splited.map(l => l.replace('1', 'I'))
    }
    if(splited.includes('0')) {
        splited = splited.map(l => l.replace('0', 'O'))
    }
    return splited.join('')
}