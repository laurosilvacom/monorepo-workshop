function calculateHikingTime(trailLength, averageSpeed) {
  return trailLength / averageSpeed
}

let trailLength = 30 // length of the trail in miles
let averageSpeed = 3 // average hiking speed in miles per hour

console.log(
  `It would take approximately: `,
  calculateHikingTime(trailLength, averageSpeed),
  ' hours to hike this trail in Forest Park 🥾'
)
