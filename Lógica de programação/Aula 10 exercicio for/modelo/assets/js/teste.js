const varios = [
    {time: 'vasco'},
    {time: 'flamengo'},
    {time: 'corintias'},
    {time: 'santos'},
]

for (let i = 0; i < varios.length; i++) {
    const times = varios[i]
    const {time} = times
    console.log(`<${time}></${time}>`)
}