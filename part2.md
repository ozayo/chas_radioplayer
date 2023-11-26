# Part 2- Q&A For FWM - OWASP

## For FWM - OWASP

### What is OWASP and what is its primary mission as described in the article?

OWASP står för Open Web Application Security Project (OWASP), en internationell icke-vinstdrivande organisation. Dess främsta uppgift är att göra information och verktyg om säkerhet för webbapplikationer fritt tillgängliga och åtkomliga.

### Explain the concept of "Injection". Provide an example of how an injection attack could compromise a web application's security.

"Injection," är en typ av attack som kan kompromettera säkerheten för en webbapplikation. Denna attack sker när opålitlig data skickas till en kodtolk genom en formulärinmatning eller annan datainskickning till en webbapplikation. Till exempel kan en angripare ange SQL-databaskod i ett formulär som förväntar sig en ren textanvändarnamn. Om den här formulärinmatningen inte är ordentligt säkrad kan detta resultera i att SQL-koden körs. Detta kallas en SQL-injektionsattack.

### Explain two strategies to prevent Broken Authentication vulnerabilities.

1.1 Tvåfaktorsautentisering (2FA): Denna strategi kräver att användare använder en annan autentiseringsfaktor förutom lösenordet. Till exempel måste användare ange både ett lösenord och en temporär kod genererad av en mobilapplikation. Detta förhindrar attacker som enbart är baserade på lösenord.

1.2 Begränsning av inloggningsförsök (Rate Limiting): Angripare kan försöka få tillgång till systemet genom att testa tusentals kända användarnamn/lösenordskombinationer som de har fått tag på under en dataintrång. Den här strategin skyddar mot sådana attacker genom att begränsa sekventiella eller upprepade inloggningsförsök.

### Describe the potential consequences of Insecure Deserialization in web applications. How can developers protect against such attacks?

Osäker deserialisering kan leda till allvarliga konsekvenser i webbapplikationer. Denna typ av attack uppstår när data från osäkra källor deserialiseras och kan resultera i allt från DDoS-attacker till fjärrkörning av kod. För att förhindra sådana attacker bör utvecklare undvika deserialisering av data från icke-tillförlitliga källor, övervaka deserialiseringsprocesser och implementera säkerhetsåtgärder som typkontroller.

### Briefly define Cross-Site Scripting (XSS) as outlined in the article and list two methods suggested in the article to prevent XSS attacks in web applications.

XSS (Cross-Site Scripting) är en sårbarhet i webbapplikationer som uppstår när användarinformation används osäkert direkt. I denna typ av attack försöker angriparen infoga skadlig kod som sedan körs i användarens webbläsare.

1.1 Säkra HTTP-begäranden: Genom att vidta säkerhetsåtgärder i HTTP-begäranden som används i webbapplikationer kan användarinformation hanteras på ett säkert sätt.

1.2 Rengöring av Användardata med Escape-tecken: Att rengöra användardata med escape-tecken innan de skrivs ut på skärmen kan bidra till att förhindra XSS-attacker.

## For UXF - WCAG

### Explain the importance of semantic elements in web development according to accessibility guidelines. Provide examples of at least two semantic HTML elements and clarify how they enhance accessibility for users with disabilities.

HTML-element är viktiga verktyg som hjälper till att definiera innebörden av innehållet på en webbsida och överföra korrekt information till webbläsare. När de används för att öka tillgängligheten för personer med funktionsnedsättningar, blir de mer förståeliga och tolkningsbara av skärmläsare och andra hjälpmedelstekniker.

1.1 `<nav>` Elementet: Detta element används för att gruppera navigeringslänkar på en sida. Genom detta element kan skärmläsare hjälpa användare att förstå huvudnavigeringen på sidan.

1.2. `<button>` Elementet: Detta element representerar en knapp och möjliggör användarinteraktion. När det används korrekt ger det en bättre förståelse för skärmläsare och tangentbordsanvändare.

### Describe the significance of color contrast in web design concerning accessibility. How does adhering to color contrast guidelines benefit users with visual impairments, and what are the recommended contrast ratios as per WCAG standards?

Färgkontrast bestämmer skillnaden mellan text och bakgrund, vilket gör texten lättare att läsa. Att följa färgkontrastprinciper ger en bättre användarupplevelse, särskilt för användare med färgblindhet eller nedsatt synförmåga.

Enligt WCAG (Web Content Accessibility Guidelines) bör kontrastförhållandet mellan text och bakgrund uppfylla vissa värden.

Till exempel, för vanlig text rekommenderas ett kontrastförhållande på minst 4,5:1, medan för större text och rubriker rekommenderas minst 3:1 kontrastförhållande.

### Discuss the role of alternative text (alt text) for images in accordance with accessibility guidelines. Why is it crucial to include descriptive alt text, and how does this contribute to making web content more accessible? Provide examples to illustrate your explanation.

Alternativ text (alt text) är den text som beskriver innebörden eller innehållet i en bild. Att använda alternativ text i enlighet med tillgänglighetsriktlinjer är viktigt för användare med synnedsättningar och de som använder skärmläsare. Det ger information om innehållet i bilden och möjliggör åtkomst till den informationen om bilden inte kan laddas eller visas.

Exempel:

- `<img src="cat.jpg" alt="Cute cat">`: Detta exempel visar en bild av en söt katt, och alt text ger information om innehållet i bilden för användare med synnedsättningar.
- `<img src="chart.png" alt="Data analysis chart">`: I det här exemplet beskriver alt texten en graf för dataanalys och ger information om grafens innehåll för användare med synnedsättningar.

### Explain the purpose of landmarks in creating accessible web content. How do landmarks aid in navigation for users of assistive technologies, and can you provide examples of commonly used landmark elements in HTML?

Landmark, en webbsida som identifierar viktiga områden och hjälper användare att bättre förstå och navigera innehållet. För användare av hjälpmedelsteknik fungerar landmarks som en guide för att förstå sidans struktur. Till exempel kan skärmläsare informera användare om viktiga områden som sidans rubrik, huvudinnehåll, sidomeny och sökruta.

Exempel:

- `<header>`: Representerar sidans rubrik eller övre del.
- `<nav>`: Specificerar navigationsmenyn på sidan.
- `<main>`: Representerar huvudinnehållet på sidan.
- `<aside>`: Specificerar sidans sidoinnehåll, till exempel en sidofält.
- `<footer>`: Representerar informationen längst ner på sidan.

### Describe the significance of proper form labeling. Why is it important to label form elements, and what strategies can developers implement to ensure effective labeling for improved accessibility?

Korrekt formuläretikettering är viktigt för att ange innebörden och användningen av formulärelement. Det hjälper användare att bättre förstå och fylla i formuläret, särskilt för användare som använder skärmläsare eller har synnedsättningar. Dessutom stöder korrekt etikettering webbläsares autofyllningsfunktioner.
För att säkerställa effektiv etikettering kan utvecklare använda följande strategier:

- Användning av `<label>-elementet: HTML-elementet <label>` bör användas för att ange etiketter för formulärelement.
- Användning av Beskrivande Text: Etiketter bör innehålla beskrivande text som förklarar syftet med formulärelementet.
- Användning av `aria-label: aria-label`-egenskapen kan användas för att lägga till ytterligare beskrivning och förbättra tillgängligheten.
