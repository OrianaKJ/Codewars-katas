// Description:
// An Ironman Triathlon is one of a series of long-distance triathlon races organized by the World Triathlon Corporaion (WTC). It consists of a 2.4-mile swim, a 112-mile bicycle ride and a marathon (26.2-mile) (run, raced in that order and without a break. It hurts... trust me.

//     Your task is to take a distance that an athlete is through the race, and return one of the following:

//     If the distance is zero, return 'Starting Line... Good Luck!'.

//     If the athlete will be swimming, return an object with 'Swim' as the key, and the remaining race distance as the value.

//     If the athlete will be riding their bike, return an object with 'Bike' as the key, and the remaining race distance as the value.

//     If the athlete will be running, and has more than 10 miles to go, return an object with 'Run' as the key, and the remaining race distance as the value.

//     If the athlete has 10 miles or less to go, return return an object with 'Run' as the key, and 'Nearly there!' as the value.

//     Finally, if the athlete has completed te distance, return "You're done! Stop running!".

//     All distance should be calculated to two decimal places.

// My solution:
const iTri = s => {
    let dis = 2.4 + 112 + 26.2
    return s === 0 ? "Starting Line... Good Luck!" :
        s <= 2.4 ? {
            Swim: `${(dis-s).toFixed(2)} to go!`
        } :
        s < 114.4 ? {
            Bike: `${(dis-s).toFixed(2)} to go!`
        } :
        s < 130.6 ? {
            Run: `${(dis-s).toFixed(2)} to go!`
        } :
        s < 140.6 ? {
            Run: 'Nearly there!'
        } :
        "You're done! Stop running!"
}