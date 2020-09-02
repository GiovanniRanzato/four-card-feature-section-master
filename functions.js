const heading= {
    lead: " Reliable, efficient delivery",
    title: "Powered by Technology",
    value: "  Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful"
}
const cards = [
    {
        id: 'card-1',
        color: 'cyan',
        title: "Supervisor",
        description: "Monitors activity to identify project roadblocks",
        icon: "./images/icon-supervisor.svg"
    },
    {
        id: 'card-2',
        color: 'red',
        title: "Team Builder",
        description: "Scans our talent network to create the optimal team for your project",
        icon: "./images/icon-team-builder.svg"
    },
    {
        id: 'card-3',
        color: 'orange',
        title: "Karma",
        description: "Regularly evaluates our talent to ensure quality",
        icon: "./images/icon-karma.svg"
    },
    {
        id: 'card-4',
        color: 'blue',
        title: "Calculator",
        description: "Uses data from past projects to provide better delivery estimates",
        icon: "./images/icon-calculator.svg"
    }
];
loadData();

function loadData(){
    document.getElementById('lead').innerHTML=heading.lead;
    document.getElementById('title').innerHTML=heading.title;
    document.getElementById('value').innerHTML=heading.value;

    cards.forEach(card=>{
        const classes = document.getElementById(card.id).getAttribute("class");
        document.getElementById(card.id).setAttribute("class", classes+" "+card.color);
        document.getElementById(card.id).getElementsByClassName('card-title')[0].innerHTML=card.title;
        document.getElementById(card.id).getElementsByClassName('card-description')[0].innerHTML=card.description;
        document.getElementById(card.id).getElementsByClassName('card-icon')[0].setAttribute("src",card.icon);
    })

}