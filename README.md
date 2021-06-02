# List References

## Quick use

```shell
npx list-references file.txt
```

Convert your links for diploma in references list easily:

> file.txt
```txt
https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F
https://www.atlassian.com/software/jira/guides/use-cases/what-is-jira-used-for
https://www.atlassian.com/software/jira/guides/getting-started/basics
https://www.altexsoft.com/blog/engineering/what-is-api-definition-types-specifications-documentation/
https://www.google.com/calendar/about/
https://www.google.com/chrome/
https://developer.chrome.com/docs/devtools/
https://www.jetbrains.com/webstorm/
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript
https://www.typescriptlang.org/
https://www.npmjs.com/
https://angular.io/guide/architecture
https://www.npmjs.com/package/smile-track
https://smile-track.web.app/track
```

Will be converted to:

```txt
Git - What is Git? [Електронний ресурс]. - Режим доступу: https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F (Дата звернення: 30.05.2021).
What is Jira Software used for? | Atlassian [Електронний ресурс]. - Режим доступу: https://www.atlassian.com/software/jira/guides/use-cases/what-is-jira-used-for (Дата звернення: 30.05.2021).
Getting Started with Jira Software |Free Tutorial |Atlassian [Електронний ресурс]. - Режим доступу: https://www.atlassian.com/software/jira/guides/getting-started/basics (Дата звернення: 30.05.2021).
What is API: Definition, Specifications, Types, Documentation | AltexSoft [Електронний ресурс]. - Режим доступу: https://www.altexsoft.com/blog/engineering/what-is-api-definition-types-specifications-documentation/ (Дата звернення: 30.05.2021).
Google Calendar: Free Calendar App for Personal Use [Електронний ресурс]. - Режим доступу: https://www.google.com/calendar/about/ (Дата звернення: 30.05.2021).
Google Chrome - Download the Fast, Secure Browser from Google [Електронний ресурс]. - Режим доступу: https://www.google.com/chrome/ (Дата звернення: 30.05.2021).
Chrome DevTools - Chrome Developers [Електронний ресурс]. - Режим доступу: https://developer.chrome.com/docs/devtools/ (Дата звернення: 30.05.2021).
WebStorm: The Smartest JavaScript IDE by JetBrains [Електронний ресурс]. - Режим доступу: https://www.jetbrains.com/webstorm/ (Дата звернення: 30.05.2021).
What is JavaScript? - Learn web development | MDN [Електронний ресурс]. - Режим доступу: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript (Дата звернення: 30.05.2021).
TypeScript: Typed JavaScript at Any Scale. [Електронний ресурс]. - Режим доступу: https://www.typescriptlang.org/ (Дата звернення: 30.05.2021).
npm [Електронний ресурс]. - Режим доступу: https://www.npmjs.com/ (Дата звернення: 30.05.2021).
Angular [Електронний ресурс]. - Режим доступу: https://angular.io/guide/architecture (Дата звернення: 30.05.2021).
smile-track - npm [Електронний ресурс]. - Режим доступу: https://www.npmjs.com/package/smile-track (Дата звернення: 30.05.2021).
Smile Track - Best Way to Track Tickets! [Електронний ресурс]. - Режим доступу: https://smile-track.web.app/track (Дата звернення: 30.05.2021).
```

## Programmatically use

```js
const links = [
  'https://angular.io/guide/architecture',
  'https://www.npmjs.com/package/smile-track',
  'https://smile-track.web.app/track',
];

const listReferences = new ListReferences();
listReferences.processLinks(links).then((references) => {
  // [
  //  'Angular [Електронний ресурс]. - Режим доступу: https://angular.io/guide/architecture (Дата звернення: 30.05.2021).',
  //  'smile-track - npm [Електронний ресурс]. - Режим доступу: https://www.npmjs.com/package/smile-track (Дата звернення: 30.05.2021).',
  //  'Smile Track - Best Way to Track Tickets! [Електронний ресурс]. - Режим доступу: https://smile-track.web.app/track (Дата звернення: 30.05.2021).'
  // ]
  console.log(references);
});
```
