var results=[
    {
        type:'vegitables',
        name: 'Potato'
    },
    {
        type:'vegitables',
        name: 'Tomato'
    },
    {
        type:'vegitables',
        name: 'Brinjal'
    },
    {
        type:'fruits',
        name: 'Kivi'
    },
    {
        type:'fruits',
        name: 'Grapes'
    },
    {
        type:'fruits',
        name: 'Orange'
    },
    {
        type:'fruits',
        name: 'Apple'
    },
    {
        type:'fruits',
        name: 'Mango'
    },
    {
        type:'fruits',
        name: 'guava'
    },
    {
        type:'grains',
        name: 'Urad'
    },
    {
        type:'grains',
        name: 'Moong'
    },
    {
        type:'grains',
        name: 'Dal'
    },
    {
        type:'medicine',
        name: 'Paracetamol'
    },
    {
        type: 'agro-foresty',
        name: 'Silviculture'
    }
]

var output = ''; 
output += '<ul>';
results.forEach(element => {
    output+=
    `<li>${element.name}</li>`
});
output += '</ul>';
document.getElementById('list').innerHTML=output;
// for(var i in results){
//     document.write(results[i].name)
// }