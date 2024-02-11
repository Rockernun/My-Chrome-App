const quotes = [
  {
    quote: "컴퓨터 과학은 문제 해결을 위한 예술이다.",
    author: "-Donald Knuth",
  },
  {
    quote: "만약 당신이 어떻게 코드를 쓰느냐에 대해 걱정한다면, 그것은 당신이 그만큼 충분히 강력한 도구를 사용하지 못하고 있다는 것이다.",
    author: "-Linus Torvalds",
  },
  {
    quote: "프로그래밍은 작은 실수를 찾는 것과 큰 실수를 숨기는 것이다.",
    author: "-C.A.R Hoare",
  },
  {
    quote: "코드는 언젠가는 작동하지 않게 된다. 하지만 주석은 언제나 작동한다.",
    author: "-Rick Osborne",
  },
  {
    quote: "코드 수를 기준으로 프로그램의 진도를 측정하는 것은 비행기 제작 진도를 무게로 측정하는 것과 같다.",
    author: "-Bill Gates",
  },
  {
    quote: "세상에는 딱 두 가지 프로그래밍 언어가 있다. 사람들이 욕하는 언어와 아무도 사용하지 않는 언어.",
    author: "-Bjarne Stroustrup",
  },
  {
    quote: "훌륭한 코드는 훌륭한 문서보다 낫다.",
    author: "-Steve McConnell",
  },
  {
    quote: "올바로 작동하지 않는다고 걱정하지 마라. 잘 작동하면, 내 일이 없어진다.",
    author: "-Mosher's Law of Software Engineering",
  },
  {
    quote: "커뮤니케이션은 피드백을 받고, 문제점을 해결하고, 함께 일하고, 새로운 아이디어를 제안하며, 진행 상황을 공유하는 것이다.",
    author: "-Mark Zuckerberg",
  },
  {
    quote: "좋은 아이디어가 있다면 지금 당장 시작하라. 그리고 빨리 실패해 보라. 그것이 가장 빠른 성장 방법이다.",
    author: "-Mark Zuckerberg",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;