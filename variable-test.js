주어진 배열을 가지고 다음 질문에 코드를 짜시오

let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]


1.어레이에 마지막 아이템 “Zebra” 제거하기

 annimals.pop()

2.주어진 어레이에 “Dog” 추가하기

  animals.push(“Dog”)


3.주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기

animals.push(“Mosquito”,“Mouse”,“Mule”)


4.해당 어레이에는 "Human"이 있는가?

console.log(animals.includes(“Human”))


5.해당 어레이에는 “Cat” 이 있는가?

 console.log(animals.includes(“Cat”))


6."Red deer"을 "Deer"로 바꾸시오

console.log(animals.indexOf("Red deer"));
animals.splice(77,1,"Deer");  //array.splice(start,deleCount, 수정할 데이터값)

7."Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오

console.log(animals.indexOf("Spider"));

animals.splice(81,3);


8."Tiger"이후의 값을 제거하시오

 console.log(animals.indexOf("Tiger"));
console.log(animals.slice(0,87));

9."B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오

console.log(animals.indexOf("Baboon",))
console.log(animals.indexOf("Bison",))
console.log(animals.slice(8,15));
let B = [animals.slice(8,15)];
console.log(B);