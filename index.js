const returnFirstTwoDrivers = ()=>{
    const drivers = ['Antonia ', ' Nuru', 'Amari', 'Mo'];
    console.log(drivers[0] + drivers[1])

}
returnFirstTwoDrivers();
const returnLastTwoDrivers = ()=>{
    const drivers = ['Antonia', 'Nuru', 'Amari', ' Mo'];
    console.log(drivers[2] + drivers[3]);

}
returnLastTwoDrivers();

const selectingDrivers = () =>{
    const drivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()]
    console.log(drivers[0] + drivers[1])
}
selectingDrivers();
const createFareMultiplier = (fareMultiplier = 2)=>{
    const multiplier = fareMultiplier * fareMultiplier;
    console.log(multiplier)
}
createFareMultiplier(5)
const fareDoubler =()=>{
    const doubles = createFareMultiplier() * 2
    console.log(doubles);
}
fareDoubler();
const fareTripler =()=>{
    const doubles = createFareMultiplier() * 3
    console.log(doubles);
}
fareTripler();
const selectDifferentDrivers = ()=>{
    const drivers = ['Antonia ', ' Nuru', 'Amari', 'Mo'];
    returnFirstTwoDrivers();
    returnLastTwoDrivers();

}
selectDifferentDrivers();