const criminalList = [
    {
        name: "Ulf Mark Schneider",
        image: "criminals/Ulf_Mark_Schneider.jpg",
        country: "Switzerland",
        crimes: [
            "Privatization & commodification of water resources in drought-affected regions.",
            "Aggressive infant formula marketing in poor countries, undermining breastfeeding and contributing to infant mortality.",
            "Use of child & forced labor in cocoa supply chains in West Africa.",
            "Driving deforestation of national parks for cocoa expansion.",
            "Greenwashing while producing massive plastic pollution and lobbying against deposit schemes.",
            "Suppressing union organizing and exploiting precarious factory labor.",
            "Lobbying against environmental, labor, and health protections."
        ]
    },
    {
        name: "Jeff Bezos",
        image: "criminals/Jeff_Bezos.jpg",
        country: "USA",
        crimes: [
            "Built a global empire on hyper-exploitation of warehouse workers, with inhumane quotas and surveillance.",
            "Crushed unionization efforts through aggressive union-busting and retaliatory firings.",
            "Turned Amazon into a tax-dodging behemoth, avoiding billions owed to public services.",
            "Destroyed countless small businesses through monopolistic practices and market domination.",
            "Expanded Amazon Web Services (AWS) contracts with military and surveillance agencies.",
            "Amassed obscene personal wealth while Amazon workers rely on food stamps.",
            "Drives environmental destruction through unsustainable logistics and mass consumption."
        ]
    },
    {
        name: "Benjamin Netanyahu",
        image: "criminals/Benjamin_Netanyahu.jpg",
        country: "Israel",
        crimes: [
            "Orchestrated systemic apartheid policies against Palestinians, including illegal settlements, forced evictions, and military aggression.",
            "Oversaw brutal bombing campaigns in Gaza resulting in mass civilian casualties and infrastructure destruction.",
            "Weaponized surveillance technology (Pegasus spyware) against dissidents, journalists, and human rights activists.",
            "Utilized far-right coalitions to erode judicial independence and democratic institutions.",
            "Profiteered from arms trade and military-industrial partnerships with authoritarian regimes.",
            "Expanded digital censorship and misinformation campaigns to silence opposition narratives.",
            "Instrumental in normalizing military occupation as a tool of colonial expansion."
        ]
    },
    {
        name: "Mohammed bin Salman",
        image: "criminals/Mohammed_bin_Salman.jpg",
        country: "Saudi Arabia",
        crimes: [
            "Mastermind of the Yemen humanitarian crisis through relentless military intervention and blockade.",
            "Ordered the brutal assassination of journalist Jamal Khashoggi inside a consulate.",
            "Enforced draconian repression of dissent, imprisoning and executing political opponents and activists.",
            "Instrumental in maintaining a petrostate economy fueling global climate catastrophe.",
            "Greenwashing global image through 'Vision 2030' while maintaining medieval-style autocratic rule.",
            "Expands surveillance state through cyberespionage and Pegasus spyware contracts."
        ]
    },
    {
        name: "Vladimir Putin",
        image: "criminals/Vladimir_Putin.jpg",
        country: "Russia",
        crimes: [
            "Oversaw brutal crackdowns on opposition, with widespread political imprisonment, assassinations, and censorship.",
            "Directed aggressive military invasions of Ukraine, Georgia, and Crimea, leading to thousands of civilian deaths.",
            "Weaponized state-owned energy monopolies to coerce global markets and undermine climate initiatives.",
            "Facilitates kleptocratic oligarchy through state-corporate collusion and asset plundering.",
            "Instrumental in exporting authoritarianism via Wagner Group mercenaries and cyber warfare.",
            "Undermines labor rights, LGBTQ+ rights, and civil liberties within Russia and abroad."
        ]
    },
    {
        name: "Elon Musk",
        image: "criminals/Elon_Musk.jpg",
        country: "USA",
        crimes: [
            "Relentlessly crushed labor organizing efforts, fired pro-union employees, and used intimidation tactics.",
            "Exploited lithium extraction, cobalt mining, and environmental destruction for 'green' tech profit.",
            "Weaponized social media to amplify far-right propaganda, misinformation, and union-busting rhetoric.",
            "Built fortune off of massive government subsidies while preaching libertarian anti-tax ideology.",
            "Endangers public safety with reckless AI automation experiments (e.g., Tesla Autopilot fatalities).",
            "Created abusive, exploitative work environments across his companies.",
            "Normalized billionaire space tourism while the planet burns."
        ]
    },
    {
        name: "Larry Fink",
        image: "criminals/Larry_Fink.jpg",
        country: "USA",
        crimes: [
            "Manages over $10 trillion in assets, controlling essential industries and dictating global policies.",
            "Invests heavily in fossil fuels, weapons manufacturing, and companies complicit in human rights abuses.",
            "Drives global housing crises through corporate landlord schemes, pricing out working-class families.",
            "Pushes greenwashing narratives while profiting from ecological collapse.",
            "Uses BlackRock's influence to resist regulations on climate, labor, and financial markets.",
            "Profits from private prisons, surveillance tech, and war industries.",
            "Acts as unelected shadow government through financial control over sovereign nations."
        ]
    },
    {
        name: "Mark Zuckerberg",
        image: "criminals/Mark_Zuckerberg.jpg",
        country: "USA",
        crimes: [
            "Engineered mass surveillance through Facebook, harvesting personal data for profit.",
            "Enabled genocides and ethnic violence by refusing to moderate hate speech in Myanmar, Ethiopia, and beyond.",
            "Amplified disinformation, election manipulation, and far-right radicalization globally.",
            "Monopolized social media by acquiring and stifling competition (Instagram, WhatsApp).",
            "Undermined mental health of billions through addictive algorithmic designs.",
            "Avoided taxes and accountability while expanding surveillance capitalism infrastructure.",
            "Instrumental in lobbying against digital privacy regulations worldwide."
        ]
    },
    {
        name: "Bill Gates",
        image: "criminals/Bill_Gates.jpg",
        country: "USA",
        crimes: [
            "Built Microsoft’s empire on monopolistic practices and anti-competitive lawsuits.",
            "Greenwashed global health initiatives while perpetuating private patents over life-saving medicine.",
            "Profited from land grabs, owning vast amounts of US farmland for speculative control.",
            "Pushed privatization of public education systems through corporate-funded reform agendas.",
            "Invested in fossil fuel companies and agribusinesses complicit in environmental destruction.",
            "Uses philanthropy as a shield to maintain capitalist control over global health policies.",
            "Instrumental in opposing open-source solutions during global crises for profit motives."
        ]
    },
    {
        name: "Darren Woods",
        image: "criminals/Darren_Woods.jpg",
        country: "USA",
        crimes: [
            "Continued ExxonMobil's decades-long cover-up of climate science to protect fossil fuel profits.",
            "Invested billions in new oil and gas extraction despite the climate emergency.",
            "Funds climate denial think tanks and lobbying groups to obstruct environmental regulations.",
            "Profits from oil spills, ecological disasters, and exploitation of Global South resources.",
            "Suppresses worker organizing efforts across Exxon’s operations.",
            "Perpetuates militarized protection of fossil fuel interests abroad.",
            "Instrumental in turning Big Oil into a global disinformation machine against environmental justice."
        ]
    },
    {
        name: "Donald Trump",
        image: "criminals/Donald_Trump.jpg",
        country: "USA",
        crimes: [
            "Incited an insurrection at the U.S. Capitol to overturn election results.",
            "Engaged in repeated efforts to pressure election officials to 'find' votes and alter election outcomes.",
            "Oversaw family separation policy at the border, leading to widespread human rights abuses.",
            "Utilized executive power to challenge environmental regulations and withdraw from the Paris Agreement.",
            "Appointed politically motivated judges to reshape the judiciary.",
            "Used presidential authority to undermine democratic institutions and the rule of law.",
            "Faced multiple investigations and impeachments for his actions in office."
        ]
    },
    {
        name: "Giorgia Meloni",
        image: "criminals/Giorgia_Meloni.jpg",
        country: "Italy",
        crimes: [
            "Led a far-right political coalition with roots in post-fascist movements.",
            "Implemented policies targeting migrant rescues and restricting the operations of humanitarian ships.",
            "Introduced legislation and rhetoric that critics argue undermine LGBTQ+ and civil rights.",
            "Maintained a strong anti-immigrant stance and promoted nationalistic ideologies.",
            "Pushed for policies that centralize power and challenge the independence of the judiciary.",
            "Has been criticized for downplaying or excusing historical ties to fascism."
        ]
    },
    {
        name: "Jamie Dimon",
        image: "criminals/Jamie_Dimon.jpg",
        country: "USA",
        crimes: [
            "As CEO of JPMorgan Chase, led the bank through the 2008 financial crisis, which required a government bailout.",
            "Oversaw billions in fines for misconduct, including mortgage fraud, foreign exchange rigging, and market manipulation.",
            "Profited from investments in fossil fuels, driving environmental degradation.",
            "Lobbied against stricter financial regulations following the crisis.",
            "Maintained a business model that prioritizes profits over ethical practices, often at the expense of consumers."
        ]
    },
    {
        name: "Rupert Murdoch",
        image: "criminals/Rupert_Murdoch.jpg",
        country: "Australia",
        crimes: [
            "Built a global media empire accused of spreading misinformation and political propaganda.",
            "Oversaw phone hacking scandals at his UK newspapers, leading to a public inquiry.",
            "Used his media influence to undermine democratic processes and promote specific political agendas.",
            "Faced criticism for the role of Fox News in amplifying false claims about elections and the COVID-19 pandemic.",
            "Exerted political influence to weaken media regulations and increase market dominance.",
            "Contributed to the polarization of public discourse through sensationalist and biased reporting."
        ]
    }
];