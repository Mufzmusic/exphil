const allQuestions = {
    "Argumentasjonsteori": [
            {
                question: "Hva er den primære forskjellen mellom deduktiv og induktiv argumentasjon?",
                options: [
                    "Deduktiv argumentasjon sikter mot sannsynliggjøring, induktiv mot sikkerhet",
                    "Deduktiv argumentasjon sikter mot å garantere konklusjonens riktighet, mens induktiv sannsynliggjør konklusjonen",
                    "Deduktiv argumentasjon er uavhengig av premissene, mens induktiv avhenger av dem",
                    "Induktiv argumentasjon garanterer riktighet, mens deduktiv sannsynliggjør konklusjonen"
                ],
                answer: 1,
                feedback: "Deduktiv argumentasjon garanterer riktighet gitt sanne premisser, mens induktiv sannsynliggjør konklusjonen."
            },
            {
                question: "Hva er modus tollens i deduktiv logikk?",
                options: [
                    "En argumentasjonsform som konkluderer med 'p' hvis 'q' er sann",
                    "En form der konklusjonen er sann dersom alle premissene er sanne",
                    "En deduktivt gyldig form der konklusjonen trekkes basert på negasjonen av 'q'",
                    "En gyldig logisk form som alltid konkluderer med at 'p' er sant"
                ],
                answer: 2,
                feedback: "Modus tollens konkluderer at 'p' er falsk dersom 'q' er falsk i formen: Hvis p, så q. Ikke q. Altså ikke p."
            },
            {
                question: "Hva karakteriserer et deskriptivt standpunkt?",
                options: [
                    "Det gir en vurdering eller anbefaling",
                    "Det beskriver en tilstand eller faktum uten vurdering",
                    "Det oppfordrer til en spesifikk handling",
                    "Det gir en moralsk vurdering basert på fakta"
                ],
                answer: 1,
                feedback: "Deskriptive standpunkter beskriver en tilstand eller faktum uten å gi en vurdering eller anbefaling."
            },
            {
                question: "Hva er en normativ påstand?",
                options: [
                    "En påstand som beskriver hvordan ting faktisk er",
                    "En påstand som oppfordrer eller vurderer noe som bra eller dårlig",
                    "En påstand som gir en nøytral beskrivelse av situasjonen",
                    "En påstand som gir presise data uten vurdering"
                ],
                answer: 1,
                feedback: "En normativ påstand gir en vurdering eller oppfordrer til en bestemt handling."
            },
            {
                question: "Hva skiller en induktiv syllogisme fra en induktiv generalisering?",
                options: [
                    "Induktiv syllogisme sikter mot universelle utsagn, generalisering mot partikulære utsagn",
                    "Induktiv syllogisme baserer seg på en generell observasjon, generalisering på en spesifikk",
                    "Induktiv syllogisme trekker konklusjoner om enkeltindivider, mens generaliseringer trekker generelle konklusjoner",
                    "Induktiv syllogisme er alltid logisk gyldig, mens induktiv generalisering er sannsynlig"
                ],
                answer: 2,
                feedback: "Induktiv syllogisme trekker konklusjoner om enkeltindivider basert på generell kunnskap, mens induktiv generalisering trekker generelle konklusjoner."
            },
            {
                question: "Hva menes med relevans i argumentasjonsteori?",
                options: [
                    "Hvorvidt argumentet kan overbevise et publikum",
                    "I hvilken grad argumentet er i tråd med fakta",
                    "Argumentets betydning for å støtte eller svekke standpunktet",
                    "Hvorvidt argumentet er kjent blant publikum"
                ],
                answer: 2,
                feedback: "Relevans refererer til i hvilken grad argumentet støtter eller svekker standpunktet direkte."
            },
            {
                question: "Hva kjennetegner et sammensatt argument?",
                options: [
                    "To eller flere argumenter som sammen støtter hverandre og styrker relevansen for standpunktet",
                    "Flere uavhengige argumenter som har samme tema",
                    "Argumenter som er riktige, men ikke nødvendigvis relevante",
                    "En argumentasjonsrekke der konklusjonen følger logisk av premissene"
                ],
                answer: 0,
                feedback: "Sammensatte argumenter består av to eller flere argumenter som støtter hverandre, og slik styrker relevansen for standpunktet."
            },
            {
                question: "Hvordan kan indirekte argumenter bidra til riktighet i et hovedargument?",
                options: [
                    "Ved å svekke logikken i det primære argumentet",
                    "Ved å overbevise publikum emosjonelt",
                    "Ved å styrke påstandene som direkte støtter hovedargumentet",
                    "Ved å gi en alternativ forklaring som svekker hovedargumentet"
                ],
                answer: 2,
                feedback: "Indirekte argumenter støtter andre argumenter direkte, noe som kan styrke hovedargumentets riktighet."
            },
            {
                question: "Hva innebærer abduksjon som en type argumentasjon?",
                options: [
                    "En form for deduktiv logikk som gir absolutte konklusjoner",
                    "En slutning til beste forklaring basert på tilgjengelige data",
                    "En metode for å gi en vurdering basert på normativ logikk",
                    "En generalisering basert på omfattende observasjoner"
                ],
                answer: 1,
                feedback: "Abduksjon er en argumentasjonstype som trekker slutninger til beste forklaring basert på de tilgjengelige dataene."
            },
            {
                question: "Hva er modus ponens?",
                options: [
                    "En argumentasjonsform der sannheten til premissene sannsynliggjør konklusjonen",
                    "En deduktiv form der premissene garanterer konklusjonen hvis de er sanne",
                    "En logisk form som gjør det mulig å trekke alternative konklusjoner",
                    "En induktiv form som vektlegger relevans over riktighet"
                ],
                answer: 1,
                feedback: "Modus ponens er en deduktivt gyldig argumentasjonsform der sannheten til premissene garanterer konklusjonen."
            },        
        {
            question: "Det følgende er standpunktet S i et resonnement: \"Den industrielle revolusjonen hadde en avgjørende innvirkning på samfunnsstrukturen.\" Det følgende argumentet A er et standpunktargument for S: \"I løpet av den industrielle revolusjon opplevde samfunnet en betydelig overgang fra håndverksbasert produksjon til mekanisert masseproduksjon.\"\n\nHvilket av alternativene nedenfor er et indirekte argument i denne argumentasjonen?",
            options: [
                "I dag regnes den industrielle revolusjonen som starten på den moderne økonomiske utviklingen.",
                "Den industrielle revolusjonen førte til økt urbanisering, med en betydelig migrasjon fra landsbygda til byene.",
                "Flere oppfinnelser, som dampmaskinen og spinning jenny, bidro til å automatisere produksjonsprosesser.",
                "Mange fra arbeiderklassen begynte å organisere seg i fagforeninger for å kjempe for bedre arbeidsvilkår."
            ],
            answer: 1,
            feedback: "Indirekte argumenter bygger ikke direkte opp under hovedstandpunktet, men gir informasjon om konsekvenser, som økt urbanisering."
        },
        {
            question: "I en debatt fremsettes følgende argument for militær støtte til Ukraina: «Jagerfly vil øke sjansen for luftherredømme og styrke den ukrainske kampstyrken.»\n\nArgumentet blir møtt med følgende innvending: «Det er frastøtende å mene at økt militær støtte skal føre til fred. Denne type holdninger vil bare føre til at det blir mer krig i verden.»\n\nHvordan kan denne innvendingen best karakteriseres?",
            options: [
                "Personargumentasjon",
                "Induktiv generalisering",
                "Bekreftelsesbias",
                "Stråmannsargumentasjon"
            ],
            answer: 3,
            feedback: "Innvendigen feiltolker det opprinnelige argumentet som en støtte for krig, noe som karakteriseres som et stråmannsargument."
        },
        {
            question: "Sett at en politiker hevder følgende standpunkt i en debatt om utdanningspolitikk: «Skolen burde vært mer opptatt av å utvikle elevenes fantasi enn at de skal tilegne seg kunnskap». Til støtte for dette standpunktet anfører hen følgende argument: «Albert Einstein, en av de største vitenskapsmennene gjennom tidene, skal nemlig ha sagt at fantasi er viktigere enn kunnskap».\n\nHva er problematisk med dette argumentet?",
            options: [
                "Argumentet er en stråmann.",
                "Argumentet er ikke riktig.",
                "Argumentet har lav relevans.",
                "Argumentet følger ikke deduktivt fra standpunktet."
            ],
            answer: 2,
            feedback: "Argumentet har lav relevans, ettersom Einsteins utsagn er en personlig mening og ikke et objektivt grunnlag for utdanningspolitikk."
        },
        {
            question: "Se på følgende argumentasjon: Tall fra SSB viser at barns deltagelse i fritidsaktiviteter i stor grad avhenger av foreldres økonomi. I enkelte familier har foreldrene rett og slett ikke råd til å la barna sine delta på fotball eller svømming. Regjeringen bør øke støtten til breddeidretten. Fysisk aktivitet bidrar til barns trivsel og helse.\n\nHva er standpunktet i argumentasjonen?",
            options: [
                "Fysisk aktivitet bidrar til barns trivsel og helse.",
                "Regjeringen bør øke støtten til breddeidretten.",
                "Tall fra SSB viser at barns deltagelse i fritidsaktiviteter i stor grad avhenger av foreldres økonomi.",
                "I enkelte familier har foreldrene rett og slett ikke råd til å la barna sine delta på fotball eller svømming."
            ],
            answer: 1,
            feedback: "Standpunktet er at regjeringen bør øke støtten til breddeidretten, mens de øvrige utsagnene er premisser som støtter dette."
        },
        {
            question: "Hva er en hovedfunksjon til et premiss i et argument?",
            options: [
                "Å trekke konklusjoner uten å bruke logikk", 
                "Å gi støtte for konklusjonen ved å gi informasjon som underbygger den", 
                "Å motbevise alle motargumenter", 
                "Å presentere en tvetydig posisjon uten tydelig ståsted"
            ],
            answer: 1,
            feedback: "Premissene i et argument gir støtte for konklusjonen ved å gi informasjon som underbygger den."
        },
        {
            question: "Hva er forskjellen mellom et deduktivt og et induktivt argument?",
            options: [
                "Deduktive argumenter har sannsynlige konklusjoner, mens induktive har nødvendige konklusjoner", 
                "Deduktive argumenter gir nødvendige konklusjoner basert på premissene, mens induktive gir sannsynlige konklusjoner", 
                "Induktive argumenter er alltid sanne, mens deduktive er sannsynlige", 
                "Induktive og deduktive argumenter gir begge nødvendige konklusjoner"
            ],
            answer: 1,
            feedback: "Deduktive argumenter gir nødvendige konklusjoner dersom premissene er sanne, mens induktive argumenter gir sannsynlige konklusjoner."
        },
        {
            question: "Hva kjennetegner et 'ad hominem'-argument?",
            options: [
                "Det retter kritikk mot argumentets konklusjon", 
                "Det angriper personen som fremfører argumentet i stedet for selve argumentet", 
                "Det støtter en konklusjon ved å bruke logiske resonnementer", 
                "Det er et argument som støtter seg på empiriske data"
            ],
            answer: 1,
            feedback: "Et 'ad hominem'-argument angriper personen som fremfører argumentet i stedet for selve argumentets innhold."
        },
        {
            question: "Hva er et 'stråmannsargument'?",
            options: [
                "En feilaktig fremstilling av en motstanders argument for å gjøre det lettere å motbevise", 
                "En taktikk for å styrke ens egen argumentasjon ved å tillegge den flere premisser", 
                "Et argument som bruker overdrivelse for å oppnå følelsesmessig støtte", 
                "Et argument som styrkes gjennom å presentere solide bevis"
            ],
            answer: 0,
            feedback: "Et stråmannsargument innebærer å feilrepresentere motstanderens posisjon for å gjøre den enklere å angripe."
        },
        {
            question: "Hva betyr det epistemologiske begrepet 'innvending'?",
            options: [
                "En diskusjon om hvorvidt kunnskap er mulig i det hele tatt", 
                "En kritikk av et argument for å vise svakheter eller feil", 
                "En metode for å forsterke et argument", 
                "En tilnærming til å forstå andres kulturelle perspektiver"
            ],
            answer: 1,
            feedback: "En innvending er en kritikk rettet mot et argument for å vise svakheter eller mangler."
        },
        {
            question: "Hva kjennetegner et 'analogiargument'?",
            options: [
                "Et argument som støtter en påstand ved å påvise likheter med en annen kjent sak", 
                "Et argument som alltid baserer seg på statistiske data", 
                "Et argument hvor konklusjonen følger nødvendigvis av premissene", 
                "Et argument som kun gjelder matematiske problemstillinger"
            ],
            answer: 0,
            feedback: "Et analogiargument påviser likheter mellom to tilfeller for å støtte en påstand om et av tilfellene."
        },
        {
            question: "Hva er hovedmålet med argumentasjonsteori?",
            options: ["Å bevise sannheter", "Å overbevise andre", "Å forstå logikk", "Å stille spørsmål"],
            answer: 1,
            feedback: "Argumentasjonsteori handler om å overbevise og presentere holdbare argumenter."
        },
        {
            question: "Hva er en deduktiv slutning?",
            options: [
                "En prosess som gir en konklusjon med sannsynlighet", 
                "En logisk utledning hvor konklusjonen nødvendigvis følger av premissene", 
                "En tilnærming der konklusjonen baseres på erfaringer", 
                "En prosess som baserer seg på emosjoner og subjektive inntrykk"
            ],
            answer: 1,
            feedback: "En deduktiv slutning er en logisk prosess hvor konklusjonen følger med nødvendighet fra premissene."
        },
        {
            question: "Hva kjennetegner en induktiv slutning?",
            options: [
                "En konklusjon som nødvendigvis følger fra premissene", 
                "En prosess hvor konklusjonen har sannsynlighet basert på enkelttilfeller", 
                "En deduktiv logisk sammenheng mellom premissene", 
                "En argumentasjon som ikke avhenger av empiriske data"
            ],
            answer: 1,
            feedback: "En induktiv slutning er en prosess hvor konklusjonen er sannsynlig, men ikke nødvendigvis følger, basert på observasjoner."
        },


    ],
    "Vitenskapsfilosofi": [
        {
            question: "Ifølge enkelte personer har mennesker en usynlig livsenergi som sørger for at kropp og sjel er i harmoni. Ifølge disse personene kan sykdomssymptomer og helseproblemer noen ganger skyldes at livsenergien er kommet i ubalanse. Mange, inkludert Popper, ville nok sagt at denne hypotesen om årsakene til helseproblemer er uvitenskapelig. \n\nHvordan kunne Popper argumentert for at hypotesen er uvitenskapelig?",
            options: [
                "Hypotesen er for uklar til at vi kan utlede prediksjoner som vi kan bruke til å teste den.",
                "Hypotesen beskriver noe som ikke er observerbart, og kan derfor ikke testes empirisk.",
                "Hypotesen gjør forutsetninger om forhold vi ikke kan ha sikker kunnskap om.",
                "Vi må forutsette for mange tilleggshypoteser for å kunne teste hypotesen."
            ],
            answer: 1,
            feedback: "Popper mente at en hypotese må være testbar for å være vitenskapelig. Hvis noe ikke kan testes empirisk, faller det utenfor vitenskapen."
        },
        {
            question: "Det blir ofte bemerket at det er en asymmetri mellom bekreftelse og avkreftelse av hypoteser. Hva er forskjellen?",
            options: [
                "For å avkrefte en hypotese gjennom observasjoner, kreves bare deduktive slutninger. Bekreftelse krever induksjon.",
                "Kun bekreftelse av hypoteser kan bidra til vitenskapelig fremskritt. Avkreftelse fører derimot til paradigmeskifter.",
                "Når en hypotese bekreftes av observasjoner, kan vi med sikkerhet si at den er sann. Avkreftelse gir ikke sikkerhet.",
                "Kun hypoteser som avkreftes gjennom testing er helt sikkert vitenskapelig. Hypoteser som bekreftes er det ikke."
            ],
            answer: 0,
            feedback: "Å avkrefte en hypotese krever deduktive slutninger, mens bekreftelse ofte krever induktive slutninger, som er mindre sikre."
        },
        {
            question: "Overraskelsesprinsippet sier noe om vitenskapelig bekreftelse. Hva skal til for at observasjon bekrefter en hypotese?",
            options: [
                "Observasjonen bekrefter en hypotese i den grad hypotesen er dristig og overraskende.",
                "Observasjonen bekrefter en hypotese i den grad den er forventet dersom hypotesen er sann, og overraskende dersom hypotesen er usann.",
                "Observasjonen bekrefter en hypotese i den grad den er overraskende dersom hypotesen er sann, og forventet dersom hypotesen er usann.",
                "Observasjonen bekrefter en hypotese i den grad observasjonen den leder til overraskende konklusjoner."
            ],
            answer: 1,
            feedback: "Observasjoner bekrefter en hypotese når det forventes at observasjonen følger fra hypotesen hvis den er sann, men er overraskende ellers."
        },
        {
            question: "Hvilket av følgende forslag passer best som en definisjon av uttrykket «normalvitenskap», slik Thomas Kuhn bruker det?",
            options: [
                "Vitenskapelige studier av normale ting, dvs. det som kan observeres direkte.",
                "Vitenskapelig arbeid som gjøres innenfor eller på bakgrunn av et paradigme.",
                "Undersøkelser som søker å avkrefte eller falsifisere, snarere enn å bekrefte eller verifisere, hypoteser.",
                "Vitenskap som ikke reiser spesielle etiske dilemmaer."
            ],
            answer: 1,
            feedback: "Kuhn beskriver normalvitenskap som forskning innenfor et etablert paradigme, som aksepterer grunnleggende antakelser uten å utfordre dem."
        },
        {
            question: "Hvilket av de følgende alternativene er et eksempel på et epistemologisk spørsmål?",
            options: [
                "Hva bør vi gjøre for å unngå å ta feil om hvordan virkeligheten er?",
                "Er alt som skjer i universet bestemt (determinert) av forutgående årsaker?",
                "Hva er forskjellen mellom sosiale, psykologiske og fysiske fenomener?",
                "Finnes det kulturuavhengige standarder for hva som er moralsk riktig og galt?"
            ],
            answer: 0,
            feedback: "Et epistemologisk spørsmål handler om kunnskap og hvordan vi kan unngå feiloppfatninger om virkeligheten."
        },
        {
            question: "Hvilket av følgende scenarier gir det mest treffende eksemplet på bekreftelsestendens (confirmation bias)?",
            options: [
                "Edgar, en historiker, presenterer forskningsfunnene sine på en konferanse. Når han utfordres til å gi evidens for sine konklusjoner, svarer han at hvis ingen av konferansedeltakerne kan gi noen bedre forklaring av funnene, må de akseptere hans forklaring.",
                "Sarah, en biolog, utfører eksperimenter uten en klar hypotese. Etter å ha fått noen resultater, velger hun en passende hypotese.",
                "Emily, en psykolog, utfører en studie for å undersøke et fenomen. Hun rapporterer selektivt bare data som bekrefter hypotesen hennes og ignorerer eventuelle data som motsier den.",
                "Markus, en nevrofysiker, utfører eksperimenter for å teste hypotesen sin. Han vurderer konsekvent resultatene objektivt og vurderer alternative forklaringer for uventede funn."
            ],
            answer: 2,
            feedback: "Bekreftelsestendens innebærer å fokusere på data som støtter en hypotese, mens man ignorerer data som motsier den."
        },


        {
            question: "Hva menes med 'teoriavhengighet av observasjon'?",
            options: [
                "At alle observasjoner kan være feil", 
                "At observasjoner påvirkes av teoretiske forutsetninger og bakgrunn", 
                "At observasjoner aldri kan støtte en teori", 
                "At observasjoner er helt uavhengige av teorier"
            ],
            answer: 1,
            feedback: "Teoriavhengighet av observasjon betyr at våre observasjoner formes av de teoriene og konseptene vi allerede har."
        },
        {
            question: "Hva er formålet med 'hypotetisk-deduktiv metode' i vitenskapen?",
            options: [
                "Å kun observere naturfenomener uten hypoteser", 
                "Å teste hypoteser gjennom deduksjon og observasjon", 
                "Å bekrefte teorier uten å teste dem empirisk", 
                "Å utvikle vitenskapelige teorier uten eksperimenter"
            ],
            answer: 1,
            feedback: "Den hypotetisk-deduktive metode tester hypoteser ved å dedusere prediksjoner som kan bekreftes eller avkreftes."
        },
        {
            question: "Hva betyr Kuhns begrep 'paradigmeskifte'?",
            options: [
                "En liten justering innenfor et etablert vitenskapelig system", 
                "En overgang fra et vitenskapelig system til et fundamentalt nytt rammeverk", 
                "En ubetydelig endring i vitenskapelig praksis", 
                "En gradvis akkumulering av data som forsterker eksisterende teorier"
            ],
            answer: 1,
            feedback: "Kuhn beskriver paradigmeskifte som en overgang til et nytt vitenskapelig rammeverk når det eksisterende systemet kollapser."
        },
        {
            question: "Hvordan forstår Quine-Duhem-tesen hypotesetesting?",
            options: [
                "Hypoteser testes i isolasjon uten kontekst", 
                "Hypoteser testes alltid sammen med andre antagelser og teorier", 
                "Hypotesetesting er alltid en objektiv prosess", 
                "Hypotesetesting er irrelevant for vitenskapelig fremgang"
            ],
            answer: 1,
            feedback: "Quine-Duhem-tesen påpeker at hypoteser aldri testes alene, men alltid sammen med andre antagelser og teorier."
        },
        {
        question: "Hva mente Popper med 'vitenskapelig fremgang' gjennom falsifikasjon?",
        options: [
            "At vitenskapen kun gjør fremskritt gjennom gradvis akkumulering av kunnskap", 
            "At vitenskapen går fremover ved å falsifisere hypoteser som ikke stemmer", 
            "At vitenskapelig fremgang skjer uten hensyn til empiriske tester", 
            "At fremskritt kun oppnås gjennom aksept av velprøvde teorier"
        ],
        answer: 1,
        feedback: "Popper mente at vitenskapen gjør fremskritt ved å eliminere feilaktige hypoteser gjennom falsifikasjon."
    },
    {
        question: "Hva betyr 'epistemisk rettferdighet' i et kunnskapssamfunn?",
        options: [
            "At kunnskapssamfunnet skal være økonomisk rettferdig", 
            "At alle har rett til lik behandling som kunnskapsbærere uten fordommer", 
            "At kunnskap alltid må være vitenskapelig bekreftet", 
            "At kunnskap skal være universell og fritt tilgjengelig for alle"
        ],
        answer: 1,
        feedback: "Epistemisk rettferdighet innebærer rettferdig behandling av individer som kunnskapsbærere, uavhengig av sosial bakgrunn."
    },
    
    {
        question: "Hva mente Kuhn med 'vitenskapelig revolusjon'?",
        options: [
            "At vitenskap utvikler seg gjennom gradvis akkumulering av kunnskap", 
            "At vitenskapen skifter paradigme etter en krise", 
            "At vitenskapelige teorier bare endres innenfor ett paradigme", 
            "At vitenskapelige fremskritt skjer lineært uten forstyrrelser"
        ],
        answer: 1,
        feedback: "Kuhn beskrev vitenskapelige revolusjoner som skifter i paradigmer etter en krise, hvor nye teorier avløser de gamle."
    },
        {
            question: "Hva er 'den hypotetisk-deduktive metode'?",
            options: [
                "En metode der teorier bevises gjennom observasjoner alene", 
                "En metode for å teste hypoteser ved å utlede testbare forutsigelser", 
                "En prosess som kun bekrefter teorier uten testing", 
                "En metode som utelukkende bruker matematiske resonnementer"
            ],
            answer: 1,
            feedback: "Den hypotetisk-deduktive metode innebærer å teste en teori ved å utlede forutsigelser som kan bekreftes eller avkreftes empirisk."
        },
        {
            question: "Hva menes med 'inkommensurabilitet' i Kuhns vitenskapsfilosofi?",
            options: [
                "Teorier som ikke kan sammenlignes fordi de mangler et felles mål", 
                "At to teorier kan sammenlignes direkte og evalueres likt", 
                "At teorier alltid er kompatible på tvers av paradigmer", 
                "At vitenskapelig fremskritt kun skjer gjennom lineær akkumulering"
            ],
            answer: 0,
            feedback: "Kuhn mente at teorier fra ulike paradigmer er inkommensurable fordi de mangler et felles mål for sammenligning."
        },
        {
            question: "Hva beskriver 'teoriavhengighet av observasjon'?",
            options: [
                "At observasjoner alltid bekrefter teorier uten tolkning", 
                "At observasjoner påvirkes av forskerens teoretiske rammeverk", 
                "At observasjoner er helt objektive og uavhengige av hypoteser", 
                "At all observasjon kun er påvirket av tidligere eksperimenter"
            ],
            answer: 1,
            feedback: "Teoriavhengighet innebærer at våre observasjoner formes av de teoriene og begrepene vi allerede har."
        },
        {
            question: "Hva går Mertons KUDOS-normer ut på?",
            options: [
                "En serie normer som vurderer personlige interesser i vitenskap", 
                "En rekke sosiale normer for å fremme objektivitet i vitenskap", 
                "En metode for empirisk testing av vitenskapelige hypoteser", 
                "En modell for etikk som vurderer moralsk handling"
            ],
            answer: 1,
            feedback: "KUDOS-normene, utarbeidet av Robert Merton, fremmer sosiale normer som skal sikre vitenskapelig objektivitet."
        },
        
        {
            question: "Hva innebærer 'reduksjonisme' i vitenskapsfilosofi?",
            options: [
                "Å forklare komplekse fenomener gjennom deres mest grunnleggende bestanddeler", 
                "Å forstå fenomener som uavhengige av hverandre", 
                "Å basere vitenskapelige teorier kun på observasjon", 
                "Å skille alle vitenskapelige disipliner fra hverandre uten overlapping"
            ],
            answer: 0,
            feedback: "Reduksjonisme innebærer å forklare komplekse fenomener ved å bryte dem ned til deres mest grunnleggende bestanddeler."
        },
        {
            question: "Hva ligger i Poppers syn på pseudovitenskap?",
            options: [
                "Pseudovitenskap er enhver teori uten matematisk grunnlag", 
                "Pseudovitenskap er teorier som ikke kan bekreftes gjennom deduktiv logikk", 
                "Pseudovitenskap er påstander som ikke kan falsifiseres og testes", 
                "Pseudovitenskap gjelder teorier basert på subjektive vurderinger alene"
            ],
            answer: 2,
            feedback: "Popper betraktet teorier som ikke kan testes eller motbevises som pseudovitenskap, uansett hvor komplekse eller overbevisende de kan virke."
        },
        {
            question: "Hva er Quine-Duhem-tesen, og hvordan utfordrer den falsifikasjonismen?",
            options: [
                "Den hevder at teorier kan bekreftes uten empirisk testing", 
                "Den påstår at alle hypoteser testes i isolasjon uten ytre påvirkning", 
                "Den viser at hypoteser aldri testes alene, noe som utfordrer klar falsifikasjon", 
                "Den antyder at falsifikasjonismen er overlegen andre metoder"
            ],
            answer: 2,
            feedback: "Quine-Duhem-tesen påpeker at hypoteser aldri kan testes i isolasjon, noe som gjør det utfordrende å avgjøre hvilken hypotese som skal forkastes."
        },
        {
            question: "Hva betyr det i vitenskapsteori at en teori er 'falsifiserbar'?",
            options: [
                "At teorien kan støttes av empiri", 
                "At teorien er formet uten bevis og derfor kan være feil", 
                "At det finnes potensielle observasjoner som kan motbevise teorien", 
                "At teorien kun er basert på subjektive antakelser"
            ],
            answer: 2,
            feedback: "Falsifiserbarhet betyr at en teori er testbar og kan motbevises ved observasjon eller eksperiment."
        },
        {
            question: "Hva er kritisk realisme i vitenskapsfilosofi?",
            options: [
                "En teori som hevder at all vitenskap er subjektiv", 
                "En holdning som aksepterer at virkeligheten eksisterer uavhengig av vår persepsjon", 
                "En tro på at kun det vi kan observere er virkelig", 
                "En vitenskapelig metode som avviser alle teorier"
            ],
            answer: 1,
            feedback: "Kritisk realisme hevder at virkeligheten eksisterer uavhengig av menneskelig persepsjon, men at vår forståelse kan være begrenset."
        },
        {
            question: "Hva kjennetegner epistemisk rettferdighet?",
            options: [
                "At kunnskap skal vurderes kun ut fra empiriske data", 
                "At alle samfunnsmedlemmer skal bli rettferdig behandlet som kunnskapsbærere", 
                "At kunnskap er avhengig av individets sosiale status", 
                "At sannhet alltid skal bestemmes gjennom vitenskapelige metoder"
            ],
            answer: 1,
            feedback: "Epistemisk rettferdighet innebærer at alle skal behandles rettferdig som kunnskapsbærere, uansett bakgrunn."
        },
        {
            question: "Hva betyr 'falsifikasjon' i vitenskapelig metode?",
            options: [
                "Prosessen med å bevise en teori riktig", 
                "En test for å bekrefte en hypotese", 
                "En prosess for å motbevise eller avkrefte en vitenskapelig teori", 
                "En metode for å samle støttebevis for en teori"
            ],
            answer: 2,
            feedback: "Falsifikasjon er prosessen med å teste en teori for å se om den kan motbevises, som Popper understreket."
        },
        {
            question: "Hva kjennetegner en 'teleologisk' forklaring?",
            options: [
                "En forklaring som kun fokuserer på naturlige årsaker og effekter", 
                "En forklaring som ser på formål eller mål med et fenomen", 
                "En forklaring som utelukkende baserer seg på eksperimenter", 
                "En forklaring som avviser alle formål uten bevis"
            ],
            answer: 1,
            feedback: "En teleologisk forklaring søker å forklare fenomener ut fra formål eller mål, snarere enn kun årsak."
        },
        {
            question: "Hva er et hovedpunkt i Standpunktepistemologi?",
            options: [
                "At kunnskap alltid er objektiv og uavhengig av sosiale forhold", 
                "At menneskers sosiale posisjoner kan påvirke deres tilgang til kunnskap", 
                "At all kunnskap kun kan oppnås gjennom naturvitenskap", 
                "At alle perspektiver er like gyldige uansett kontekst"
            ],
            answer: 1,
            feedback: "Standpunktepistemologi hevder at sosiale posisjoner kan påvirke tilgang til kunnskap."
        },
        {
            question: "Hva mente Spinoza med at alt er 'Gud eller naturen'?",
            options: [
                "At Gud eksisterer uavhengig av den fysiske verden", 
                "At Gud og naturen er to adskilte men samarbeidende enheter", 
                "At Gud og naturen er to navn for den samme, altomfattende substansen", 
                "At Gud kun finnes i menneskelig moral og ikke i naturen"
            ],
            answer: 2,
            feedback: "Spinoza mente at Gud og naturen er to uttrykk for samme substans, en helhetlig virkelighet."
        },
        {
            question: "Hvordan forklarer pragmatismen sannhet?",
            options: [
                "Som noe som er uforanderlig og absolutt", 
                "Som noe som måles i forhold til praktisk nytte og resultater", 
                "Som noe som kun kan oppnås gjennom logiske resonnementer", 
                "Som noe som avhenger av kultur og tradisjon"
            ],
            answer: 1,
            feedback: "Pragmatismen ser sannhet som det som fungerer best i praksis og gir nyttige resultater."
        },
        {
            question: "Hva skiller 'sterk' fra 'svak' reduksjonisme i vitenskapsfilosofi?",
            options: [
                "Sterk reduksjonisme ser alle fenomener som uavhengige, mens svak ser dem som sammenhengende", 
                "Sterk reduksjonisme hevder at alle fenomener fullt ut kan forklares gjennom deres bestanddeler, mens svak hevder at helheten også spiller en rolle", 
                "Svak reduksjonisme baserer seg på naturlover, mens sterk baserer seg på kulturelle normer", 
                "Sterk reduksjonisme fokuserer på sansedata, mens svak kun fokuserer på teoretiske prinsipper"
            ],
            answer: 1,
            feedback: "Sterk reduksjonisme hevder at alt kan forklares gjennom sine deler, mens svak aksepterer at helheten også er viktig."
        },
        {
            question: "Hvordan beskriver Thomas Kuhn 'normalvitenskap'?",
            options: [
                "En prosess der forskere søker helt nye paradigmer", 
                "En vitenskapelig praksis innenfor rammene av et eksisterende paradigme", 
                "En tilnærming hvor alle etablerte teorier forkastes", 
                "En vitenskap som kun baserer seg på metafysiske teorier"
            ],
            answer: 1,
            feedback: "Normalvitenskap, ifølge Kuhn, er forskningen som skjer innenfor et etablert paradigmes rammer, uten radikale endringer."
        },
        {
            question: "Hva er formålet med hypotetisk-deduktiv metode?",
            options: [
                "Å samle data uten å formulere hypoteser", 
                "Å teste en teori ved å utlede testbare prediksjoner", 
                "Å basere vitenskapen kun på subjektive opplevelser", 
                "Å formulere lover uten nødvendighet for testing"
            ],
            answer: 1,
            feedback: "Den hypotetisk-deduktive metoden tester en teori ved å utlede prediksjoner som kan bekreftes eller avkreftes."
        },
        {
            question: "Hva er hovedpoenget i 'standpunktepistemologi'?",
            options: [
                "At kunnskap er universell og ikke avhenger av erfaring", 
                "At individers sosiale posisjoner gir ulike innsikter i kunnskap", 
                "At kun vitenskapelige fakta teller som gyldig kunnskap", 
                "At all kunnskap stammer fra sansene og er objektiv"
            ],
            answer: 1,
            feedback: "Standpunktepistemologi hevder at ulike sosiale posisjoner gir unike perspektiver og innsikter i kunnskap."
        },
        {
            question: "Hva mente Nietzsche med 'Gud er død'?",
            options: [
                "At vitenskapen har bevist at Gud aldri har eksistert", 
                "At tradisjonell moral basert på religion ikke lenger er gyldig", 
                "At menneskelig fornuft har erstattet behovet for religion", 
                "At Gud eksisterer kun i menneskers tanker og ikke i virkeligheten"
            ],
            answer: 1,
            feedback: "Nietzsche mente at tradisjonelle moralske verdier basert på religion ikke lenger har en autoritet i det moderne samfunnet."
        },
        {
            question: "Hva innebærer reduksjonisme i vitenskapsfilosofi?",
            options: [
                "At komplekse fenomener kan forklares ved hjelp av deres enkleste bestanddeler", 
                "At vitenskap kun skal fokusere på store og omfattende teorier", 
                "At alle fenomen kun kan forstås gjennom et helhetlig perspektiv", 
                "At reduksjon av teorier fører til tap av kunnskap"
            ],
            answer: 0,
            feedback: "Reduksjonisme innebærer å forklare komplekse fenomener ved å bryte dem ned i deres enkleste bestanddeler."
        },
        {
            question: "Hva menes med determinisme i vitenskapsteori?",
            options: [
                "At fremtidige hendelser er helt forutsigbare gitt tidligere tilstander og naturlover", 
                "At mennesker kan handle uten noen ytre påvirkning", 
                "At tilfeldigheter alltid spiller en avgjørende rolle i naturen", 
                "At vitenskap ikke kan forklare noen naturlige prosesser"
            ],
            answer: 0,
            feedback: "Determinisme innebærer at alle hendelser er forårsaket av tidligere tilstander og naturlover, og derfor i prinsippet forutsigbare."
        },
        {
            question: "Hva var Thomas Kuhns syn på vitenskapens utvikling?",
            options: [
                "At vitenskapelig fremskritt er en kontinuerlig prosess med gradvis forbedring", 
                "At vitenskap utvikler seg gjennom revolusjonære paradigmeskifter", 
                "At vitenskapen har en lineær utvikling uten store endringer", 
                "At all vitenskap må baseres på religiøse og kulturelle normer"
            ],
            answer: 1,
            feedback: "Kuhn mente at vitenskapen utvikler seg gjennom revolusjonære paradigmeskifter som avløser hverandre."
        },
        {
            question: "Hva er det viktigste poenget med Karl Poppers falsifikasjonskriterium?",
            options: [
                "At vitenskapelige teorier skal baseres på personlige oppfatninger", 
                "At en teori må kunne motbevises for å være vitenskapelig gyldig", 
                "At vitenskap kun er gyldig hvis den er allment akseptert", 
                "At en teori alltid skal bekreftes av empiri uten unntak"
            ],
            answer: 1,
            feedback: "Popper mente at en teori må være falsifiserbar, altså at den kan motbevises, for å regnes som vitenskapelig."
        },
        {
            question: "Hva kjennetegner empirisme som kunnskapsteori?",
            options: [
                "At kunnskap kun kommer fra fornuften og ikke sanseerfaring", 
                "At all kunnskap kommer fra sanseerfaring og observasjon", 
                "At kunnskap er medfødt og uavhengig av erfaring", 
                "At kunnskap alltid er basert på teoretiske antagelser"
            ],
            answer: 1,
            feedback: "Empirisme hevder at all kunnskap stammer fra sanseerfaring og observasjon."
        },
        {
            question: "Hva er kjernen i vitenskapsfilosofi?",
            options: ["Forstå forskningsmetoder", "Stille spørsmål om mennesket", "Oppdage nye fenomener", "Analysere kunst"],
            answer: 0,
            feedback: "Vitenskapsfilosofi fokuserer på forskningsmetoder og vitenskapelige prinsipper."
        },
        {
            question: "Hva er hovedkritikken mot epistemisk relativisme?",
            options: [
                "At den undervurderer betydningen av erfaring i kunnskapsdannelse", 
                "At den innebærer at alle sannheter er like gyldige, uansett grunnlag", 
                "At den fokuserer for mye på empiriske metoder", 
                "At den kun godtar universelle sannheter uten nyanser"
            ],
            answer: 1,
            feedback: "Epistemisk relativisme kritiseres for å sidestille alle sannheter, noe som kan gjøre det vanskelig å skille mellom godt og dårlig begrunnet kunnskap."
        },
   
    ],
    "Humaniora": [
            {
                question: "Hva er kjernen i Lévi-Strauss' strukturelle analyse av myter, slik som Ødipus-myten?",
                options: [
                    "Myter er kulturelle narrativer uten grunnlag i struktur",
                    "Myter reflekterer logiske motsetninger i menneskelige erfaringer",
                    "Myter utgjør en rekke individuelle hendelser uten sammenheng",
                    "Myter representerer bare en enkel historiefortelling"
                ],
                answer: 1,
                feedback: "Lévi-Strauss mente at myter reflekterer logiske motsetninger, som i Ødipus-myten med motsetningen mellom slektskapsbånd og jordfødthet."
            },
            {
                question: "Hva kjennetegner diskursanalyse ifølge Foucault?",
                options: [
                    "En analyse av språklige strukturer uavhengig av kontekst",
                    "En studie av hvordan utsagn får mening gjennom eksisterende ordenssystemer",
                    "En oppsummering av verkets psykologiske perspektiver",
                    "En analyse av språklige ytringer som følge av individuelle intensjoner"
                ],
                answer: 1,
                feedback: "Foucaults diskursanalyse fokuserer på hvordan utsagn er underlagt en forutbestemt orden som gir dem mening."
            },
            {
                question: "Hva mente Foucault om gjengs idéhistorisk forskning?",
                options: [
                    "Den gir en dynamisk tolkning av utsagn og verker",
                    "Den tilbyr en alternativ forståelse av menneskelige erfaringer",
                    "Den begrenser historien til kontinuitet og trygge fortolkninger",
                    "Den gir en realistisk fremstilling av historiske begivenheter"
                ],
                answer: 2,
                feedback: "Foucault kritiserte idéhistorisk forskning for å skape kontinuitet som gir 'bedøvet søvn' og begrenser forståelsen av det kontingente."
            },
            {
                question: "Hva er 'forfatterfunksjonen' ifølge Foucault?",
                options: [
                    "En teoretisk rolle der forfatteren er irrelevant",
                    "Et system for å kategorisere tekst som betydningsfullt eller ei",
                    "Forfatterens personlige liv og intensjoner i et verk",
                    "Et stabilt element som skaper mening i alle diskurser"
                ],
                answer: 1,
                feedback: "Forfatterfunksjonen er en måte å kategorisere visse mengder tekst som et 'verk' basert på en antatt kilde til mening."
            },
            {
                question: "Hva innebærer Gadamers begrep om virkningshistorie?",
                options: [
                    "Historien om verket basert på forfatterens intensjoner",
                    "En serie språklige endringer over tid",
                    "Et verks innflytelse og tradisjonelle fortolkninger over tid",
                    "En linjær utvikling av et verks narrativ"
                ],
                answer: 2,
                feedback: "Virkningshistorie refererer til hvordan et verk blir fortolket og re-fortolket over tid og danner tradisjoner."
            },
            {
                question: "Hva betyr begrepet 'konstruktivistisk kjønnsperspektiv'?",
                options: [
                    "Kjønn er en biologisk realitet med faste egenskaper",
                    "Kjønn er en identitet som skapes gjennom sosiale handlinger",
                    "Kjønn eksisterer uavhengig av menneskelige erfaringer",
                    "Kjønn kan kun forstås gjennom biologiske forskjeller"
                ],
                answer: 1,
                feedback: "Det konstruktivistiske kjønnsperspektivet ser på kjønn som en identitet som formes gjennom sosiale og kulturelle handlinger."
            },
            {
                question: "Hva mente Simone de Beauvoir med begrepet 'Den andre'?",
                options: [
                    "At kvinnen er likeverdig, men forskjellig fra mannen",
                    "At kvinnen blir sett som en selvstendig individ",
                    "At kvinnen defineres i forhold til mannen, som subjektet",
                    "At kvinnelig identitet er helt uavhengig av mannens"
                ],
                answer: 2,
                feedback: "Beauvoir mente at kvinnen ofte defineres som 'Den andre' i forhold til mannen, som ses som Subjektet."
            },
            {
                question: "Hva var Judith Butlers syn på kjønn?",
                options: [
                    "Kjønn er en biologisk essens som ikke endres",
                    "Kjønn er en stabil identitet skapt av kroppen",
                    "Kjønn er en identitet skapt gjennom repetisjoner av sosiale handlinger",
                    "Kjønn er en egenskap som utelukkende er genetisk"
                ],
                answer: 2,
                feedback: "Butler hevder at kjønn konstitueres gjennom repetisjon av sosiale handlinger og ikke er en fast identitet."
            },
            {
                question: "Hvordan ble kvinnens rolle i antikkens Athen språklig representert?",
                options: [
                    "Hun ble inkludert i begrepet 'Athenaios'",
                    "Hun hadde samme status som menn i språket",
                    "Hun var ekskludert fra borgerstatus og språklige titler",
                    "Hun ble sett på som et autonomt medlem av samfunnet"
                ],
                answer: 2,
                feedback: "Kvinnen hadde ingen borgerstatus og ble språklig ekskludert i antikkens Athen."
            },
            {
                question: "Hvordan kritiserer Julia Serano Butlers teori om kjønn som 'performativt'?",
                options: [
                    "Serano mener kjønn er performativt i sin helhet",
                    "Hun hevder at kjønn utelukkende er sosialt konstruert",
                    "Hun påpeker at performativ teori overser dype personlige opplevelser av kjønn",
                    "Serano mener kjønn bare er en kulturell identitet uten kroppslig realitet"
                ],
                answer: 2,
                feedback: "Serano kritiserer performativ teori for å overse personlige og kroppslige opplevelser av kjønn."
            },        
            {
                question: "Hva er målet med Schleiermachers hermeneutikk?",
                options: [
                    "Å forstå teksten uavhengig av forfatterens intensjoner",
                    "Å forstå sjelslivet til forfatteren gjennom verket",
                    "Å tolke teksten ut fra dens strukturelle elementer",
                    "Å avdekke verket uten noen psykologisk tilnærming"
                ],
                answer: 1,
                feedback: "Schleiermacher mente at målet var å forstå sjelslivet til forfatteren gjennom verket."
            },
            {
                question: "Hva karakteriserer den grammatiske tilnærmingen i Schleiermachers hermeneutikk?",
                options: [
                    "Den fokuserer på forfatterens mentale tilstander",
                    "Den analyserer allmenne språklige forutsetninger",
                    "Den krever en dyp forståelse av samtidens psyke",
                    "Den bygger på subjektiv opplevelse av teksten"
                ],
                answer: 1,
                feedback: "Den grammatiske tilnærmingen analyserer de allmenne språklige forutsetningene for forfatterens verk."
            },
            {
                question: "Hva er en for-dom ifølge Gadamers hermeneutikk?",
                options: [
                    "En antakelse fortolkeren har før møtet med verket",
                    "En dom om verkets moralske verdi",
                    "En analyse av tekstens språklige struktur",
                    "En historisk analyse av forfatterens samtid"
                ],
                answer: 0,
                feedback: "En for-dom er en bestemt oppfatning fortolkeren møter verket med, ifølge Gadamer."
            },
            {
                question: "Hva innebærer forståelseshorisonten ifølge Gadamer?",
                options: [
                    "Summen av alle erfaringer en person har",
                    "Summen av for-dommer en person bruker for å forstå",
                    "Bare de bevisste antagelsene om et verk",
                    "Et ferdig tolkningsrammeverk"
                ],
                answer: 1,
                feedback: "Forståelseshorisonten er summen av for-dommer en person bruker til å forstå seg selv og verden."
            },
            {
                question: "Hva betyr virkningshistorie i Gadamers hermeneutikk?",
                options: [
                    "Historien om et verks påvirkning gjennom tolkninger",
                    "Forfatterens intensjon med verket",
                    "Hvordan verket forstår sine egne lesere",
                    "Den språklige strukturen til verket"
                ],
                answer: 0,
                feedback: "Virkningshistorie handler om mengden av fortolkninger et verk har gjennomgått og tradisjonen som dannes rundt det."
            },
            {
                question: "Hvordan definerer Saussure språktegnet?",
                options: [
                    "Som en refleksjon av språkbrukerens tanker",
                    "Som et element med fastlagt mening",
                    "Som en enhet av uttrykk og innhold",
                    "Som et symbol på universell mening"
                ],
                answer: 2,
                feedback: "Saussure definerer språktegnet som en enhet av uttrykk og innhold."
            },
            {
                question: "Hva fokuserer strukturalismen på ifølge Saussures prinsipper?",
                options: [
                    "En diakron analyse av språket",
                    "Språkets utvikling over tid",
                    "Språksystemets struktur på et gitt tidspunkt",
                    "En individuell språkbrukers perspektiv"
                ],
                answer: 2,
                feedback: "Strukturalismen fokuserer på språksystemets struktur på et gitt tidspunkt, ikke på utvikling over tid."
            },
            {
                question: "Hva innebærer den diakrone tilnærmingen til språk ifølge Saussure?",
                options: [
                    "Studiet av språk som et fast system",
                    "Fokus på språkets utvikling over tid",
                    "En ren grammatisk analyse",
                    "En psykologisk tilnærming til språk"
                ],
                answer: 1,
                feedback: "Diakron tilnærming fokuserer på språkets utvikling over tid, i motsetning til synkron tilnærming."
            },
            {
                question: "Hvordan karakteriserer Gadamer sannhet i hermeneutisk sammenheng?",
                options: [
                    "Som en objektiv forståelse av et verk",
                    "Som en erfaring av avdekkethet mellom fortolker og verk",
                    "Som en psykologisk prosess knyttet til forfatterens intensjoner",
                    "Som et fastlagt meningsinnhold i teksten"
                ],
                answer: 1,
                feedback: "Gadamer ser sannhet som en erfaring av avdekkethet som oppstår mellom fortolker og verk."
            },
            {
                question: "Hva er Schleiermachers syn på fullstendig tolkning?",
                options: [
                    "Den krever kun grammatisk analyse",
                    "Den krever både grammatisk og psykologisk analyse",
                    "Den bygger kun på psykologiske aspekter",
                    "Den er begrenset til tekstens innhold"
                ],
                answer: 1,
                feedback: "Schleiermacher mener en fullstendig tolkning må omfatte både grammatisk og psykologisk analyse."
            },        
        {
            question: "Hvilken av de følgende påstandene er den mest treffende beskrivelsen av noe som kan sies å være en forskjell mellom Poppers og Kuhns tenkning om vitenskap?",
            options: [
                "Ifølge Popper bør man sørge for at verdier ikke spiller noen rolle i vitenskapelig arbeid. Kuhn hevder derimot at vitenskapelig arbeid verken kan eller burde forsøke å frigjøre seg fra normer og verdier.",
                "Ifølge Popper må en vitenskapelig hypotese kunne utsettes for falsifisering. Kuhn hevder at for å gjøre fremskritt, må sentrale vitenskapelige teorier og hypoteser ofte gis en viss beskyttelse. Det trengs mer enn ett resultat som ikke passer for å velte dem.",
                "Popper er opptatt av å identifisere metoder man burde benytte for å undersøke verden på mest mulig rasjonell måte. Kuhn er i mindre grad opptatt av rasjonelle undersøkelser, og hevder at det å ha bestemte metoder ikke er spesielt viktig for vitenskapelig arbeid.",
                "For Popper er det viktig at vitenskapen opererer med sikkerhet. For Kuhn kan paradigmer veltes dersom det blir tilstrekkelig mange anomalier, og vi kan derfor aldri være helt sikre på at vi har den korrekte beskrivelsen av verden."
            ],
            answer: 1,
            feedback: "Popper krever at hypoteser kan falsifiseres, mens Kuhn mener at sentrale teorier bør beskyttes til et visst nivå før de forkastes."
        },
        {
            question: "Vitenskapsteoretikere har lenge vært opptatt av å formulere et kriterium som skiller vitenskap fra ikke-vitenskap (og spesielt ikke-vitenskap som utgir seg for å være vitenskap – såkalt pseudovitenskap).\n\nHvilken av følgende påstander uttrykker best Poppers versjon av demarkasjonskriteriet?",
            options: [
                "Vitenskap er basert på den vitenskapelige metode, dvs. hypotetisk-deduktiv metode.",
                "Pseudovitenskap er umulig å bekrefte induktivt",
                "Vitenskapelige hypoteser må kunne falsifiseres eller avkreftes, og hypotesene bør være dristige og vidtrekkende.",
                "Vitenskap er basert på observasjon og eksperiment, og induktiv generalisering av resultater fra observasjon og eksperiment."
            ],
            answer: 2,
            feedback: "Poppers demarkasjonskriterium er at hypoteser må være falsifiserbare for å regnes som vitenskapelige."
        },
        {
            question: "Mange vitenskapsfilosofer, inkludert Popper, har påpekt at bruk av ad hoc-hypoteser er problematisk.\n\nHvilket av følgende tilfeller er å betrakte som illegitim bruk av ad hoc-hypoteser, ifølge Popper?",
            options: [
                "En observasjon eller et eksperimentelt resultat som taler mot en hypotese, imøtegås med ytterligere hypoteser som har som mål å «redde» den opprinnelige hypotesen.",
                "En observasjon eller et eksperimentelt resultat som taler mot en hypotese, imøtegås ved at hypotesen reformuleres.",
                "En observasjon eller et eksperimentelt resultat som taler mot en hypotese leder til at hypotesen forkastes og erstattes med en ny hypotese som er i stand til å omfavne observasjonen eller det eksperimentelle resultatet.",
                "En observasjon eller et eksperimentelt resultat som taler mot hypotesen, ignoreres fordi man har uavhengig støtte for at hypotesen er korrekt."
            ],
            answer: 0,
            feedback: "Popper så ad hoc-hypoteser som problematiske når de brukes for å redde en teori uten å tilføre faktisk evidens."
        },
        {
            question: "Hva er hermeneutikk?",
            options: [
                "Et lukket system for optimalisert konservering.",
                "Et systematisert sett med prinsipper og regler for å gjennomføre rimelige fortolkninger av meningsytringer.",
                "Et teoretisk grunnlag for å fremme vilkårlige påstander om forfatterens intensjon.",
                "En metode for å ta rede på de tilgrunnliggende mulighetsbetingelsene for utsagn fra en gitt diskurs."
            ],
            answer: 1,
            feedback: "Hermeneutikk er en systematisk tilnærming til tolkning og forståelse av meningsytringer, med prinsipper for fortolkning."
        },
        {
            question: "På hvilken måte kan Schleiermacher sies å utvide hermeneutikkens virkeområde?",
            options: [
                "Hermeneutikk angår ikke kun religiøse tekster, men også lovverk.",
                "Hermeneutikk angår ikke kun tekster, men også sjelslivet til tekstens avsender.",
                "Hermeneutikk er ikke kun en metode for å tolke meningen til et menneskeskapt verk, men en beskrivelse av hvordan forståelse overhodet foregår.",
                "Hermenetikk angår ikke kun tekster og avsendere, men alle former for menneskelig meningsproduksjon."
            ],
            answer: 3,
            feedback: "Schleiermacher utvider hermeneutikken ved å inkludere alle former for meningsproduksjon, ikke bare skriftlige verk."
        },
        {
            question: "Schleiermacher identifiserer to sider ved utlegningskunsten: en psykologisk og grammatisk.\n\nHvordan karakteriseres dette forholdet best?",
            options: [
                "Den psykologiske siden er viktigst.",
                "Begge sidene er like viktige.",
                "Å vektlegge at en utlegning har en psykologisk og grammatisk side, hindrer den korrekte fortolkningen av en tekst.",
                "Den grammatiske siden er viktigst."
            ],
            answer: 1,
            feedback: "Ifølge Schleiermacher er både den psykologiske og grammatiske siden viktige for en helhetlig forståelse av tekst."
        },
        {
            question: "Hvordan karakteriserer Dilthey forholdet mellom humanvitenskap og naturvitenskap?",
            options: [
                "Naturvitenskapen er den eneste formen for kunnskapsproduksjon som fortjener merkelappen vitenskap. Skulle humanvitenskapene regnes som vitenskaper i streng forstand, må de ta i bruk naturvitenskapelige metoder.",
                "Humanvitenskapene søker å forstå mennesker og kultur gjennom å studere meningsytringer. Naturvitenskapen forklarer fenomen ved å vise til universelle lovmessigheter.",
                "Først når humanvitenskapene har bevist at sikker viten er mulig, kan vi være sikre på naturvitenskapenes innsikter.",
                "Det er ikke noe skille mellom human- og åndsvitenskap: både naturen og mennesket er underlagt de samme universelle lovmessigheter som det er vitenskapens oppgave å avdekke."
            ],
            answer: 1,
            feedback: "Dilthey skiller humanvitenskap som studiet av meningsytringer fra naturvitenskap som søker universelle lover."
        },
        {
            question: "Hos Gadamer er begrepet fordommer viktig. Hvordan skal vi vurdere fordommene?",
            options: [
                "Fordommer må betraktes som noe positivt, da de er en forutsetning for forståelse overhodet.",
                "Fordommer tilhører metodologisk sett oppdagelseskonteksten, og er i så måte irrellevante. Det som betyr noe er at man kan begrunne resultatene av en undersøkelse med logisk gyldige slutninger.",
                "Fordommer er verken positive eller negative. Den menneskelige forståelsen er så begrenset at det ikke spiller noen rolle om man har fordommer som står i veien for forståelsen eller ikke.",
                "Fordommer er negativt. De står i veien for en nøytral og verdifri vurdering av det vi skal forstå og fortolke."
            ],
            answer: 0,
            feedback: "Gadamer betrakter fordommer som viktige og nødvendige for å kunne forstå og tolke."
        },
        {
            question: "Hvordan betrakter Gadamer forholdet mellom tekst og fortolker?",
            options: [
                "Som en rekonstruksjon av forfatterens intensjon.",
                "Som en samtale bestående av spørsmål og svar.",
                "Som et forsøk på å formulere allmengyldige lovmessigheter om teksten.",
                "Som tekstens forsøk på å forføre leseren, og leserens forsøk på å motstå dette."
            ],
            answer: 1,
            feedback: "Gadamer beskriver forholdet mellom tekst og fortolker som en dialog hvor fortolkning skjer gjennom spørsmål og svar."
        },
        {
            question: "Hva mener Gadamer med forståelse?",
            options: [
                "Forståelse er til syvende og sist å gjenskape skaperakten bak et kunstverk. 'Å forstå forfatteren bedre enn forfatteren forstår seg selv.'",
                "Forståelse dreier seg om å kunne utforme universelle lovmessigheter som kan brukes for å forutsi hvordan enkeltfenomen vil komme til opptre under gitte betingelser.",
                "Forståelse må forstås som en sirkulær bevegelse, der man til syvende og sist også oppnår selvforståelse.",
                "Forståelse er å dedusere noe nytt fra noe allerede kjent."
            ],
            answer: 2,
            feedback: "Gadamer betrakter forståelse som en sirkulær prosess som også fører til økt selvinnsikt."
        },
        {
            question: "I sin presentasjon av hermeneutikken som humanvitenskapelig metodelære beskriver Schleiermacher hermeneutikkens oppgave på følgende måte: «Oppgaven må også uttrykkes slik: ‘først å forstå talen like godt, og siden bedre enn opphavsmannen’ […]». \n\nMed Gadamers hermeneutikk følger en kritikk av den hermeneutiske tradisjonen etter Schleiermacher. \n\nHvordan ser en rimelig formulering av Gadamers kritikk ut?",
            options: [
                "Den tradisjonelle hermeneutikken legger for mye vekt på å forstå forfatterens intensjon og for lite vekt på saksforholdet forfatteren påstår noe om.",
                "Den tradisjonelle hermeneutikken er ikke tilstrekkelig oppdatert på moderne vitenskapsideal, slik som HD-skjemaet og falsifikasjonisme.",
                "Den tradisjonelle hermeneutikken er for lite relativistisk og altfor snar til å felle moralske dommer over fortidens tekster og forfattere.",
                "Den tradisjonelle hermeneutikken er basert på en psykologisk teori om mennesket som leder til systematisk feilaktige framstillinger av sjelslivet til fortidige verks opphavspersoner."
            ],
            answer: 0,
            feedback: "Gadamer kritiserer hermeneutikken for å legge for mye vekt på forfatterens intensjon, i stedet for å fokusere på innholdet i teksten."
        },
        {
            question: "På hvilken måte utgjør den strukturelle lingvistikken en utfordring for den hermeneutiske tilnærmelsesmåten?",
            options: [
                "Den strukturelle lingvistikken viser hvordan hermeneutikken ikke er noe mer enn subjektiv, men glorifisert gjetting.",
                "Språket som system viser hvordan mening og betydning ikke kun kan gripes som forfatterens (budskapsavsenderens) indre intensjon.",
                "Den strukturelle lingvistikken viser hvordan den hermeneutiske sirkelen er en feilslutning.",
                "Hermeneutikkens insistering på forståelse er meningsløs så lenge forholdet mellom signifikant (det som betegner) og signifikat (det som betegnes) er arbitrært (dvs. tilfeldig)."
            ],
            answer: 1,
            feedback: "Strukturell lingvistikk utfordrer hermeneutikken ved å vise at mening ikke kun kan tolkes som forfatterens intensjon, men som en del av språket som system."
        },
        {
            question: "Strukturalismen og hermeneutikken vektlegger oppfatninger om betydning av tid/historie ulikt. Hvordan uttrykkes dette best?",
            options: [
                "Hermeneutikk vektlegger diakroni. Strukturalisme vektlegger synkroni.",
                "Hermeneutikk vektlegger synkroni. Strukturalisme vektlegger diakroni.",
                "Hermeneutikk vektlegger brudd. Strukturalisme vektlegger sammenheng.",
                "Hermeneutikk er ahistorisk. Strukturalisme er historisk kontrafaktisk."
            ],
            answer: 0,
            feedback: "Hermeneutikken fokuserer på den historiske utviklingen (diakroni), mens strukturalismen er mer opptatt av samtidige relasjoner (synkroni)."
        },
        {
            question: "Hva innebærer Foucaults tanke om vitensarkeologi?",
            options: [
                "At man må etablere et saksfelt slik at man kan se sammenhengen og likheten mellom ulike historiske perioder og vår egen.",
                "At man må grave så dypt at man kommer til bunns i ulike saker.",
                "På samme måte som ordinær arkeolog, må man prøve å finne likheter mellom fortiden og vår egen samtid for å forstå hvordan de tenkte i ulike historiske perioder.",
                "At én historisk periode fremviser større likheter mellom ulike disipliner (kunnskapsområder), enn hva én disiplin har til felles med seg selv på ulike tidspunkt i historien."
            ],
            answer: 3,
            feedback: "Foucaults vitensarkeologi ser på hvordan en historisk periode kan vise større likheter mellom disipliner enn innenfor én disiplin over tid."
        },
        {
            question: "Psykologen Sigmund Freud har en berømt påstand om kvinnen som «det mørke kontinentet».\n\nSett ut fra et kjønnsperspektiv på forskning i humaniora, hva er denne påstanden først og fremst et eksempel på?",
            options: [
                "Et reint innfall fra Freuds side som røper hans idiosynkratiske kvinnesyn.",
                "En feilaktig påstand som har blitt tilbakevist av senere forskning.",
                "En uklar måte å uttrykke noen reelle egenskaper ved kvinnen på.",
                "En retorisk skapelse av et kvinnebilde som inngår i et videre, fortolkende verdensbilde."
            ],
            answer: 3,
            feedback: "Freuds uttalelse kan sees som en retorisk konstruksjon som reflekterer et bredere fortolkende verdensbilde om kjønn."
        },
        {
            question: "Simone de Beauvoirs analyse ender med et begrep om kvinnen som den andre. Hva innebærer dette?",
            options: [
                "At kvinner utgjør den andre halvparten av verdens befolkning.",
                "At kvinnens annethet er et rent biologisk faktum.",
                "Et asymmetrisk kjønnsforhold der også kvinner ser på seg selv som underordnet.",
                "En gjensidig anerkjennelsesrelasjon, der balansen mellom førsteperson (jeg) og andreperson (du), hvor man virkelig ser den andre, er det sentrale."
            ],
            answer: 2,
            feedback: "Beauvoirs begrep om kvinnen som 'den andre' refererer til et asymmetrisk kjønnsforhold hvor kvinner ser seg selv som underordnet."
        },
        {
            question: "Elaine Showalter anvender termen gynokritikk. Hva betyr det?",
            options: [
                "Kritikken av den litterære offentlighetens fortielse av kvinnelige forfattere.",
                "Fokuset på kvinners som kritiske resepsjon av litteratur produsert av menn.",
                "Studiet av historier, tema, genre og strukturer som finnes i litteratur produsert av kvinner.",
                "At kvinnelige lesestrategier må ta utgangspunkt i spesifikke kvinnelige egenskaper som omsorg og empati."
            ],
            answer: 2,
            feedback: "Gynokritikk refererer til studiet av temaer, sjangre og strukturer i litteratur skrevet av kvinner."
        },
        {
            question: "Hvilken av følgende beskrivelser passer best på Poppers syn på vitenskapelig fremskritt?",
            options: [
                "Vitenskapelig fremskritt skjer gjennom å finne stadig mer belegg for de beste hypoteser og avkreftelse av de dårligere hypotesene.",
                "Vitenskapelig fremskritt skjer gjennom en eliminasjonsprosess der usanne hypoteser elimineres.",
                "Vitenskapelig fremskritt skjer ved at de mest dristige og vidtrekkende hypotesene i tilstrekkelig grad bekreftes av evidens.",
                "Vitenskapelig fremskritt skjer ved at dårligere paradigmer eller verdensbilder blir erstattet med bedre gjennom vitenskapelige revolusjoner."
            ],
            answer: 1,
            feedback: "Popper så vitenskapelig fremskritt som en prosess der falske hypoteser elimineres, slik at man kommer nærmere sannheten."
        },
        {
            question: "Det er vanlig å trekke et skille mellom en hypoteses oppdagelseskontekst og dens bekreftelseskontekst.\n\nHvilket av følgende alternativer uttrykker best en viktig grunn til å trekke et skille mellom oppdagelseskontekst og bekreftelseskontekst?",
            options: [
                "Skillet er viktig fordi oppdagelseskonteksten bestemmer om en hypotese er sann eller ikke. Dersom hypotesen ikke er oppdaget på en korrekt måte, er hypotesen gal.",
                "Skillet er viktig fordi hvorvidt en hypotese er støttet av evidens, er uavhengig av hvordan man oppdaget eller kom frem til hypotesen i utgangspunktet.",
                "Skillet er viktig fordi politiske og sosiale forhold som påvirker en hypoteses oppdagelseskontekst kan overføres til hypotesens bekreftelseskontekst.",
                "Skillet er viktig fordi at dersom bekreftelseskonteksten ikke kan logisk avledes fra oppdagelseskonteksten, er hypotesen gal."
            ],
            answer: 1,
            feedback: "Dette skillet er viktig da evidens for en hypotese vurderes uavhengig av hvordan hypotesen først ble oppdaget."
        },
        {
            question: "Ifølge Robert Mertons KUDOS-normer, er det viktig at forskere etterstreber normen om universalisme. Hva går normen om universalisme ut på?",
            options: [
                "Den går ut på at siden vitenskapelig praksis handler om å skape et bedre samfunn, må man forske på det som er til beste for alle.",
                "Den går ut på at man i utviklingen av vitenskapelige teorier må søke å komme frem til mest mulig allmenngyldige svar.",
                "Den går ut på at vitenskapelige påstander må kunne vurderes på bakgrunn av sitt innhold, uavhengig av hvem som fremsetter dem.",
                "Den går ut på at man må unngå at vitenskapelige forskningsprosjekt styres av forskeres egeninteresse."
            ],
            answer: 2,
            feedback: "Normen om universalisme innebærer at vitenskapelige påstander vurderes objektivt, uavhengig av hvem som presenterer dem."
        },
        {
            question: "Begrepet om situert kunnskap er sentralt innen standpunktepistemologi. Hva innebærer dette begrepet?",
            options: [
                "At alle grupper vurderer forskningsresultater likt.",
                "At vitenskapen må beholdes som verdifri.",
                "At egenskaper ved forskeren påvirker evalueringen av data og funn.",
                "At forskerens standpunkt og kunnskapen som oppnås, ikke må påvirkes av situasjoner utenfor forskningen."
            ],
            answer: 2,
            feedback: "Situert kunnskap innebærer at forskerens perspektiv og egenskaper kan påvirke hvordan data tolkes og forstås."
        },
        {
            question: "Hva går ideen om enhetsvitenskap ut på?",
            options: [
                "At vitenskapelige resultater først og fremst er et resultat av et komplekst samspill mellom økonomiske, politiske, sosiale og psykologiske faktorer.",
                "At forskjellige vitenskapers forklaringer og teorier kan knyttes til hverandre, slik at resultater i en vitenskap i prinsippet kan oversettes til beskrivelser i en mer grunnleggende vitenskap.",
                "At forskjellige vitenskapers forklaringer og teorier oppstår i så grunnleggende forskjellige kontekster at resultater i én disiplin prinsipielt ikke kan oversettes til en annen.",
                "At spesialisering av vitenskapelige disipliner er det som skaper mest effektive fremskritt, slik at vitenskapelige disipliner bør operere uavhengig av hverandre, uten å tillate oversettelse eller integrasjon av teorier."
            ],
            answer: 1,
            feedback: "Enhetsvitenskap handler om å knytte sammen ulike vitenskapsdisipliner slik at deres teorier og forklaringer kan oversettes mellom hverandre."
        },
        {
            question: "Hva innebærer humaniora?",
            options: ["Studiet av naturvitenskap", "Studiet av menneskelig kultur", "Studiet av politikk", "Studiet av teknologi"],
            answer: 1,
            feedback: "Humaniora fokuserer på studiet av menneskelig kultur og historie."
        }
    ],
    "Natur-, menneske- og teknologisyn": [
            {
                question: "Hva innebærer substansdualisme i kropp/sinn-problemet?",
                options: [
                    "At mentale tilstander er resultatet av fysiske prosesser",
                    "At sinn og kropp er to separate typer substans",
                    "At sinnet er en fysisk prosess innenfor kroppens grenser",
                    "At mentale og fysiske tilstander kan reduseres til ett fenomen"
                ],
                answer: 1,
                feedback: "Substansdualisme hevder at sinnet og kroppen er to distinkte substanser som eksisterer uavhengig av hverandre."
            },
            {
                question: "Hva er en hovedutfordring for substansdualisme?",
                options: [
                    "Å forklare hvordan immaterielle tilstander kan ha fysiske egenskaper",
                    "Å forstå hvordan kropp og sinn kan ha identiske funksjoner",
                    "Å bevise at mentale prosesser kun finnes i hjernen",
                    "Å forklare hvordan sinn og kropp interagerer med hverandre"
                ],
                answer: 3,
                feedback: "Problemet med substansdualisme er å forklare hvordan en immateriell sjel kan samhandle med en materiell kropp."
            },
            {
                question: "Hva innebærer fysikalismen i synet på mentale tilstander?",
                options: [
                    "At mentale tilstander har en fysisk årsak, men er immaterielle",
                    "At mentale tilstander er uavhengige av hjernens tilstander",
                    "At mentale tilstander er identiske med spesifikke nevrale tilstander",
                    "At mentale prosesser eksisterer på flere nivåer samtidig"
                ],
                answer: 2,
                feedback: "Fysikalismen hevder at mentale tilstander er identiske med nevrale tilstander, som forholdet mellom vann og H2O."
            },
            {
                question: "Hva er funksjonalismens syn på mentale tilstander?",
                options: [
                    "De er definert ut fra strukturelle egenskaper",
                    "De karakteriseres ved hva de gjør, uavhengig av fysisk form",
                    "De er unike for biologiske organismer",
                    "De eksisterer kun i organismer med komplekse nevronale nettverk"
                ],
                answer: 1,
                feedback: "Funksjonalismen mener mentale tilstander karakteriseres av funksjon, ikke av den fysiske strukturen som realiserer dem."
            },
            {
                question: "Hva er Searles hovedkritikk av Turingtesten?",
                options: [
                    "At testen er basert på en foreldet forståelse av menneskelig intelligens",
                    "At den feiler i å skille mellom syntaks og semantikk",
                    "At den forutsetter en umulig sammenligning mellom menneske og maskin",
                    "At maskiner mangler fysisk kapasitet til å bestå testen"
                ],
                answer: 1,
                feedback: "Searle kritiserer Turingtesten for kun å vurdere syntaks (regler for tegnsekvenser), ikke semantikk (mening)."
            },
            {
                question: "Hva er kjernen i Jacksons kunnskapsargument?",
                options: [
                    "At fysiske fakta er nødvendige og tilstrekkelige for full forståelse",
                    "At noen mentale fakta er ikke-reduserbare til fysiske fakta",
                    "At all kunnskap om verden til syvende og sist er objektiv",
                    "At mentale tilstander kun kan forklares gjennom erfaring"
                ],
                answer: 1,
                feedback: "Jacksons kunnskapsargument hevder at selv full fysisk kunnskap ikke nødvendigvis gir innsikt i alle mentale fakta."
            },
            {
                question: "Hvordan karakteriseres enaktivisme?",
                options: [
                    "Bevissthet er en intern prosess som kontrolleres av hjernen",
                    "Bevissthet kan forstås som en fysisk reaksjon på ytre stimuli",
                    "Bevissthet er noe vi skaper gjennom våre interaksjoner med omverdenen",
                    "Bevissthet er et resultat av geners og miljøets påvirkning"
                ],
                answer: 2,
                feedback: "Enaktivisme ser bevissthet som noe som oppstår gjennom aktiv samhandling med omgivelsene, ikke som en isolert, intern prosess."
            },
            {
                question: "Hva innebærer det relasjonelle teknologisynet?",
                options: [
                    "At teknologi er fullstendig nøytral og kun avhengig av menneskelig bruk",
                    "At teknologi former, og formes av, samfunnets politiske, økonomiske og etiske valg",
                    "At teknologisk utvikling er uavhengig av menneskelige interesser",
                    "At teknologi bestemmer alle våre kollektive mål og verdier"
                ],
                answer: 1,
                feedback: "Det relasjonelle teknologisynet hevder at teknologi og samfunn samspiller, og at teknologi både former og formes av menneskelige valg."
            },
            {
                question: "Hvordan ser teknologisk instrumentalisme på teknologi?",
                options: [
                    "Som en uavhengig faktor som påvirker samfunnets utvikling",
                    "Som et verktøy som har egenverdi og moral",
                    "Som rene hjelpemidler uten egenverdi, verken god eller dårlig",
                    "Som en integrert del av samfunnets moralske struktur"
                ],
                answer: 2,
                feedback: "Teknologisk instrumentalisme ser teknologi som rene hjelpemidler, hvor verdien bestemmes av bruken, ikke av teknologien selv."
            },
            {
                question: "Hva mente Heidegger med at teknologi kan sees som en 'pharmakon'?",
                options: [
                    "At teknologi har utviklet seg gjennom menneskers behov",
                    "At teknologi kan være både et middel og en risiko for samfunnet",
                    "At teknologi kun fungerer som et verktøy for menneskelig vekst",
                    "At teknologi skaper et moralsk skille mellom ulike samfunn"
                ],
                answer: 1,
                feedback: "Heidegger ser teknologi som en 'pharmakon' – både et potensielt gode og en risiko, lik en medisin med bivirkninger."
            },        
            {
                question: "Hva kjennetegner det teleologiske natursynet?",
                options: [
                    "Alle prosesser er styrt av mekaniske årsaker",
                    "Alle prosesser har et formål eller en hensikt",
                    "Naturlige prosesser skjer kun som resultat av menneskelig intervensjon",
                    "Forandringer i naturen skjer tilfeldig uten underliggende årsak"
                ],
                answer: 1,
                feedback: "Det teleologiske natursynet innebærer at alle prosesser har et formål eller hensikt, slik Aristoteles beskrev."
            },
            {
                question: "Hva er den formale årsaken ifølge Aristoteles' årsaksmodell?",
                options: [
                    "Det fysiske materialet som utgjør en ting",
                    "Det ytre som igangsetter en prosess",
                    "Den interne strukturen eller formen til noe",
                    "Det endelige målet eller hensikten bak en handling"
                ],
                answer: 2,
                feedback: "Den formale årsaken refererer til en tings iboende form eller struktur."
            },
            {
                question: "Hvordan forklarer det mekanistiske natursynet forandring i naturen?",
                options: [
                    "Gjennom en kontinuerlig tilpasning til formål",
                    "Som resultat av materiens bevegelse i rommet",
                    "Ved naturlige tings søken etter sitt hvilested",
                    "Gjennom en vekselvirkning mellom stoff og form"
                ],
                answer: 1,
                feedback: "Det mekanistiske natursynet forklarer forandring som resultat av materiens bevegelse i rommet, uten formål."
            },
            {
                question: "Hva kjennetegner himmellegemenes bevegelse i det teleologiske natursynet?",
                options: [
                    "De følger uregelmessige, elliptiske baner",
                    "De er drevet av tilfeldige bevegelser",
                    "De beveger seg i perfekte sirkelbaner som reflekterer deres guddommelige natur",
                    "De er i konstant bevegelse uten noen bestemte baner"
                ],
                answer: 2,
                feedback: "I det teleologiske natursynet antas himmellegemene å bevege seg i perfekte sirkler, styrt av en guddommelig natur."
            },
            {
                question: "Hva innebærer hard determinisme innen fri vilje-debatten?",
                options: [
                    "At mennesker noen ganger har fri vilje til å velge ulike handlinger",
                    "At moralsk ansvar er mulig selv i et deterministisk univers",
                    "At mennesker aldri har mulighet til å handle annerledes enn de faktisk gjør",
                    "At fri vilje eksisterer kun under visse betingelser"
                ],
                answer: 2,
                feedback: "Hard determinisme hevder at vi aldri har mulighet til å handle annerledes, og derfor ikke har moralsk ansvar."
            },
            {
                question: "Hva skiller inkompatibilisme fra kompatibilisme i synet på moralsk ansvar?",
                options: [
                    "Inkompatibilisme hevder at moralsk ansvar kun er relevant i religiøs kontekst",
                    "Inkompatibilisme avviser at moralsk ansvar er mulig under determinisme",
                    "Kompatibilisme mener fri vilje er uforenlig med et deterministisk univers",
                    "Inkompatibilisme påstår at menneskelig adferd er fullstendig tilfeldig"
                ],
                answer: 1,
                feedback: "Inkompatibilisme hevder at moralsk ansvar forutsetter fri vilje og derfor er uforenlig med determinisme."
            },
            {
                question: "Hvordan defineres kropp/sinn-problemet i filosofien?",
                options: [
                    "Hvordan biologiske prosesser kan styres av mekaniske årsaker",
                    "Forholdet mellom kognitive prosesser og menneskets biologiske evolusjon",
                    "Hvordan bevisste opplevelser relaterer til fysiske prosesser i hjernen",
                    "Kilden til menneskets moralske plikter overfor andre"
                ],
                answer: 2,
                feedback: "Kropp/sinn-problemet handler om hvordan bevisste opplevelser henger sammen med fysiske prosesser i hjernen."
            },
            {
                question: "Hva innebærer det heliosentriske verdensbildet?",
                options: [
                    "At solen og alle andre himmellegemer kretser rundt jorden",
                    "At solen er sentrum for planetenes bevegelser, mens jorden står stille",
                    "At solen er sentrum for planetsystemet, og jorden beveger seg rundt solen",
                    "At jorden og solen beveger seg rundt et felles midtpunkt i universet"
                ],
                answer: 2,
                feedback: "Det heliosentriske verdensbildet innebærer at solen er sentrum og planetene, inkludert jorden, beveger seg rundt den."
            },
            {
                question: "Hva karakteriserer inkompatibilistisk libertarianisme?",
                options: [
                    "Moralsk ansvar er umulig i et univers med determinisme",
                    "Fri vilje eksisterer noen ganger uavhengig av determinisme",
                    "Determinisme begrenser ikke menneskets mulighet til moralsk ansvar",
                    "Ingen handlinger kan forklares uten å ta hensyn til ytre påvirkninger"
                ],
                answer: 1,
                feedback: "Libertarianisme hevder at fri vilje noen ganger eksisterer og dermed gir grunnlag for moralsk ansvar, selv om determinisme ikke gjelder i alle tilfeller."
            },
            {
                question: "Hva er det mekanistiske natursynets syn på levende organismer?",
                options: [
                    "De følger sine naturlige formål gjennom ulike utviklingsfaser",
                    "De styres av en iboende formålsårsaksmodell",
                    "De er sammensetninger av materie uten iboende formål",
                    "De har en kombinasjon av mekanistiske og teleologiske egenskaper"
                ],
                answer: 2,
                feedback: "Det mekanistiske natursynet ser levende organismer som sammensetninger av materie uten iboende formål."
            },        
        {
            question: "Se for deg at Inga resonnerer på følgende måte: «Alle hendelser er fullt ut årsaksbestemte. Det betyr for eksempel at Utøya-terroristen ikke kunne ha valgt å handle annerledes enn han gjorde, gitt sine gener, oppvekst og andre faktorer som lå utenfor terroristens kontroll. Men terroristen må likevel sies å ha handlet av fri vilje. I alle fall fram til han ble stoppet av politiet handlet han uhindret helt i tråd i med sine ønsker og sin oppfatning av situasjonen».\n\nHvordan er det mest nærliggende å beskrive synet til Inga?",
            options: [
                "Inga har et libertariansk syn.",
                "Inga har et kommunitaristisk syn.",
                "Inga har et kompatibilistisk syn.",
                "Inga har et hardt deterministisk syn."
            ],
            answer: 2,
            feedback: "Inga uttrykker et kompatibilistisk syn, som kombinerer determinisme med muligheten for fri vilje innenfor gitte rammer."
        },
        {
            question: "I filmen Ex Machina er den kunstig intelligente roboten Ava en sentral skikkelse. Hun opptrer på en slik måte at den andre av filmens hovedpersoner får sympati med henne, og bestemmer seg for å sette henne fri fra fangenskapet hun befinner seg i.\n\nHvilket syn på bevissthet er det mest nærliggende å si at Lars' resonnement reflekterer?",
            options: [
                "Det reflekterer et funksjonalistisk syn.",
                "Det reflekterer et identitetsteoretisk syn.",
                "Det reflekterer et dualistisk syn.",
                "Det reflekterer et enaktivistisk syn."
            ],
            answer: 0,
            feedback: "Funksjonalismen hevder at bevissthet kan forklares ut fra de funksjoner som tilskrives tilstander, ikke nødvendigvis basert på biologisk grunnlag."
        },
        {
            question: "Hanne er teknologisk determinist. Hun diskuterer kunstig intelligens med vennegjengen. Hvilket utsagn representerer best Hannes posisjon som teknologisk determinist?",
            options: [
                "Kunstig intelligens kommer til å ta over jobbene til svært mange i fremtiden. KI vil gjøre jobber så mye mere effektivt enn mennesker at bedrifter blir nødt til å benytte KI hvis de vil henge med i konkurransen.",
                "Kunstig intelligens kan komme til å ta over jobbene til svært mange i fremtiden. Men selv om enkeltbedrifter kan ha en økonomisk interesse av å erstatte mennesker med KI kan vi som samfunn i alle fall i noen grad regulere dette og styre utviklingen dit vi vil.",
                "Kunstig intelligens er bare et verktøy som all annen teknologi. Vi velger selv om vi vil bruke en tørketrommel eller fremdeles bruke et gammeldags tørkestativ, og slik er det med KI også; vil kan bruke det hvis vi vil, men må ikke.",
                "Kunstig intelligens kommer aldri til å erstatte mennesker i de fleste jobber, ettersom de fleste jobber krever noen grad av kreativitet, spontanitet og evne til å samhandle med andre mennesker, noe KI aldri kan klare ettersom KI mangler bevissthet."
            ],
            answer: 0,
            feedback: "Det teknologisk deterministiske synet hevder at teknologiutviklingen vil påvirke samfunnet uunngåelig, og nærmest uavhengig av menneskelige valg."
        },
        {
            question: "Fuglearten storjordspurv holder til på Galapagos, og kjennetegnes ved å ha større og kraftigere nebb enn beslektede arter.\n\nHvilken av de følgende alternativene er det mest nærliggende å regne som en teleologisk forklaring av at en bestemt storjordspurv har et kraftig nebb?",
            options: [
                "Storjordspurven har kraftig nebb for å kunne knekke nøtter og spise store frø.",
                "Storjordspurven har kraftig nebb fordi tidligere generasjoner med større nebb har vært mer tilpasningsdyktige enn spurver med mindre nebb.",
                "Storjordspurven har kraftig nebb fordi Gud har skapt den slik.",
                "Storjordspurven har kraftig nebb fordi et slikt nebb er et typisk trekk ved arten fuglen tilhører."
            ],
            answer: 0,
            feedback: "En teleologisk forklaring tillegger et formål for en egenskap, som at nebbet er kraftig for å knuse frø."
        },
        {
            question: "Betegnelsen «det mekanistiske natursynet» brukes om natursynet som begynte å ta form blant naturvitere og filosofer i Europa på 1500-tallet.\n\nHvilket av utsagnene under stemmer best overens med det mekanistiske natursynet?",
            options: [
                "Enhver bevegelse kan i prinsippet beskrives og forutsies ved hjelp av matematikk.",
                "Det er en vesentlig, kvalitativ forskjell mellom levende organismer, og ikke-levende gjenstander.",
                "Vi må skille mellom tre typer forandring: kvalitativ forandring, kvantitativ forandring og substansiell forandring (at noe oppstår eller slutter å eksistere).",
                "De fysiske lovene som gjelder for objekter på jorda, er forskjellige fra de fysiske lovene som gjelder for himmellegemer."
            ],
            answer: 0,
            feedback: "Det mekanistiske natursynet ser universet som et system som kan beskrives og forutsies gjennom matematiske lover."
        },
        {
            question: "Les den følgende kommentaren: «Når et menneske har smerter, er de underliggende fysiske prosessene helt forskjellige fra når for eksempel en blekksprut har smerter. Det er også mulig å tenke seg utenomjordiske vesener som kan oppleve smerter, selv om de fysisk er enda mer forskjellige fra oss mennesker enn det blekkspruter er.»\n\nBetraktninger av denne typen utgjør et spesielt stort problem for en bestemt type teori om bevissthet. Hvilken?",
            options: [
                "Identitetsteori",
                "Funksjonalisme",
                "Kroppsliggjøringsteori",
                "Fenomenologisk teori"
            ],
            answer: 0,
            feedback: "Identitetsteorien hevder at mentale tilstander er identiske med hjerneprosesser, og den har derfor utfordringer med å forklare smerteopplevelser hos ulike livsformer."
        },
        {
            question: "Les den følgende uttalelsen: «Kjernekraft i seg selv er verken godt eller ondt. Det er først når mennesker velger å bruke kraften i vitenskapen til skade for miljø og liv at teknologien kan bli «ond».»\n\nHvilket teknologisyn er det mest nærliggende å si at uttalelsen over gir uttrykk for?",
            options: [
                "Et instrumentalistisk teknologisyn.",
                "Et deterministisk teknologisyn.",
                "Et kompatibilistisk teknologisyn.",
                "Et relasjonelt teknologisyn."
            ],
            answer: 0,
            feedback: "Uttalelsen uttrykker et instrumentalistisk syn, hvor teknologi i seg selv er nøytral, og bruken avgjør dens verdi."
        },
        {
            question: "Hva menes med at teknologi har en 'tosidighet'?",
            options: [
                "At teknologi kun har positive sider som skal fremmes", 
                "At teknologi har både positive og negative konsekvenser som påvirker samfunnet på ulike måter", 
                "At teknologi er verken positiv eller negativ", 
                "At teknologi kun er en økonomisk kraft i samfunnet"
            ],
            answer: 1,
            feedback: "Teknologiens tosidighet refererer til hvordan den kan ha både positive og negative effekter som påvirker individer og samfunn på forskjellige måter."
        },
        {
            question: "Hva mente Heidegger med 'teknologisk tankegang'?",
            options: [
                "En objektiv og nøytral tilnærming til teknologisk utvikling", 
                "Et perspektiv som reduserer omgivelsene til ressurser som kan brukes til menneskelige formål", 
                "En tilnærming der teknologi brukes utelukkende for underholdning", 
                "En forståelse der teknologi anses som verdinøytral og uten samfunnseffekter"
            ],
            answer: 1,
            feedback: "Heidegger mente at teknologisk tankegang reduserer omgivelsene til ressurser, hvor alt vurderes ut fra sin nytteverdi."
        },
        {
            question: "Hva er en kritikk av det deterministiske natursynet?",
            options: [
                "At det mangler en forståelse for naturlige prosesser", 
                "At det utelukker fri vilje og individuelle valg ved å forutsette årsakssammenhenger for alle hendelser", 
                "At det gir for mye makt til menneskelige valg", 
                "At det alltid antar at hendelser er tilfeldige"
            ],
            answer: 1,
            feedback: "En vanlig kritikk av determinisme er at den utelukker fri vilje, da den ser på alle hendelser som nødvendige følger av tidligere årsaker."
        },
        {
            question: "Hva menes med et sosioteknisk nettverk i relasjon til teknologi?",
            options: [
                "Et nettverk som fokuserer utelukkende på teknologiens effekt på miljøet", 
                "Et nettverk av kun fysiske objekter som asfalterte veier og bygninger", 
                "Et system der teknologiske, sosiale og økonomiske aktører påvirker utviklingen av et produkt", 
                "En teknologisk struktur som kun påvirker økonomien"
            ],
            answer: 2,
            feedback: "Et sosioteknisk nettverk omfatter sosiale, økonomiske og teknologiske faktorer som sammen påvirker utviklingen og bruk av et produkt."
        },
        {
            question: "Hva er hovedforskjellen mellom teknologisk determinisme og teknologisk instrumentalisme?",
            options: [
                "Determinisme ser teknologi som uavhengig av menneskelig påvirkning, mens instrumentalisme ser teknologi som verdinøytral", 
                "Instrumentalisme ser teknologi som skadelig, mens determinisme ser den som positiv", 
                "Determinisme fokuserer på økonomiske aspekter, mens instrumentalisme fokuserer på sosiale aspekter", 
                "Determinisme innebærer at teknologi kun har positive effekter, mens instrumentalisme ser på teknologi som negativ"
            ],
            answer: 0,
            feedback: "Teknologisk determinisme ser teknologi som en styrende kraft uavhengig av menneskelig påvirkning, mens teknologisk instrumentalisme ser teknologi som et nøytralt verktøy hvor effekten avhenger av bruken."
        },
        {
            question: "Hvordan beskriver det teleologiske natursynet forskjellen mellom levende og ikke-levende natur?",
            options: [
                "Levende natur har evne til selvbevegelse og formål, mens ikke-levende ting krever ytre påvirkning for bevegelse", 
                "Det er ingen forskjell mellom levende og ikke-levende natur", 
                "Levende natur fungerer som et maskineri styrt av eksterne krefter", 
                "Ikke-levende natur kan bevege seg selv uten påvirkning"
            ],
            answer: 0,
            feedback: "I følge det teleologiske natursynet kan levende ting bevege seg selv med formål, mens ikke-levende ting trenger ytre påvirkning."
        },
        {
            question: "Hva kjennetegner det mekanistiske natursynet sammenlignet med det teologiske natursynet?",
            options: [
                "Det ser naturen som styrt av en åndelig kraft uten materielle lover", 
                "Det betrakter naturen som en maskin styrt av naturlige lover uten guddommelig hensikt", 
                "Det forutsetter at alle naturlige prosesser er fullstendig uforutsigbare", 
                "Det involverer både naturlige og overnaturlige forklaringer"
            ],
            answer: 1,
            feedback: "Mekanistisk natursyn ser naturen som en maskin styrt av naturlige lover og kausale mekanismer, uten en guddommelig hensikt."
        },
        {
            question: "Hvordan utfordret kvantemekanikken og relativitetsteorien det mekanistiske natursynet?",
            options: [
                "Ved å introdusere flere faste naturlige lover", 
                "Ved å vise at partikler og bølger ikke kan eksistere samtidig", 
                "Ved å endre forståelsen av materie, rom og tid, og innføre uforutsigbarhet", 
                "Ved å vise at universet er fullstendig deterministisk"
            ],
            answer: 2,
            feedback: "Kvantemekanikken og relativitetsteorien utfordret mekanistisk natursyn ved å introdusere uforutsigbare elementer og nye konsepter om materie, rom og tid."
        },
        {
            question: "Hva går determinisme ut på, ifølge det mekaniske natursynet?",
            options: [
                "At alle hendelser er et resultat av tilfeldigheter", 
                "At alle hendelser kan forklares som en konsekvens av tidligere årsaker", 
                "At fri vilje styrer alle hendelser", 
                "At hendelser i naturen er upredikerbare"
            ],
            answer: 1,
            feedback: "Determinisme innebærer at alle hendelser kan forklares som nødvendige konsekvenser av tidligere årsaker."
        },
        {
            question: "Hva innebærer en teleologisk forklaring av naturen?",
            options: [
                "At alle naturlige fenomener kan forklares gjennom kausale årsaker alene", 
                "At naturen har iboende mål eller hensikter som driver prosessene", 
                "At naturen består av tilfeldige prosesser uten formål", 
                "At naturlige fenomener kan reduseres til sine fysiske komponenter"
            ],
            answer: 1,
            feedback: "En teleologisk forklaring innebærer at prosesser i naturen forstås som målrettede, med iboende hensikter eller mål."
        },
        {
            question: "Hva innebærer John Searles argument mot sterk kunstig intelligens?",
            options: [
                "At maskiner kan utvikle følelser", 
                "At maskiner aldri kan ha bevissthet eller virkelig forståelse", 
                "At maskiner kan tenke like godt som mennesker", 
                "At maskiner bare fungerer under direkte menneskelig kontroll"
            ],
            answer: 1,
            feedback: "Searle argumenterte at maskiner mangler bevissthet og forståelse, uansett hvor intelligent de virker."
        },
        {
            question: "Hva går Frank Jacksons kunnskapsargument ut på?",
            options: [
                "At kunnskap er uavhengig av erfaring", 
                "At bevissthet gir oss innsikt som fysikalisme ikke kan forklare", 
                "At erfaringer er unødvendige for forståelse", 
                "At fysikalisme kan forklare alle mentale tilstander"
            ],
            answer: 1,
            feedback: "Jacksons kunnskapsargument hevder at bevissthet gir innsikt som ikke kan forklares fullt ut av fysikalisme."
        },
        {
            question: "Hva mente René Descartes med substansdualisme?",
            options: [
                "At sinnet og kroppen er forskjellige substanser som virker uavhengig", 
                "At sinnet er en del av kroppen og ikke en egen substans", 
                "At kropp og sinn ikke kan skilles på grunn av fysikk", 
                "At kropp og sinn begge er materielle substanser"
            ],
            answer: 0,
            feedback: "Descartes' substansdualisme sier at sinnet og kroppen er separate substanser med forskjellige egenskaper."
        },
        {
            question: "Hva er en kritikk rettet mot fysikalisme i kropp/sinn-problemet?",
            options: [
                "At fysikalisme ignorerer mentale opplevelser og bevissthetens subjektive natur", 
                "At fysikalisme ikke kan forklare fysisk smerte eller skade", 
                "At fysikalisme ikke har noen praktiske implikasjoner", 
                "At fysikalisme alltid baseres på tro og overbevisning"
            ],
            answer: 0,
            feedback: "En vanlig kritikk av fysikalisme er at den ikke kan forklare bevissthetens subjektive natur."
        },
        {
            question: "Hva går funksjonalismen ut på i forhold til kropp/sinn-problemet?",
            options: [
                "At sinnet består av uavhengige fysiske substanser", 
                "At mentale tilstander er definert av sine funksjoner fremfor sin fysiske struktur", 
                "At sinn og kropp er ett og samme uten forskjeller", 
                "At mentale tilstander kun kan forklares ved fysiologi"
            ],
            answer: 1,
            feedback: "Funksjonalismen hevder at mentale tilstander defineres ut fra hvilke funksjoner de har, snarere enn fysisk struktur."
        },
        {
            question: "Hva mente Heidegger med 'teknologisk tankegang'?",
            options: [
                "At teknologi kun er et middel uten påvirkning på samfunnet", 
                "At teknologiens logikk endrer hvordan vi ser på verden og oss selv", 
                "At teknologi er en nøytral kraft uten ideologisk betydning", 
                "At teknologi fremmer demokratiske verdier i alle samfunn"
            ],
            answer: 1,
            feedback: "Heidegger mente at teknologisk tankegang påvirker hvordan vi forstår verden ved å gjøre alt til ressurser."
        },
        {
            question: "Hva er hensikten med Turing-testen?",
            options: [
                "Å måle en maskins evne til å følge menneskelige normer", 
                "Å avgjøre om en maskin kan tenke ved å teste dens kommunikasjonsevner", 
                "Å se om en maskin kan oppnå selvbevissthet", 
                "Å vurdere om maskinen kan utvikle følelser"
            ],
            answer: 1,
            feedback: "Turing-testen er ment å teste om en maskin kan 'tenke' ved å se om den kan kommunisere på en menneskelig måte."
        },
        {
            question: "Hva betyr 'teleologisk forklaring' ifølge Aristoteles?",
            options: [
                "En forklaring som fokuserer på årsakene bak alle handlinger", 
                "En forklaring som ser prosesser som målrettet mot å realisere en hensikt", 
                "En forklaring som baserer seg kun på observerbare fakta", 
                "En forklaring som krever kausale, ikke målrettede prosesser"
            ],
            answer: 1,
            feedback: "Aristoteles’ teleologiske syn innebærer at prosesser har en hensikt, og at naturens prosesser kan forklares som målrettede."
        },
        {
            question: "Hvordan forklarer Descartes begrepet 'tvil' i sin filosofi?",
            options: [
                "Som et uttrykk for svakhet og moralsk usikkerhet", 
                "Som en metodisk prosess for å finne sikker kunnskap", 
                "Som en feilaktig tankeprosess som bør unngås", 
                "Som en ubevisst prosess i menneskets psyke"
            ],
            answer: 1,
            feedback: "Descartes brukte metodisk tvil som en metode for å oppnå sikker kunnskap ved å tvile på alt som kan betviles."
        },
        {
            question: "Hva innebærer Habermas' syn på kommunikativ handling?",
            options: [
                "At all kommunikasjon er et maktspill mellom individer", 
                "At kommunikativ handling er et middel til å oppnå konsensus og forståelse", 
                "At kommunikasjon alltid er styrt av følelsesmessige behov", 
                "At kommunikasjon ikke påvirker samfunnsstrukturene"
            ],
            answer: 1,
            feedback: "Habermas mente at kommunikativ handling handler om å oppnå forståelse og konsensus gjennom rasjonell dialog."
        },
        {
            question: "Hvordan forstår David Hume menneskelig kunnskap?",
            options: [
                "Som et resultat av medfødte ideer og logisk resonnement", 
                "Som oppstått utelukkende gjennom sanseerfaringer og vaner", 
                "Som en kombinasjon av rasjonelle og transcendentale sannheter", 
                "Som en direkte refleksjon av Guds sannhet"
            ],
            answer: 1,
            feedback: "Hume mente at kunnskap kommer fra sanseerfaringer og vaner snarere enn fra medfødte ideer."
        },
        {
            question: "Hva innebærer Descartes' 'cogito, ergo sum'?",
            options: [
                "At eksistensen av kroppen beviser eksistensen av tanken", 
                "At ens egen eksistens bevises gjennom handling", 
                "At det å tvile på sin eksistens beviser selve eksistensen", 
                "At eksistens kun kan bevises gjennom sansene"
            ],
            answer: 2,
            feedback: "Descartes mente at det å tvile på sin eksistens innebærer en form for tenkning, som igjen beviser eksistensen."
        },
        {
            question: "Hva innebærer 'formenes teori' ifølge Platon?",
            options: [
                "At alle fysiske ting er illusjoner skapt av sinnet", 
                "At sanseverdenen kun er en skygge av de perfekte, immaterielle formene", 
                "At fysiske objekter og formene eksisterer i samme dimensjon", 
                "At kun det synlige og fysiske kan oppnå kunnskap"
            ],
            answer: 1,
            feedback: "Platons 'formenes teori' sier at sanseverdenen bare er en skygge av de perfekte, immaterielle formene."
        },
        {
            question: "Hva er Humes syn på kausalitet?",
            options: [
                "At kausalitet er en nødvendighet observert gjennom sanseerfaring", 
                "At kausalitet er et produkt av vaner og forventninger, ikke av nødvendige forbindelser", 
                "At kausalitet kun gjelder i fysiske eksperimenter", 
                "At kausalitet alltid kan utledes gjennom logisk resonnement"
            ],
            answer: 1,
            feedback: "Hume mente at kausalitet er et resultat av vaner og forventninger, ikke av observerbare nødvendige forbindelser."
        },
        {
            question: "Hva innebærer John Rawls' 'slør av uvitenhet' i rettferdighetsteorien?",
            options: [
                "At individer skal velge prinsipper uten kunnskap om egen posisjon i samfunnet", 
                "At rettferdighet bestemmes av sosiale normer og arv", 
                "At alle rettferdighetsprinsipper bør være relative til kultur", 
                "At bare de rikeste skal bestemme samfunnets regler"
            ],
            answer: 0,
            feedback: "Rawls' 'slør av uvitenhet' betyr at rettferdighetsprinsipper bør velges uten kjennskap til egen samfunnsposisjon."
        },
        {
            question: "Hvordan skiller Hobbes’ og Lockes syn på naturtilstanden seg?",
            options: [
                "Hobbes ser naturtilstanden som harmonisk, Locke ser den som konfliktfylt", 
                "Locke ser naturtilstanden som preget av fred og samarbeid, mens Hobbes ser den som en kamp for overlevelse", 
                "Locke og Hobbes mener begge naturtilstanden er en fredelig tilstand", 
                "Hobbes og Locke ser naturtilstanden som irrelevant for moderne samfunn"
            ],
            answer: 1,
            feedback: "Locke ser naturtilstanden som fredelig og samarbeidende, mens Hobbes ser den som en kamp for overlevelse."
        },
        {
            question: "Hva var Foucaults syn på kunnskap og makt?",
            options: [
                "At kunnskap alltid er adskilt fra maktforhold i samfunnet", 
                "At kunnskap er en nøytral størrelse som ikke påvirker samfunn", 
                "At kunnskap er en form for makt som kan forme og kontrollere samfunnet", 
                "At makt aldri er basert på kunnskap og alltid er fysisk"
            ],
            answer: 2,
            feedback: "Foucault mente at kunnskap er en form for makt som kan påvirke og kontrollere strukturer i samfunnet."
        },
        {
            question: "Hva er forskjellen mellom hypotetisk og kategorisk imperativ hos Kant?",
            options: [
                "Det hypotetiske imperativ gjelder alltid, mens det kategoriske kun gjelder i spesielle tilfeller", 
                "Det hypotetiske imperativ gjelder dersom man ønsker et bestemt mål, mens det kategoriske gjelder uavhengig av ønsker", 
                "Det hypotetiske imperativ gjelder kun moralske handlinger, mens det kategoriske gjelder alle handlinger", 
                "Det hypotetiske imperativ gjelder handlinger rettet mot personlig vinning, det kategoriske gjelder samfunnsmessige handlinger"
            ],
            answer: 1,
            feedback: "Det hypotetiske imperativ gjelder hvis man har et spesifikt mål, mens det kategoriske gjelder uavhengig av mål."
        },
        {
            question: "Hva er en viktig kritikk av Platon i forhold til kunnskapens natur?",
            options: [
                "At hans teori om ideer ikke kan anvendes på den fysiske verden", 
                "At han avviser sansene som pålitelige kilder til kunnskap", 
                "At han hevder all kunnskap må være individuell og relativ", 
                "At han støtter en fullstendig skeptisk tilnærming til all kunnskap"
            ],
            answer: 1,
            feedback: "Platon kritiseres for å nedvurdere sansene som upålitelige i forhold til å oppnå sann kunnskap."
        },
        {
            question: "Hva innebærer David Humes skeptisisme i forhold til årsakssammenhenger?",
            options: [
                "At årsaker og virkninger kan observeres direkte og intuitivt", 
                "At vi kun kan observere hendelser, men ikke nødvendigvis deres nødvendige forbindelser", 
                "At årsaker og virkninger er fullt ut forklarbare gjennom fornuften", 
                "At årsaker kan oppfattes uavhengig av sanseerfaring"
            ],
            answer: 1,
            feedback: "Hume mente at vi kan observere hendelser som skjer etter hverandre, men ikke en nødvendighet som binder dem sammen."
        },
        {
            question: "Hva betyr det for Platon at 'sann kunnskap' kun kan oppnås gjennom fornuften?",
            options: [
                "At kunnskap som stammer fra sansene er mindre pålitelig", 
                "At all kunnskap er subjektiv og avhenger av individets opplevelser", 
                "At kun erfaring gir oss innsikt i ideenes verden", 
                "At sanseerfaringer er nødvendige for å oppnå sannhet"
            ],
            answer: 0,
            feedback: "Platon mente at sansebasert kunnskap er mindre pålitelig enn kunnskap ervervet gjennom ren fornuft."
        },
        {
            question: "Hva innebærer reduktiv fysikalisme i kropp-sinn-problemet?",
            options: [
                "At mentale tilstander er redusert til ren bevissthet", 
                "At mentale tilstander kan forstås uavhengig av hjernens funksjoner", 
                "At mentale tilstander er identiske med fysiske tilstander i hjernen", 
                "At sinnet og kroppen eksisterer som to separate substanser"
            ],
            answer: 2,
            feedback: "Reduktiv fysikalisme hevder at mentale tilstander er identiske med fysiske tilstander i hjernen."
        },
        {
            question: "Hva mente Aristoteles med at mennesket er et 'politisk dyr'?",
            options: [
                "At mennesker har et naturlig behov for sosial anerkjennelse og hierarki", 
                "At mennesket trives best alene, men aksepterer fellesskap", 
                "At mennesker er avhengige av samfunnet for å realisere sitt potensial", 
                "At mennesket kan underordne seg naturlige instinkter for sosiale fordeler"
            ],
            answer: 2,
            feedback: "Aristoteles mente at mennesker realiserer sitt fulle potensial i fellesskap og er naturlig orientert mot samfunnet."
        },
        {
            question: "Hvordan skiller empirisme seg fra rasjonalisme som kunnskapsteori?",
            options: [
                "Empirisme baserer seg på logisk utledning, mens rasjonalisme baserer seg på observasjon", 
                "Empirisme vektlegger sanseerfaring som kunnskapskilde, mens rasjonalisme vektlegger fornuften", 
                "Empirisme forutsetter at kunnskap er medfødt, mens rasjonalisme mener den er erfaringsbasert", 
                "Empirisme og rasjonalisme er i hovedsak enige om kunnskapens natur"
            ],
            answer: 1,
            feedback: "Empirisme ser sanseerfaring som kunnskapens kilde, mens rasjonalisme fremhever fornuftens rolle."
        },
        {
            question: "Hva er hovedkritikken fra sosialkonstruktivismen mot positivismen?",
            options: [
                "At positivismen undervurderer betydningen av sosiale faktorer i vitenskapelig kunnskap", 
                "At positivismen kun baserer seg på teoretiske antagelser uten empirisk grunnlag", 
                "At positivismen er for fokusert på subjektive opplevelser og ikke harde data", 
                "At positivismen avviser enhver form for vitenskapelig objektivitet"
            ],
            answer: 0,
            feedback: "Sosialkonstruktivismen kritiserer positivismen for å ignorere sosiale og kulturelle faktorer i kunnskapsdannelse."
        },
        {
            question: "Hva kjennetegner Platons ide om 'Formene'?",
            options: [
                "Formene er fysiske objekter som kan sanses direkte", 
                "Formene er perfekte konsepter som eksisterer uavhengig av vår sansbare verden", 
                "Formene refererer til materielle objekter som vi kan oppleve", 
                "Formene er individuelle ideer som hver person utvikler"
            ],
            answer: 1,
            feedback: "Platon beskriver Formene som perfekte konsepter som eksisterer uavhengig av den sansbare verden."
        },
        {
            question: "Hva er hovedtemaet i Descartes' dualisme?",
            options: [
                "At sinnet og kroppen er to separate substanser", 
                "At både sanser og fornuft utgjør kunnskapens grunnlag", 
                "At kun materielle ting virkelig eksisterer", 
                "At kunnskap kommer kun fra erfaring"
            ],
            answer: 0,
            feedback: "Descartes mente at sinnet og kroppen er to separate substanser med fundamentalt ulike egenskaper."
        },
        {
            question: "Hva mente Nietzsche med begrepet 'vilje til makt'?",
            options: [
                "At alle organismer søker etter fysisk makt for å overleve", 
                "At menneskers handlinger motiveres av en underliggende drift til å dominere", 
                "At vilje til makt er den eneste moralske verdi i samfunnet", 
                "At religion styrker menneskers vilje til å handle etisk"
            ],
            answer: 1,
            feedback: "Nietzsche mente at vilje til makt er en grunnleggende drivkraft hos mennesker, som påvirker våre handlinger og ambisjoner."
        },
        {
            question: "Hva innebærer konseptet 'menneskets frihet' ifølge Sartres eksistensialisme?",
            options: [
                "At friheten kun er begrenset av naturlover", 
                "At mennesket er ansvarlig for sine valg i et meningsløst univers", 
                "At frihet oppstår ved å følge samfunnets normer", 
                "At frihet er en illusjon skapt av individuelle opplevelser"
            ],
            answer: 1,
            feedback: "Ifølge Sartres eksistensialisme er mennesket fundamentalt fritt og ansvarlig for sine egne valg, selv i et tilsynelatende meningsløst univers."
        },
    ],
    "Etikk og politisk filosofi": [
            {
                question: "«Veganisme er meningsløst ettersom mennesker har spist kjøtt i tusenvis av år». Hvorfor er dette argumentet problematisk?",
                options: [
                    "Det innebærer at det også må være moralsk tillat å spise menneskekjøtt.",
                    "Det er et brudd på skadeprinsippet fordi det uttrykker paternalisme.",
                    "Det er åpenbart at dyr har akkurat de samme rettigheter som mennesker.",
                    "Det er en appell til det naturlige, en form for slutning fra er til bør."
                ],
                answer: 3,
                feedback: "Argumentet appellerer til det naturlige og antar at noe 'er' derfor det 'bør' være."
            },
            {
                question: "Anna mener at vi bør gi mer penger til bistand. Hvilket alternativ uttrykker best en utilitaristisk begrunnelse for Annas synspunkt?",
                options: [
                    "Nødstilte mennesker vil ha mer utbytte av å motta noe av vår velstandsoverflod gjennom bistand enn vi vil ha av å beholde hele denne overfloden for oss selv.",
                    "Det er moralsk påkrevd at vi hjelper andre, men vi står selv fritt til å velge hvordan vi vil hjelpe. Det å gi penger til bistand er et av alternativene.",
                    "Sjenerøsitet er en betingelse for å være moralsk god. For å kunne regnes som sjenerøs må man handle på en sjenerøs måte, slik som ved å gi penger til bistand.",
                    "Fattigdom bryter med vår naturlige rett til frihet, fordi det setter mennesker i et avhengighetsforhold til rike. Derfor bør vi bidra til å utrydde fattigdom."
                ],
                answer: 0,
                feedback: "Utilitarisme vurderer handlinger basert på deres nytte, her å maksimere lykken ved å hjelpe nødstilte."
            },
            {
                question: "Hvilken av de følgende formuleringene er mest i samsvar med Kants universalitetsprinsipp?",
                options: [
                    "Du bør ikke lyve, for du kan ikke konsistent ha til hensikt å lyve for å oppnå en fordel samtidig som du tillater at alle andre kan handle på samme måte.",
                    "Du bør ikke lyve såfremt det ikke er nødvendig for å redde deg selv eller noen andre ut av en høyst prekær situasjon.",
                    "Du bør ikke lyve, for løgn undergraver tillit mellom mennesker, og tillit er viktig for at samfunnet skal fungere.",
                    "Du bør ikke lyve, da dette er å krenke den verdigheten som alle personer har krav på å få respektert."
                ],
                answer: 0,
                feedback: "Kants universalitetsprinsipp sier at en handling kun kan være moralsk hvis alle kan gjøre det samme."
            },
            {
                question: "Hvilken av de følgende begrunnelsene for å gi til veldedige formål er mest nærliggende for en dydsetiker?",
                options: [
                    "Sjenerøsitet er et godt karaktertrekk, og sjenerøse mennesker gir til veldedige formål når de selv har mer enn de trenger.",
                    "Sammenlignet med å bruke penger på eget luksusforbruk, utgjør det et større velferdsbidrag om vi gir pengene til en organisasjon som jobber for de fattige i samfunnet.",
                    "Vi bør hjelpe de som er dårligere stilt enn oss selv, for det ville vi selv ønsket hvis vi var blant de dårligst stilte.",
                    "Vi har plikt til å hjelpe andre opp til et velferdsnivå som er tilstrekkelig for at de kan leve godt."
                ],
                answer: 0,
                feedback: "Dydsetikk fokuserer på karaktertrekk, og sjenerøsitet er et godt karaktertrekk som innebærer å gi."
            },
            {
                question: "Hva er paternalisme?",
                options: [
                    "Å begrense noens handlefrihet med henvisning til at det er til deres eget beste.",
                    "En ideologi som sier at far bør bestemme i hjemmet.",
                    "En form for prestestyre som brukes i den katolske kirken.",
                    "Å begrense noens handlefrihet med henvisning til guddommelig autoritet, eks. de ti bud ol."
                ],
                answer: 0,
                feedback: "Paternalisme innebærer å begrense noens frihet for deres eget beste."
            },
            {
                question: "Hvilken påstand beskriver best innholdet i J. S. Mills såkalte skadeprinsipp?",
                options: [
                    "Det er tillatt å bruke tvang mot myndige voksne kun for å hindre skade på andre.",
                    "Det er rettferdig å straffe en person med skade tilsvarende den skaden vedkommende har forvoldt på andre.",
                    "All straff bør ta sikte på å skade den som har begått en forbrytelse.",
                    "Hvis man påfører noen skade, er det den forulempede parts ansvar å bevise skadens art og omfang."
                ],
                answer: 0,
                feedback: "Skadeprinsippet sier at tvang kun er tillatt for å forhindre skade på andre."
            },
            {
                question: "Hvilket av følgende statlige tiltak kan - i størst mulig grad - sies å sikre ytringsfrihet også som en positiv frihet?",
                options: [
                    "Å sikre gjennom utdanning at alle borgere så langt som mulig har den kompetansen som skal til for å forstå og kunne delta i det offentlige ordskiftet.",
                    "Å kreve at alle borgere hvert år svarer på en spørreundersøkelse om politiske spørsmål slik at vi kan få en oversikt over hva ikke bare de som ytrer seg offentlig, men også hva gjennomsnittet av befolkningen faktisk mener.",
                    "Å stramme inn begrensningene på ytringsfriheten slik at flere ytringer som oppfattes som krenkende eller blasfemisk forbys.",
                    "Å fjerne alle begrensninger av ytringsfriheten som har med blasfemi eller ærekrenkelse å gjøre fra loven."
                ],
                answer: 0,
                feedback: "Positiv frihet innebærer at individet får muligheten til å delta, og utdanning sikrer denne muligheten."
            },
            {
                question: "Hvilket av alternativene under kan best beskrives som et uttrykk for politisk atomisme?",
                options: [
                    "Mennesker lever i samfunn først og fremst fordi det politiske fellesskapet er en nødvendig betingelse for å leve et godt liv. De pliktene vi har overfor staten og det politiske fellesskapet skal derfor bidra til at vi kan utvikle våre fornuftsevner og ta selvstendige livsvalg.",
                    "Mennesker lever i samfunn først og fremst fordi livet utenfor et fellesskap er langt vanskeligere enn et liv innenfor. De pliktene staten har overfor sine borgere er derfor å sikre materiell velstand, politisk og religiøs frihet, samt selvutvikling gjennom statlig subsidiering av kulturbærende institusjoner.",
                    "Mennesker lever i samfunn først og fremst for å tilfredsstille egne behov og interesser på en effektiv måte. De pliktene vi har overfor staten og det politiske fellesskapet er sånn sett underordnet de pliktene vi har overfor oss selv og andre individer.",
                    "Mennesker lever i samfunn først og fremst fordi livet utenfor et fellesskap er langt vanskeligere enn et liv innenfor. De pliktene staten har overfor sine borgere er derfor å sikre at flest mulig kan leve ut sin individualitet, samtidig som de opplever tilhørighet til andre som deler deres verdier og livssyn."
                ],
                answer: 2,
                feedback: "Politisk atomisme vektlegger individets interesser fremfor pliktene til samfunnet."
            },        
            {
                question: "Hvordan forstår John Stuart Mill negativ frihet?",
                options: [
                    "Som individets frihet til selvrealisering, begrenset av hensyn til samfunnets moralnormer",
                    "Som frihet fra innblanding fra andre, med unntak av når denne friheten kan føre til skade på andre",
                    "Som frihet til å delta i det demokratiske fellesskap uten tvang",
                    "Som rett til å utøve egne interesser, så lenge de bidrar til kollektiv nytte"
                ],
                answer: 1,
                feedback: "Mill ser negativ frihet som fravær av innblanding, med begrensning dersom handlingen skader andre."
            },
            {
                question: "Hva innebærer skadeprinsippet i Mills politiske filosofi?",
                options: [
                    "At man kan gripe inn overfor en persons handlinger hvis de utgjør en fysisk risiko for andre",
                    "At man kan begrense noens frihet kun hvis det er nødvendig for å hindre skade på andre, uavhengig av moralsk dom",
                    "At individets handlinger bør kontrolleres av staten for å forhindre både fysisk og moralsk skade",
                    "At man kan anvende makt for å forhindre handlinger som truer samfunnets felles normer"
                ],
                answer: 1,
                feedback: "Mill hevder at friheten til individet kan begrenses kun for å hindre skade på andre."
            },
            {
                question: "Hvordan begrunner Mill frihet til livsstilsvalg?",
                options: [
                    "Gjennom en rettighetsbasert tilnærming der individets autonomi er ukrenkelig",
                    "Gjennom nytteverdi, hvor friheten bidrar til samfunnet ved å øke den totale lykken",
                    "Gjennom å påpeke at frihet til livsstil uansett ikke påvirker andre",
                    "Gjennom å forankre den i religiøse normer og tradisjoner"
                ],
                answer: 1,
                feedback: "Mill bruker nytteprinsippet og hevder at frihet til egne livsvalg øker den samlede lykken i samfunnet."
            },
            {
                question: "Hva er et kjennetegn ved paternalisme ifølge Mill?",
                options: [
                    "Å forby handlinger som truer statens stabilitet",
                    "Å bruke makt for å beskytte individet mot sine egne valg",
                    "Å pålegge folk å handle til samfunnets beste",
                    "Å tillate all form for innblanding dersom det støtter en felles moral"
                ],
                answer: 1,
                feedback: "Paternalisme innebærer bruk av makt for å beskytte individer mot egne valg, selv om de ikke skader andre."
            },
            {
                question: "Hvordan kan frihet som ikke-dominans forstås?",
                options: [
                    "Som frihet fra enhver sosial innflytelse",
                    "Som frihet fra vilkårlig maktutøvelse fra andre",
                    "Som frihet til å oppnå egne mål uavhengig av andre",
                    "Som frihet til å dominere egne interesser uten ytre kontroll"
                ],
                answer: 1,
                feedback: "Frihet som ikke-dominans innebærer fravær av vilkårlig maktutøvelse fra andre over individet."
            },
            {
                question: "Hva mente Wollstonecraft med reell likestilling?",
                options: [
                    "Formell likhet i politiske og juridiske rettigheter",
                    "Økonomisk og intellektuell uavhengighet for kvinner",
                    "Lik behandling av kvinner og menn i alle sammenhenger",
                    "Lik rett til å inneha offentlige embeter"
                ],
                answer: 1,
                feedback: "Wollstonecraft argumenterte for kvinners reelle uavhengighet, både økonomisk og intellektuelt."
            },
            {
                question: "Hva innebærer kapabilitetstilnærmingen til Martha Nussbaum?",
                options: [
                    "At staten skal sørge for lik lønn for alle yrker",
                    "At individers faktiske muligheter til selvrealisering må beskyttes",
                    "At alle borgere bør ha samme moralske verdier",
                    "At samfunnet må sikre økonomisk likhet for alle"
                ],
                answer: 1,
                feedback: "Nussbaum mener at staten må sikre individers faktiske muligheter til å utøve sine evner."
            },
            {
                question: "Hva skiller statusbaserte rettigheter fra interessebaserte rettigheter?",
                options: [
                    "Statusbaserte rettigheter tilkommer individer basert på moralsk fortjeneste",
                    "Statusbaserte rettigheter tilkommer individer i kraft av deres egenskaper, ikke samfunnsnytte",
                    "Interessebaserte rettigheter er de samme som grunnleggende menneskerettigheter",
                    "Interessebaserte rettigheter er uavhengige av individuelle evner"
                ],
                answer: 1,
                feedback: "Statusbaserte rettigheter er basert på individets iboende egenskaper, ikke på deres samfunnsnytte."
            },
            {
                question: "Hva er en utfordring med å anvende skadeprinsippet?",
                options: [
                    "Å fastslå når skade på moralske interesser også kan begrense frihet",
                    "Å definere klart hvilke handlinger som forårsaker fysisk skade",
                    "Å sikre at det er moralsk akseptabelt for staten å regulere skadelig adferd",
                    "Å vurdere når skade på individet selv gir grunnlag for innblanding"
                ],
                answer: 1,
                feedback: "Det er utfordrende å avgrense skadeprinsippet til skade på andre og bestemme hvilke interesser som bør beskyttes."
            },
            {
                question: "Hva er formålet med ytringsfrihet ifølge Mill?",
                options: [
                    "Å tillate enhver mening for å unngå sosial konflikt",
                    "Å fremme individuelle rettigheter og beskyttelse mot innblanding",
                    "Å styrke samfunnet gjennom åpne debatter og læring",
                    "Å begrense sensur basert på flertallets verdier"
                ],
                answer: 2,
                feedback: "Mill mener ytringsfrihet gir grunnlag for læring og korreksjon gjennom åpne diskusjoner."
            },
            {
                question: "Hva mener Charles Taylor med frihet som selvrealisering?",
                options: [
                    "At frihet er en naturlig tilstand uten behov for politisk organisering",
                    "At individet kan utvikle sine evner best uten ytre innblanding",
                    "At frihet innebærer å kunne utvikle sine iboende evner innenfor et fellesskap",
                    "At frihet kun er verdifull når den bidrar til økonomisk vekst"
                ],
                answer: 2,
                feedback: "Taylor mener frihet som selvrealisering er knyttet til utvikling av evner innenfor et velorganisert fellesskap."
            },
            {
                question: "Hva innebærer en 'prinsipiell begrunnelse' for demokrati?",
                options: [
                    "At demokrati er den mest stabile styringsformen",
                    "At demokrati sikrer politisk likhet og selvstyre",
                    "At demokrati tillater størst mulig politisk effektivitet",
                    "At demokrati er nødvendig for økonomisk vekst"
                ],
                answer: 1,
                feedback: "En prinsipiell begrunnelse for demokrati er at det sikrer politisk likhet og retten til selvstyre."
            },
            {
                question: "Hva er Jason Brennans innvending mot demokratiet?",
                options: [
                    "At demokrati favoriserer økonomisk urettferdighet",
                    "At inkompetente velgere kan ha urettmessig makt over andre",
                    "At demokratier mangler tilstrekkelig økonomisk stabilitet",
                    "At demokratiske valg ikke er tilpasset dagens teknologiske utvikling"
                ],
                answer: 1,
                feedback: "Brennan argumenterer for at demokratiet gir politisk makt til velgere som kan være uinformerte eller irrasjonelle."
            },
            {
                question: "Hvordan ser Mill på kvinnefrigjøring i et utilitaristisk perspektiv?",
                options: [
                    "Som en moralsk plikt uten praktisk betydning for samfunnet",
                    "Som en fordel for både kvinner og samfunnet, ved å øke total nytte",
                    "Som en trussel mot tradisjonelle verdier og stabilitet",
                    "Som en nødvendighet for å opprettholde sosiale normer"
                ],
                answer: 1,
                feedback: "Mill argumenterer for at frigjøring av kvinner øker total lykke og gir fordeler både for kvinner og samfunnet."
            },
            {
                question: "Hvordan kan ytringsfrihet begrenses ifølge skadeprinsippet?",
                options: [
                    "Ytringer som utfordrer flertallets moral kan begrenses",
                    "Ytringer som truer andres sikkerhet og velferd kan begrenses",
                    "Alle kontroversielle ytringer bør være lovlige",
                    "Kun ytringer mot statlige institusjoner kan begrenses"
                ],
                answer: 1,
                feedback: "Ifølge skadeprinsippet kan ytringsfriheten begrenses dersom den utgjør en reell trussel mot andres sikkerhet eller velferd."
            },        
            {
                question: "Hva kjennetegner kulturrelativisme innen metaetikk?",
                options: [
                    "At moralske normer er universelt gyldige på tvers av kulturer",
                    "At moral er subjektivt og varierer mellom individer",
                    "At det finnes moralske sannheter, men de er kulturelt betinget",
                    "At moral er basert på vitenskapelige fakta"
                ],
                answer: 2,
                feedback: "Kulturrelativismen hevder at moralske normer er riktige eller gale kun relativt til en gitt kultur."
            },
            {
                question: "Hva er hovedpoenget i Benthams nyttekalkyle innen utilitarismen?",
                options: [
                    "Å prioritere intensitet fremfor varighet",
                    "Å vektlegge både intensitet og omfang av nytelsen",
                    "Å ignorere sannsynlighet i nytelsens verdi",
                    "Å fokusere kun på den moralske aktørens nytte"
                ],
                answer: 1,
                feedback: "Benthams nyttekalkyle inkluderer både intensitet og omfang, i tillegg til varighet og sannsynlighet."
            },
            {
                question: "Hva er Kants syn på hypotetiske imperativer?",
                options: [
                    "De gjelder uavhengig av personlige mål",
                    "De er bindende uansett situasjon",
                    "De foreskriver handlinger for å oppnå bestemte mål",
                    "De innebærer alltid moralske plikter"
                ],
                answer: 2,
                feedback: "Hypotetiske imperativer foreskriver handlinger for å oppnå et spesifikt mål og gjelder kun dersom dette målet er satt."
            },
            {
                question: "Hva er formålet med dydsetikken ifølge Aristoteles?",
                options: [
                    "Å handle for å oppnå nytelse og unngå smerte",
                    "Å identifisere plikter for moralsk riktig handling",
                    "Å utvikle karaktertrekk som fremmer et godt liv",
                    "Å maksimere velferd i alle situasjoner"
                ],
                answer: 2,
                feedback: "Dydsetikken fokuserer på å utvikle gode karaktertrekk som fører til et vellykket og meningsfylt liv."
            },
            {
                question: "Hva betyr Kants humanitetsprinsipp?",
                options: [
                    "Å behandle alle handlinger som potensielle universelle lover",
                    "Å aldri bruke andre som et middel, men som et formål i seg selv",
                    "Å alltid handle i tråd med allmennviljen",
                    "Å vurdere handlinger etter deres konsekvenser for flest mulig"
                ],
                answer: 1,
                feedback: "Humanitetsprinsippet innebærer å behandle mennesker som formål i seg selv, aldri bare som midler."
            },
            {
                question: "Hva innebærer Singers syn på dyrs moralske status innen utilitarismen?",
                options: [
                    "Dyr har ikke moralsk status",
                    "Dyr kan kun betraktes som ressurser for menneskers glede",
                    "Dyr som føler smerte skal regnes som moralsk relevante",
                    "Dyrs interesser skal vektlegges mindre enn menneskers"
                ],
                answer: 2,
                feedback: "Singer mener at alle vesener som kan føle smerte, inkludert dyr, har moralsk relevans og må tas hensyn til."
            },
            {
                question: "Hva innebærer kulturrelativismens syn på moralsk fremgang?",
                options: [
                    "At moral kan forbedres universelt over tid",
                    "At alle kulturer kan utvikle seg i samme moralske retning",
                    "At moralsk fremgang ikke eksisterer som et objektivt konsept",
                    "At alle samfunn til slutt vil utvikle like moralske normer"
                ],
                answer: 2,
                feedback: "Kulturrelativismen avviser ideen om objektiv moralsk fremgang, siden moralske normer varierer mellom kulturer."
            },
            {
                question: "Hva mener Mill med forskjellen på 'høyere' og 'lavere' nytelse?",
                options: [
                    "At all nytelse har lik verdi",
                    "At intellektuell nytelse er mer verdifull enn fysisk nytelse",
                    "At fysisk nytelse overgår intellektuell nytelse",
                    "At nytelse er irrelevant i moralske vurderinger"
                ],
                answer: 1,
                feedback: "Mill hevder at intellektuell nytelse er mer verdifull enn fysisk nytelse, og at kvaliteten av nytelse er viktig."
            },
            {
                question: "Hvilken av følgende er en innvending mot Kants pliktetikk?",
                options: [
                    "Den mangler fokus på konsekvenser",
                    "Den verdsetter følelsers rolle i moral",
                    "Den er kun gyldig i spesifikke kulturer",
                    "Den er basert på subjektive normer"
                ],
                answer: 0,
                feedback: "En kritikk av Kants pliktetikk er at den ignorerer konsekvenser og fokuserer utelukkende på plikten i handlingen."
            },
            {
                question: "Hva er en moralsk dyd ifølge dydsetikken?",
                options: [
                    "En plikt til å maksimere lykke",
                    "Et karaktertrekk som gjør oss bedre rustet til å leve et godt liv",
                    "Et personlig ønske om å handle riktig",
                    "En universell lov for å oppnå velvære"
                ],
                answer: 1,
                feedback: "En moralsk dyd er et karaktertrekk som gjør oss i stand til å fungere godt i samfunnet og leve et godt liv."
            },        
        {
            question: "Hva er kjernen i kompatibilisme i forhold til fri vilje?",
            options: [
                "At fri vilje ikke kan eksistere sammen med determinisme", 
                "At fri vilje kan eksistere selv om determinisme er sant", 
                "At determinisme avviser alle former for fri vilje", 
                "At fri vilje eksisterer uavhengig av våre handlinger"
            ],
            answer: 1,
            feedback: "Kompatibilismen hevder at fri vilje og determinisme kan være forenelige."
        },
        {
            question: "Hva er den naturalistiske feilslutningen i moralfilosofi?",
            options: [
                "Å basere etiske slutninger på kulturelle normer alene", 
                "Å slutte fra et deskriptivt 'er' til et normativt 'bør' uten tilstrekkelig begrunnelse", 
                "Å anvende religiøse tekster som moralsk grunnlag", 
                "Å unngå empiriske tester av moralske påstander"
            ],
            answer: 1,
            feedback: "Naturalistisk feilslutning innebærer å slutte fra hvordan noe er til hvordan det bør være, uten tilstrekkelig normativ begrunnelse."
        },
        {
            question: "Hva er en beslutningssituasjon i etikken?",
            options: [
                "En situasjon der en person vurderer konsekvensene av en handling", 
                "En situasjon der man må velge mellom flere handlingsalternativer", 
                "En situasjon der man reflekterer over tidligere handlinger", 
                "En situasjon der kun deskriptive fakta vurderes"
            ],
            answer: 1,
            feedback: "En beslutningssituasjon oppstår når en person står overfor ulike handlingsalternativer og må bestemme hva som er riktig å gjøre."
        },
        {
            question: "Hva er preferanseutilitarisme?",
            options: [
                "En form for etikk der lykke er det eneste målet for handlinger", 
                "En variant av utilitarisme der oppfyllelse av preferanser gir moralsk verdi", 
                "En teori som ignorerer individuelle ønsker og fokuserer kun på nytte", 
                "En variant av utilitarisme som baserer seg på intellektuell utvikling"
            ],
            answer: 1,
            feedback: "Preferanseutilitarisme vurderer en handling som moralsk riktig hvis den oppfyller flest mulig preferanser, fremfor kun nytelse."
        },
        {
            question: "Hva menes med dyd i dydsetikken?",
            options: [
                "En positiv karaktertrekk som styrer moralsk handling i ulike situasjoner", 
                "En handling som gir mest mulig nytte", 
                "En lovmessig forpliktelse uavhengig av konsekvenser", 
                "En norm basert på samfunnets forventninger"
            ],
            answer: 0,
            feedback: "I dydsetikken er dyder positive karaktertrekk som hjelper individet til å handle moralsk riktig."
        },
        {
            question: "Hva innebærer skadeprinsippet i John Stuart Mills filosofi?",
            options: [
                "At individer er frie så lenge de ikke skader seg selv", 
                "At frihet kan begrenses for å hindre skade på andre", 
                "At alle handlinger bør vurderes ut fra nytelse og smerte", 
                "At politiske rettigheter skal være like for alle"
            ],
            answer: 1,
            feedback: "Skadeprinsippet hos Mill innebærer at individers frihet kun bør begrenses for å forhindre skade på andre."
        },
        {
            question: "Hva innebærer 'moral relativisme'?",
            options: [
                "At moralske normer er universelle og gjelder alle kulturer", 
                "At moral er uavhengig av kulturelle forskjeller", 
                "At moralske normer er kulturspesifikke og kan variere mellom samfunn", 
                "At moral kun gjelder individuelle preferanser"
            ],
            answer: 2,
            feedback: "Moral relativisme innebærer at moralske normer varierer mellom kulturer og er spesifikke for hvert samfunn."
        },
        {
            question: "Hvordan beskriver dydsetikken forholdet mellom dyder og moral?",
            options: [
                "At moral avhenger av konsekvensene av handlinger", 
                "At moral handler om å utvikle positive karaktertrekk og dyder", 
                "At moral kun styres av lover og regler", 
                "At moral er fullstendig relativ og endrer seg konstant"
            ],
            answer: 1,
            feedback: "Dydsetikken sier at moral handler om å utvikle positive karaktertrekk som gjør oss i stand til å handle etisk."
        },
        {
            question: "Hva er hovedmålet med normative etiske teorier?",
            options: [
                "Å beskrive hvordan mennesker faktisk handler i ulike situasjoner", 
                "Å forstå hvilke handlinger som bør utføres og hvilke verdier som er moralsk prisverdige", 
                "Å analysere moral uten å ta hensyn til kontekst eller konsekvenser", 
                "Å vurdere handlingers etiske verdi basert på sosiale normer"
            ],
            answer: 1,
            feedback: "Normative etiske teorier søker å besvare spørsmål om hva vi bør gjøre og hva som er moralsk verdifullt."
        },
        {
            question: "Hva menes med kulturrelativisme i etikken?",
            options: [
                "At moral er uavhengig av kultur og universell for alle samfunn", 
                "At moralske normer varierer fra kultur til kultur og ikke er universelle", 
                "At kun religiøse verdier kan gi moralsk veiledning", 
                "At moral er konstant og ikke påvirkes av samfunnsutvikling"
            ],
            answer: 1,
            feedback: "Kulturrelativisme innebærer at moralske normer anses som relative til kultur og samfunn, og at de kan variere."
        },
        {
            question: "Hva kjennetegner Kants 'pliktetikk' sammenlignet med konsekvensetikk?",
            options: [
                "At en handling er riktig hvis den maksimerer glede", 
                "At en handling er moralsk riktig uavhengig av konsekvensene", 
                "At en handling vurderes kun ut fra dens utfall", 
                "At moralske valg er basert på empiriske observasjoner"
            ],
            answer: 1,
            feedback: "Kants pliktetikk hevder at en handling er moralsk riktig hvis den følger en universell plikt, uavhengig av konsekvenser."
        },
        {
            question: "Hva kjennetegner 'preferanseutilitarisme'?",
            options: [
                "At handlinger vurderes ut fra personlige følelser", 
                "At handlinger er riktige hvis de oppfyller flest preferanser", 
                "At preferanser ikke har noen rolle i moralske beslutninger", 
                "At det kun er konsekvensene som teller, uansett preferanser"
            ],
            answer: 1,
            feedback: "Preferanseutilitarisme vurderer handlinger som riktige dersom de oppfyller flest mulig preferanser."
        },
        {
            question: "Hva menes med 'moralsk status' i etikken?",
            options: [
                "Rangeringen av samfunnets normer", 
                "Evnen til å føle smerte og nytelse og derfor ha krav på etisk hensyn", 
                "En vurdering av hvor moralsk høyverdig en handling er", 
                "Posisjonen som individer har i juridiske spørsmål"
            ],
            answer: 1,
            feedback: "Moralsk status i etikken refererer til evnen til å oppleve smerte og nytelse, noe som gir et etisk krav på hensyn."
        },
        {
            question: "Hva er betydningen av 'naturalistisk feilslutning' i etikken?",
            options: [
                "Å gjøre en slutning fra et deskriptivt til et normativt utsagn uten god begrunnelse", 
                "Å basere moralske vurderinger kun på følelsesmessige oppfatninger", 
                "Å kreve empirisk bevis for alle etiske påstander", 
                "Å argumentere for at alle mennesker har samme moralske status"
            ],
            answer: 0,
            feedback: "Naturalistisk feilslutning innebærer å slutte fra hvordan noe er til hvordan det bør være, uten tilstrekkelig grunnlag."
        },
        {
            question: "Hva er hovedkritikken av kulturrelativisme?",
            options: [
                "At den avviser alle former for moralsk toleranse", 
                "At den kan føre til aksept av moralsk problematiske normer", 
                "At den fokuserer på universelle etiske prinsipper", 
                "At den utelukkende baserer moral på religion"
            ],
            answer: 1,
            feedback: "Kritikere mener kulturrelativisme kan føre til aksept av moralske normer som er problematiske, fordi den avviser objektiv moral."
        },
        {
            question: "Hva er formålet med en 'beslutningssituasjon' i etikken?",
            options: [
                "Å evaluere tidligere utførte handlinger", 
                "Å bestemme den mest etiske handlingen i en gitt situasjon", 
                "Å undersøke handlingens konsekvenser etter at den er utført", 
                "Å vurdere ulike kulturers moralske normer"
            ],
            answer: 1,
            feedback: "En beslutningssituasjon i etikken handler om å finne den mest etiske handlingen i en bestemt situasjon."
        },
        {
            question: "Hva er utilitarismens syn på moralsk status?",
            options: [
                "At alle levende vesener har samme moralske status", 
                "At kun mennesker har moralsk status", 
                "At moralsk status bestemmes av evnen til å oppleve nytelse og smerte", 
                "At moralsk status er relatert til sosial status"
            ],
            answer: 2,
            feedback: "Ifølge utilitarismen avgjøres moralsk status av evnen til å oppleve nytelse og smerte, noe som inkluderer dyr."
        },
        {
            question: "Hva er den 'naturalistiske feilslutning' i etikken?",
            options: [
                "Å bruke deskriptive påstander for å avgjøre normative spørsmål", 
                "Å anta at alle moralske vurderinger er subjektive", 
                "Å gjøre normative vurderinger utelukkende basert på følelser", 
                "Å avgjøre moralske spørsmål kun gjennom logisk analyse"
            ],
            answer: 0,
            feedback: "Den naturalistiske feilslutningen innebærer å slutte fra 'er' til 'bør', altså å anta at fordi noe er naturlig, er det også moralsk riktig."
        },
        {
            question: "Hva betyr 'normativ etikk'?",
            options: [
                "En form for deskriptiv analyse av hvordan vi faktisk handler", 
                "Studiet av hvordan vi bør handle og hvilke verdier som er moralsk riktige", 
                "En undersøkelse av hvordan etikk er en subjektiv vurdering", 
                "En beskrivelse av kulturelle normer som påvirker handlinger"
            ],
            answer: 1,
            feedback: "Normativ etikk undersøker hvordan vi bør handle og hvilke verdier som er moralsk prisverdige."
        },
        {
            question: "Hva er hovedideen i utilitarismen?",
            options: [
                "At handlinger bør baseres på plikt uavhengig av konsekvenser", 
                "At det moralsk riktige er å maksimere lykke for flest mulig", 
                "At kun de sterkeste har moralsk rett", 
                "At etisk handling avhenger av individuell samvittighet"
            ],
            answer: 1,
            feedback: "Utilitarismen sier at en handling er moralsk riktig hvis den maksimerer lykke for flest mulig."
        },
        {
            question: "Hva mener Kants 'det kategoriske imperativ'?",
            options: [
                "En regel som gjelder betinget av målet man ønsker å oppnå", 
                "En universell etisk lov som gjelder uansett konsekvenser", 
                "En moralsk regel som kun gjelder i spesielle situasjoner", 
                "En regel som endres basert på samfunnets normer"
            ],
            answer: 1,
            feedback: "Kants kategoriske imperativ er en universell regel som gjelder uavhengig av situasjon og konsekvenser."
        },
        {
            question: "Hvordan beskriver Habermas betydningen av offentlig debatt i demokratiet?",
            options: [
                "Som en form for underholdning uten reell politisk innflytelse", 
                "Som en arena for å gi lik tilgang til argumentasjon og konsensusdannelse", 
                "Som en plass for personlig vinning og makt", 
                "Som et forum for å unngå konflikt og utelukke debatt"
            ],
            answer: 1,
            feedback: "Habermas hevder at offentlig debatt skal gi lik tilgang og bidra til demokratisk konsensus som gir legitimitet til politiske beslutninger."
        },
        {
            question: "Hva mente Kierkegaard med 'eksistensiell angst'?",
            options: [
                "En følelse av trygghet knyttet til troen på Gud", 
                "En grunnleggende uro ved menneskets frihet og valg", 
                "En frykt for samfunnets regler og normer", 
                "En angst forårsaket av biologiske faktorer alene"
            ],
            answer: 1,
            feedback: "Kierkegaard beskrev eksistensiell angst som en følelse av uro knyttet til menneskets frihet og ansvar."
        },
        {
            question: "Hva innebærer Bentham sin utilitarisme?",
            options: [
                "At handlinger vurderes ut fra plikter uavhengig av konsekvenser", 
                "At riktig handling er den som gir mest glede og minst smerte for flest mulig", 
                "At handlinger vurderes ut fra kulturelle normer og verdier", 
                "At moralske handlinger er de som følger religiøse prinsipper"
            ],
            answer: 1,
            feedback: "Benthams utilitarisme vurderer handlinger som riktige når de gir mest mulig glede og minst mulig smerte for flest mulig."
        },
        
        {
            question: "Hva betyr 'konsekvensialisme' i etikken?",
            options: [
                "At en handlings moral vurderes ut fra dens intensjon", 
                "At en handling er moralsk riktig basert på dens konsekvenser", 
                "At en handling kun er god hvis den samsvarer med loven", 
                "At moralske handlinger er bundet til tradisjoner og kultur"
            ],
            answer: 1,
            feedback: "Konsekvensialisme sier at en handlings moral vurderes ut fra dens faktiske konsekvenser."
        },
        {
            question: "Hva innebærer Kants 'hypotetiske imperativ'?",
            options: [
                "En moralsk regel som gjelder uavhengig av ønsker eller mål", 
                "En regel som gjelder hvis man har et bestemt mål", 
                "En plikt til å følge samfunnets lover uansett situasjon", 
                "En etisk rettesnor som er universell og ubetinget"
            ],
            answer: 1,
            feedback: "Kants hypotetiske imperativ gjelder når man har et spesifikt mål eller ønske som handlingen er ment å oppnå."
        },
        
        {
            question: "Hva er 'naturrett' ifølge John Locke?",
            options: [
                "En serie juridiske regler bestemt av staten", 
                "En rett til selvforsvar, frihet og eiendom, gitt av naturens lover", 
                "En plikt til å følge samfunnets skrevne lover", 
                "En lov om at kun samfunnets sterkeste har rettigheter"
            ],
            answer: 1,
            feedback: "For Locke betyr naturretten en medfødt rett til selvforsvar, frihet og eiendom."
        },
        {
            question: "Hva mente Nietzsche med 'vilje til makt'?",
            options: [
                "At alle handlinger er drevet av et ønske om fysisk dominans", 
                "At mennesker styres av en iboende vilje til selvutfoldelse og overlevelse", 
                "At samfunnslivet bør være preget av passivitet", 
                "At moral er basert på medfølelse og selvoppofrelse"
            ],
            answer: 1,
            feedback: "Nietzsche mente at 'vilje til makt' er en grunnleggende drivkraft i mennesker, som uttrykkes gjennom selvutfoldelse."
        },
        {
            question: "Hva er hovedprinsippet i sosial kontraktsteori?",
            options: [
                "At statens makt er guddommelig og uavhengig av individets samtykke", 
                "At statens legitimitet bygger på en avtale mellom individer og staten", 
                "At staten kun eksisterer for å beskytte individets eiendom", 
                "At staten bestemmer individets rettigheter uten deres innspill"
            ],
            answer: 1,
            feedback: "Sosial kontraktsteori hevder at statens legitimitet bygger på en avtale mellom individene og staten."
        },
        {
            question: "Hva er 'det kategoriske imperativ' ifølge Kant?",
            options: [
                "En regel for etisk oppførsel som gjelder under spesifikke forhold", 
                "En universell etisk lov som gjelder uansett konsekvenser", 
                "En regel som kun gjelder i juridiske spørsmål", 
                "En etisk rettesnor som avhenger av kultur og kontekst"
            ],
            answer: 1,
            feedback: "Kants kategoriske imperativ er en universell etisk lov som gjelder uavhengig av konsekvenser."
        },
        {
            question: "Hva mente John Stuart Mill med 'utilitarisme'?",
            options: [
                "At moral alltid bør vurderes individuelt uten hensyn til andre", 
                "At moral er basert på hva som maksimerer lykke for flest mulig", 
                "At alle handlinger er riktige hvis de følger loven", 
                "At moral alltid baseres på plikt, uavhengig av konsekvenser"
            ],
            answer: 1,
            feedback: "Mill mente at utilitarisme handler om å maksimere lykke for flest mulig som mål for moralsk riktig handling."
        },
        {
            question: "Hva mente Kant med 'det gode vilje' i etikken?",
            options: [
                "At en handling er god hvis den gir mest lykke for flest mulig", 
                "At en handling er god hvis den følger en plikt uavhengig av konsekvenser", 
                "At en handling er god hvis den samsvarer med personlige ønsker", 
                "At en handling er god kun når den oppnår materielle fordeler"
            ],
            answer: 1,
            feedback: "Kant mente at 'det gode vilje' handler om å følge plikt uavhengig av handlingens konsekvenser."
        },
        {
            question: "Hva innebærer prinsippet om 'utilitarisme'?",
            options: [
                "At en handling vurderes som god hvis den maksimerer individuell nytelse", 
                "At en handling er moralsk riktig hvis den maksimerer lykke og reduserer smerte for flest mulig", 
                "At en handling kun er riktig hvis den er basert på universelle regler", 
                "At en handling er riktig hvis den følger samfunnets tradisjoner"
            ],
            answer: 1,
            feedback: "Utilitarisme sier at en handling er moralsk riktig hvis den maksimerer lykke og reduserer smerte for flest mulig."
        },
        {
            question: "Hva mente Aristoteles med 'eudaimonia'?",
            options: [
                "En tilstand av materiell velstand", 
                "Lykke som oppnås gjennom dydig aktivitet og personlig utvikling", 
                "Fullstendig frihet fra alle sosiale forpliktelser", 
                "En tilstand av fysisk nytelse uten ansvar"
            ],
            answer: 1,
            feedback: "Aristoteles så 'eudaimonia' som lykke oppnådd gjennom dydig aktivitet og selvrealisering."
        },
        {
            question: "Hva innebærer 'kontraktsteori' i politisk filosofi?",
            options: [
                "At samfunnets regler bestemmes av politisk makt alene", 
                "At statens legitimitet er basert på en hypotetisk eller faktisk samfunnsavtale", 
                "At moral og lover er universelle og uforanderlige", 
                "At mennesker aldri kan inngå en avtale med staten"
            ],
            answer: 1,
            feedback: "Kontraktsteori i politisk filosofi foreslår at statens legitimitet stammer fra en samfunnsavtale."
        },
        {
            question: "Hva er et hovedpoeng i eksistensialismen?",
            options: [
                "At mennesket har en fast essens som må leves ut", 
                "At mennesket skaper sin egen mening gjennom valg og handlinger", 
                "At alle menneskers handlinger er bestemt av ytre omstendigheter", 
                "At alle mennesker bør handle i tråd med samfunnets moral"
            ],
            answer: 1,
            feedback: "Eksistensialismen hevder at mennesket selv skaper mening gjennom egne valg og handlinger."
        },
        {
            question: "Hva var Humes syn på moralske vurderinger?",
            options: [
                "At moralske vurderinger stammer fra en medfødt moral", 
                "At moralske vurderinger er basert på fornuft alene", 
                "At moralske vurderinger oppstår fra følelser og er subjektive", 
                "At moralske vurderinger er universelle og objektive"
            ],
            answer: 2,
            feedback: "Hume mente at moralske vurderinger oppstår fra følelser og ikke fra fornuft."
        },
        {
            question: "Hvordan skiller hypotetisk fra kategorisk imperativ ifølge Kant?",
            options: [
                "Hypotetisk imperativ er betinget av ønsker, mens kategorisk imperativ gjelder uansett situasjon", 
                "Kategorisk imperativ gjelder kun for spesifikke handlinger, mens hypotetisk gjelder alle", 
                "Hypotetisk imperativ er kun for moralske handlinger, kategorisk for alle andre", 
                "Kategorisk imperativ handler om fordeler, mens hypotetisk handler om plikter"
            ],
            answer: 0,
            feedback: "Ifølge Kant er det hypotetiske imperativet betinget av mål, mens det kategoriske gjelder uten betingelser."
        },
        {
            question: "Hva menes med at Aristoteles betrakter dyd som en 'middelvei'?",
            options: [
                "At dyd består i en balanse mellom under- og overdrivelse av karaktertrekk", 
                "At dyd utelukkende handler om å være passiv i moralske spørsmål", 
                "At dyd innebærer ekstreme følelser og handlinger i hver situasjon", 
                "At dyd utelukkende er basert på intellektuelle prestasjoner"
            ],
            answer: 0,
            feedback: "Aristoteles ser dyd som en balanse mellom under- og overdrivelse, som fører til en harmonisk karakter."
        },
        {
            question: "Hva var Nietzsches syn på 'slave-moral' og 'herre-moral'?",
            options: [
                "Slave-moral handler om styrke og autonomi, mens herre-moral verdsetter ydmykhet", 
                "Herre-moral uttrykker selvhevdelse, mens slave-moral verdsetter svakhet og medfølelse", 
                "Herre-moral er undertrykkende, mens slave-moral oppmuntrer til individuell frihet", 
                "Slave-moral er basert på makt, mens herre-moral fokuserer på harmoni"
            ],
            answer: 1,
            feedback: "Nietzsche beskrev herre-moral som uttrykk for selvhevdelse, mens slave-moral verdsatte svakhet og medfølelse."
        },
        {
            question: "Hvordan beskriver Rawls prinsippet om 'rettferdighet som rimelighet'?",
            options: [
                "At rettferdighet bør tilpasses samfunnets behov", 
                "At rettferdighet skal forstås uavhengig av individuelle fordeler", 
                "At rettferdighet er et resultat av den sterkestes rett", 
                "At rettferdighet innebærer å gi alle lik tilgang til alle ressurser"
            ],
            answer: 1,
            feedback: "Rawls prinsipp om rettferdighet som rimelighet søker å være uavhengig av personlige fordeler og basert på upartiske prinsipper."
        },
        {
            question: "Hvordan forklarer utilitarismen riktig handling?",
            options: [
                "En handling er riktig hvis den respekterer universelle moralprinsipper", 
                "En handling er riktig dersom den maksimerer lykke for flest mulig", 
                "En handling er riktig hvis den samsvarer med plikten til å være ærlig", 
                "En handling er riktig hvis den følger religiøse påbud"
            ],
            answer: 1,
            feedback: "Utilitarismen vurderer en handling som riktig hvis den gir mest mulig lykke til flest mulig."
        },
        {
            question: "Hva mente Kant med 'autonomi' i etikken?",
            options: [
                "Evnen til å følge samvittigheten uten ytre påvirkning", 
                "Friheten til å handle basert på individuelle ønsker og behov", 
                "Evnen til å handle ut fra egen fornuft og moralske lover man gir seg selv", 
                "Friheten til å velge handlinger uten ansvar for konsekvensene"
            ],
            answer: 2,
            feedback: "Kants begrep om autonomi innebærer evnen til å følge egen fornuft og de moralske lover man selv har etablert."
        },
        {
            question: "Hva innebærer 'deontologi' i etikken?",
            options: [
                "En etikk som baserer seg på konsekvensene av en handling", 
                "En pliktbasert etikk hvor handlingers moralske verdi er uavhengig av konsekvensene", 
                "En etikk hvor regler endres etter situasjon", 
                "En etisk tilnærming som fokuserer på glede som høyeste mål"
            ],
            answer: 1,
            feedback: "Deontologi er en pliktbasert etikk som sier at handlinger er moralsk riktige eller gale uavhengig av konsekvensene."
        },
        {
            question: "Hva menes med 'konsekvensialisme' i etikken?",
            options: [
                "En etisk teori som vektlegger intensjonen bak handlingen", 
                "En etisk tilnærming hvor handlingers moralske verdi bestemmes av utfallet", 
                "En teori om at kun regler skal avgjøre handlingers riktighet", 
                "En etikk hvor kultur og tradisjoner er moralske veiledere"
            ],
            answer: 1,
            feedback: "Konsekvensialisme vurderer en handlings moral ut fra dens utfall eller konsekvenser."
        },
        {
            question: "Hva var Kants syn på plikt i etikken?",
            options: [
                "At etikken bør baseres på følelser fremfor regler", 
                "At plikt betyr å maksimere glede for flest mulig", 
                "At et moralsk riktig handling er den som følger en universell plikt", 
                "At plikt er uavhengig av menneskelige handlinger"
            ],
            answer: 2,
            feedback: "Kant mente at en moralsk riktig handling følger en universell plikt, uavhengig av konsekvenser."
        },
        {
            question: "Hva innebærer begrepet 'sosial kontrakt' i politisk filosofi?",
            options: [
                "En avtale mellom individet og staten som legitimerer styring", 
                "En moralsk forpliktelse til å følge samfunnets uskrevne normer", 
                "En uformell kontrakt mellom samfunnsmedlemmer om rettferdighet", 
                "En lovgivning som dikterer individets frihet og ansvar"
            ],
            answer: 0,
            feedback: "Sosial kontrakt i politisk filosofi refererer til en avtale som legitimerer statens makt over individet."
        },
        {
            question: "Hva betyr det å være 'etisk egoist'?",
            options: [
                "At man alltid handler til beste for samfunnet", 
                "At man handler til fordel for egeninteressen som en moralsk forpliktelse", 
                "At man alltid søker å handle uselvisk og med omtanke", 
                "At man følger samfunnets etiske normer uansett"
            ],
            answer: 1,
            feedback: "Etisk egoisme innebærer at det er moralsk riktig å handle slik at man maksimerer sin egeninteresse."
        },
        {
            question: "Hva er hovedpoenget i Thomas Hobbes’ naturtilstand?",
            options: [
                "En tilstand preget av harmoni uten statlig inngripen", 
                "Et samfunn hvor alle individer deler ressurser rettferdig", 
                "En hypotetisk tilstand med 'alles kamp mot alle' uten styring", 
                "En idealstat styrt av en mektig hersker for trygghet"
            ],
            answer: 2,
            feedback: "Hobbes beskrev naturtilstanden som en hypotetisk situasjon der alle kjemper mot alle i mangel av en overordnet makt."
        },
        {
            question: "Hva betyr det filosofiske konseptet 'moral relativisme'?",
            options: [
                "At moral er universelt gyldig for alle kulturer og samfunn", 
                "At moral er basert på rasjonell tenkning alene", 
                "At moralske normer varierer mellom ulike samfunn og kulturer", 
                "At moral kun er subjektiv og individuell"
            ],
            answer: 2,
            feedback: "Moral relativisme hevder at moralske normer er kulturspesifikke og varierer fra samfunn til samfunn."
        },
        {
            question: "Hva menes med Kants kategoriske imperativ?",
            options: [
                "En regel som gjelder kun under visse betingelser", 
                "En universell regel som bør følges uavhengig av konsekvenser", 
                "En veiledning for å oppnå personlig suksess", 
                "En oppfordring til å følge lovene i samfunnet"
            ],
            answer: 1,
            feedback: "Kants kategoriske imperativ er en universell regel for handling som gjelder uten hensyn til konsekvensene."
        },
        {
            question: "Hva er John Stuart Mills skadeprinsipp?",
            options: [
                "Individuell frihet skal begrenses bare for å forhindre skade på andre", 
                "Individuell frihet er viktig, men kun innenfor lovens grenser", 
                "Man skal alltid handle slik at ens frihet maksimeres", 
                "Frihet skal begrenses når det truer samfunnets normer"
            ],
            answer: 0,
            feedback: "Mills skadeprinsipp sier at individuell frihet kun skal begrenses for å forhindre skade på andre."
        },
        {
            question: "Hva er hovedkritikken mot utilitarismen i forhold til rettferdighet?",
            options: [
                "Den prioriterer intensjoner over konsekvenser", 
                "Den kan tillate urettferdighet mot enkeltpersoner hvis total lykke øker", 
                "Den støtter bare handlinger med direkte materielle resultater", 
                "Den krever lik fordeling av ressurser uansett kontekst"
            ],
            answer: 1,
            feedback: "Utilitarismen kan rettferdiggjøre handlinger som skader enkeltpersoner så lenge det gir økt lykke totalt sett."
        },
        {
            question: "Hva mente Aristoteles med 'den gyldne middelvei'?",
            options: [
                "At alle handlinger må være balansert og uten overdrivelser", 
                "At dyd ligger i å unngå både ekstrem under- og overdrivelse", 
                "At livet bør leves uten å fokusere på verken rikdom eller fattigdom", 
                "At et menneske bør følge samfunnets normer slavisk"
            ],
            answer: 1,
            feedback: "Aristoteles’ gyldne middelvei innebærer at dyd oppnås ved å finne en balanse mellom overdrivelse og mangel."
        },
        {
            question: "Hva ligger i Humes 'is-ought'-problematikk?",
            options: [
                "At vi ikke kan utlede moralske normer direkte fra fakta om verden", 
                "At mennesker har en naturlig tilbøyelighet til moral", 
                "At alle moralske vurderinger er objektivt riktige", 
                "At moral er et resultat av samfunnets lover"
            ],
            answer: 0,
            feedback: "Hume mente at det er et logisk problem å utlede normative 'bør'-påstander direkte fra deskriptive 'er'-påstander."
        },
        {
            question: "Hva kjennetegner normativ etikk?",
            options: [
                "En etisk tilnærming som fokuserer på konsekvensene av handlinger", 
                "En studie av hvordan man faktisk handler, snarere enn hvordan man bør handle", 
                "En systematisk undersøkelse av hvordan man bør handle moralsk riktig", 
                "En beskrivelse av etiske handlinger basert på samfunnets tradisjoner"
            ],
            answer: 2,
            feedback: "Normativ etikk fokuserer på hvordan vi bør handle og hva som er moralsk riktig eller galt."
        },
        {
            question: "Hva er hovedideen bak konsekvensialisme?",
            options: [
                "Moralens verdi ligger i handlingens intensjon, ikke dens utfall", 
                "Moralens verdi bestemmes av resultatene handlingen produserer", 
                "Moralens verdi ligger i tradisjoner og kulturelle normer", 
                "Moralens verdi baseres kun på samfunnets lover og regler"
            ],
            answer: 1,
            feedback: "Konsekvensialisme hevder at en handlings moralske verdi bestemmes av dens utfall og konsekvenser."
        },
        {
            question: "Hva mener vi med 'den naturalistiske feilslutning'?",
            options: [
                "Å basere moralske normer utelukkende på logiske resonnementer", 
                "Å utlede moralske prinsipper direkte fra hvordan ting faktisk er", 
                "Å basere moral på det som gir flest fordeler for flest mulig", 
                "Å anerkjenne kunnskapen som grunnlaget for etiske avgjørelser"
            ],
            answer: 1,
            feedback: "Den naturalistiske feilslutning innebærer å utlede 'bør' fra 'er', det vil si å trekke moralske konklusjoner fra naturens fakta."
        },
    ],
    "Estetikk": [
    ],
};
