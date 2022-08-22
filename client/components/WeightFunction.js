const weights = [
  { name: "gallon of water", weight: 8, image: "" },
  { name: "watermelon", weight: 20, image: "" },
  { name: "small bale of hay", weight: 50, image: "" },
  { name: "twin size mattress or 34 bottles of wine", weight: 75, image: "" },
  { name: "toilet or 8000 quarters", weight: 100, image: "" },
  { name: "cheetah", weight: 120, image: "" },
  { name: "mountain lion", weight: 150, image: "" },
  { name: "beer keg", weight: 160, image: "" },
  { name: "kangaroo", weight: 200, image: "" },
  { name: "mule deer", weight: 300, image: "" },
  { name: "reindeer", weight: 400, image: "" },
  { name: "wild boar", weight: 530, image: "" },
  { name: "black bear", weight: 640, image: "" },
  { name: "brown bear", weight: 1060, image: "" },
  { name: "polar bear", weight: 1300, image: "" },
  { name: "bison", weight: 2000, image: "" },
  { name: "Honda Civic", weight: 2500, image: "" },
  { name: "male giraffe", weight: 3000 - 4200, image: "" },
  {
    name: "rhinocerus or half of a blue whale's tongue",
    weight: 5000,
    image: "",
  },
  { name: "truck", weight: 6000 - 8000, image: "" },
  { name: "southern elephant seal", weight: 10000, image: "" },
  { name: "T-rex", weight: 11000 - 15000, image: "" },
  { name: "African elephant or 3 Mercedes Maybachs", weight: 15000, image: "" },
  { name: "Cadillac The Beast", weight: 20000, image: "" },
  { name: "school bus", weight: 25000, image: "" },
  { name: "13.5 school buses", weight: 338000, image: "" },
];

export function weightFunction(weight) {
  if (weight <= 8) {
    return { name: "gallon of water", weight: 8, image: "" }
  } else if (weight >= 9 && weight <= 20) {
    return { name: "watermelon", weight: 20, image: "" }
  } else if (weight >= 2000 && weight < 3300) {
    return {hello}
  } else if (weight >= 3300 && weight < 4200) {
    return { name: "male giraffe", weight: 3000 - 4200, image: "https://cdn-acgla.nitrocdn.com/bvIhcJyiWKFqlMsfAAXRLitDZjWdRlLX/assets/static/optimized/rev-5131b73/wp-content/uploads/2020/11/Giraffe.jpg" }
  } else if (weight >= 4200) {
    return {
      name: "rhinocerus or half of a blue whale's tongue",
      weight: 5000,
      image: "",
    }
  } else {
    return "YOU DIDNT LIFT"
  }
}