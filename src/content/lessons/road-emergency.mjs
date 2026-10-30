export default {
  id: 'road-emergency',
  category: 'emergencias',
  order: 1,
  minutes: 8,
  diagram: null,
  related: ['impaired-driving', 'helmet-why', 'calm-driving', 'night-visibility'],
  sources: [
    { label: 'Federación Internacional de Sociedades de la Cruz Roja y de la Media Luna Roja (FICR), Directrices internacionales de primeros auxilios, reanimación y educación, 2020',
      labelEn: 'International Federation of Red Cross and Red Crescent Societies (IFRC), International first aid, resuscitation and education guidelines, 2020' },
    { label: 'Organización Mundial de la Salud (OMS), Informe sobre la situación mundial de la seguridad vial 2023',
      labelEn: 'World Health Organization (WHO), Global status report on road safety 2023' }
  ],
  es: {
    slug: 'que-hacer-ante-un-accidente-de-transito',
    title: 'Qué hacer si presencias un accidente de tránsito',
    dek: 'Llegar primero a un accidente asusta. Saber en qué orden actuar te permite ayudar de verdad sin convertirte en otra víctima.',
    objectives: [
      'Saber cómo protegerte y proteger la escena antes de ayudar.',
      'Saber cómo llamar al 911 y qué información dar.',
      'Entender por qué no se debe mover a un herido ni quitarle el casco a un motociclista.',
      'Saber cómo acompañar a los heridos con respeto y cómo ayudar después.'
    ],
    sections: [
      {
        heading: 'Primero, tu propia seguridad',
        paragraphs: [
          'Lo primero que necesita un accidente es que nadie más salga herido. Muchas personas que se detienen a ayudar son atropelladas por otro vehículo que llega sin ver lo que pasó, sobre todo de noche, en curvas o en cuestas. Si tú te lesionas, ya no puedes ayudar a nadie y hay una víctima más que atender.',
          'Reduce la velocidad, enciende las luces de emergencia y estaciona donde no estorbes ni quedes expuesto: fuera de la calle si es posible, y donde los demás conductores te vean con tiempo. Si vas en moto, ponla bien a la orilla. Al bajarte, mira el tráfico antes de abrir la puerta o de caminar por la calle.',
          'Observa la escena antes de acercarte: ¿hay gasolina derramada, humo, fuego, cables eléctricos caídos, un vehículo inestable? Si es seguro, apaga el motor de los vehículos involucrados y pide que nadie fume cerca.'
        ]
      },
      {
        heading: 'Llama al 911 y da datos claros',
        paragraphs: [
          'Llama al 911 tan pronto como puedas, o pide a una persona concreta que lo haga: “Usted, la de camisa azul, llame al 911”. Cuando todos ven el accidente, cada uno puede pensar que otro ya llamó.',
          'En la isla muchas calles no tienen nombre ni número, así que describe el lugar con referencias que cualquiera reconozca: la comunidad, un negocio, una iglesia, una escuela o una curva conocida, y en qué dirección. Habla despacio, responde las preguntas y no cuelgues hasta que te lo indiquen; quien atiende puede darte instrucciones mientras llega la ayuda.'
        ],
        list: [
          'Dónde es exactamente, con referencias claras.',
          'Qué pasó y cuántos vehículos están involucrados.',
          'Cuántas personas heridas, si están despiertas y si respiran.',
          'Peligros en la escena: fuego, combustible, cables, tráfico.',
          'Tu nombre y un número para devolverte la llamada.'
        ]
      },
      {
        heading: 'Avisa al tráfico que viene',
        paragraphs: [
          'Un accidente detrás de una curva o en la cima de una cuesta es una trampa para el siguiente conductor. Si tienes triángulos de emergencia, colócalos bastante antes del lugar, en el lado por donde llega el tráfico, y más lejos aún si hay curva o cuesta. Si hay más personas ayudando, una puede ubicarse bien a la orilla, lejos de la escena, haciendo señas para que los vehículos bajen la velocidad.',
          'De noche, usa linternas, ropa clara o reflectiva y las luces de emergencia de los vehículos. Quien hace señas nunca debe pararse en medio de la calle.'
        ]
      },
      {
        heading: 'No muevas a los heridos ni quites el casco',
        paragraphs: [
          'Una persona herida puede tener lesiones en el cuello o la columna que no se ven. Moverla sin necesidad puede empeorar esas lesiones de forma permanente. Por eso, <strong>no muevas a un herido</strong> salvo que haya un peligro inmediato que no puedas controlar, como fuego, riesgo de explosión o que un vehículo esté a punto de golpearlo. Si hay que moverlo, hazlo con cuidado, manteniendo la cabeza, el cuello y la espalda alineados, con ayuda de otras personas.',
          'A un motociclista accidentado <strong>no le quites el casco</strong>. Los especialistas en primeros auxilios recomiendan dejarlo puesto, porque retirarlo puede mover el cuello. Solo una persona capacitada debería considerar retirarlo, si es indispensable para que la persona pueda respirar, y siguiendo las indicaciones del personal de emergencias. Si necesitas ver su cara o hablarle, puedes levantar la visera con cuidado.',
          'Habla con el herido con calma. Dile tu nombre, que la ayuda viene en camino y que es mejor que no se mueva. Mantenlo abrigado o a la sombra, según el clima. No le des de comer ni de beber. Si sangra mucho y tienes cómo, presiona la herida con un trapo limpio. Tu compañía tranquila ayuda más de lo que parece.'
        ]
      },
      {
        heading: 'Respeto, orden y después',
        paragraphs: [
          'Pide a los curiosos que se mantengan atrás y dejen espacio para la ambulancia y la policía. Las multitudes estorban, se ponen en riesgo y aumentan el estrés de los heridos.',
          'No grabes ni tomes fotos de las víctimas, y no compartas imágenes de un accidente en redes sociales o grupos de mensajes. Esa persona tiene una familia que no debería enterarse así, y tiene derecho a su dignidad. Si quieres ayudar a otros a evitar ese lugar, comparte solo el aviso, sin imágenes de personas.',
          'Si viste lo que pasó, quédate para dar tu información a las autoridades cuando lleguen. Lo que recuerdes puede ser importante. Y piensa en tomar un curso certificado de primeros auxilios, por ejemplo con una organización de la Cruz Roja: unas pocas horas de práctica te dan la confianza para actuar bien cuando más se necesita.'
        ]
      }
    ],
    example: {
      title: 'Una moto en el suelo al anochecer',
      body: [
        'Imagina que vas manejando al anochecer y, pasando una curva, ves una moto tirada y a su conductor sentado en la orilla, con el casco puesto. Ya hay varias personas alrededor y algunos sacan el teléfono para grabar.',
        'Te estacionas más adelante, fuera de la calle, con las luces de emergencia encendidas. Le pides a un muchacho que se ponga bien a la orilla antes de la curva, con la linterna del teléfono, para que los carros bajen la velocidad. Llamas al 911 y das el nombre de la comunidad y una tienda cercana como referencia. Al motociclista le dices que no se mueva y que no se quite el casco, y le hablas con calma hasta que llega la ayuda. A quienes graban les pides con respeto que guarden el teléfono. Cuando llega la policía, cuentas lo que viste.'
      ]
    },
    mistakes: [
      'Frenar en plena calle y bajarse sin mirar, porque te puede atropellar el próximo vehículo.',
      'Suponer que alguien más ya llamó al 911, porque a veces nadie lo hace.',
      'Dar una ubicación vaga, porque la ambulancia pierde minutos buscando el lugar.',
      'Mover a un herido sin un peligro inmediato, porque puede agravar una lesión de columna.',
      'Quitarle el casco a un motociclista, porque puede mover el cuello lesionado.',
      'Grabar o compartir imágenes de víctimas, porque falta al respeto a la persona y a su familia.'
    ],
    checklist: [
      'Estaciona en un lugar seguro y enciende las luces de emergencia.',
      'Revisa peligros antes de acercarte.',
      'Llama al 911, o asigna a alguien, con una ubicación clara.',
      'Avisa al tráfico que viene, desde la orilla.',
      'No muevas a los heridos salvo peligro inmediato.',
      'No le quites el casco a un motociclista.',
      'No grabes ni compartas imágenes de víctimas.',
      'Quédate para dar tu información a las autoridades.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-911', text: 'El 911 es el número nacional de emergencias en Honduras.' },
      { kind: 'expert', text: 'Las directrices de primeros auxilios de la Cruz Roja recomiendan no quitar el casco a un motociclista herido salvo que una persona capacitada lo considere indispensable, por ejemplo para permitir la respiración.' },
      { kind: 'practical', text: 'Lleva en tu vehículo un chaleco reflectivo, una linterna y, si es posible, triángulos de emergencia y un botiquín básico.' }
    ],
    check: [
      {
        q: 'Llegas primero a un accidente en una curva. ¿Qué haces antes que nada?',
        options: [
          'Corres hacia los heridos para sacarlos de los vehículos.',
          'Te detienes en la calle junto al accidente para ayudar más rápido.',
          'Estacionas en un lugar seguro, enciendes las luces de emergencia y revisas peligros.'
        ],
        answer: 2,
        explain: 'Si te atropellan o te lesionas, no puedes ayudar a nadie. Asegurarte a ti y la escena es el primer paso.'
      },
      {
        q: 'Un motociclista herido está consciente y con el casco puesto. ¿Qué haces con el casco?',
        options: [
          'Se lo quitas para que respire mejor.',
          'Lo dejas puesto y le pides que no se mueva hasta que llegue la ayuda.',
          'Le pides que se lo quite él mismo.'
        ],
        answer: 1,
        explain: 'Quitar el casco puede mover el cuello y agravar una lesión. Se deja puesto salvo que una persona capacitada decida lo contrario.'
      },
      {
        q: '¿Qué información es más importante dar al llamar al 911?',
        options: [
          'Dónde es exactamente, cuántos heridos hay y si hay peligros como fuego.',
          'De quién fue la culpa del accidente.',
          'Qué marca de vehículo era y cuánto vale.'
        ],
        answer: 0,
        explain: 'Una ubicación clara y el estado de los heridos permiten enviar la ayuda correcta al lugar correcto lo más rápido posible.'
      }
    ]
  },
  en: {
    slug: 'what-to-do-at-a-road-crash',
    title: 'What to do if you witness a road crash',
    dek: 'Being first on the scene of a crash is frightening. Knowing what to do and in what order lets you genuinely help without becoming another casualty.',
    objectives: [
      'Know how to protect yourself and the scene before helping.',
      'Know how to call 911 and what information to give.',
      'Understand why you should not move injured people or remove a motorcyclist’s helmet.',
      'Know how to support injured people with respect and how to help afterwards.'
    ],
    sections: [
      {
        heading: 'First, your own safety',
        paragraphs: [
          'The first thing any crash scene needs is for nobody else to get hurt. Many people who stop to help are hit by another vehicle arriving without seeing what has happened, especially at night, on bends or on hills. If you are injured, you can no longer help anyone, and there is one more casualty to care for.',
          'Slow down, switch on your hazard lights and park where you are not in the way or exposed: off the road if possible, and where other drivers can see you in good time. If you are on a motorcycle, get it well to the side. When you get out, check the traffic before opening the door or walking into the road.',
          'Look over the scene before you approach: is there spilled fuel, smoke, fire, fallen power lines, an unstable vehicle? If it is safe, switch off the engines of the vehicles involved and ask that nobody smokes nearby.'
        ]
      },
      {
        heading: 'Call 911 and give clear details',
        paragraphs: [
          'Call 911 as soon as you can, or ask one specific person to do it: “You, in the blue shirt, call 911.” When everyone sees a crash, each person may assume someone else has already called.',
          'Many roads on the island have no name or number, so describe the place with landmarks anyone would recognise: the community, a business, a church, a school or a well-known bend, and which direction. Speak slowly, answer the questions and stay on the line until you are told to hang up; the call-taker may give you instructions while help is on its way.'
        ],
        list: [
          'Exactly where it is, with clear landmarks.',
          'What happened and how many vehicles are involved.',
          'How many people are injured, whether they are awake and whether they are breathing.',
          'Hazards at the scene: fire, fuel, power lines, traffic.',
          'Your name and a number to call you back.'
        ]
      },
      {
        heading: 'Warn oncoming traffic',
        paragraphs: [
          'A crash just past a bend or over the top of a hill is a trap for the next driver. If you have warning triangles, place them well before the scene on the side traffic is approaching from, and further back still if there is a bend or a hill. If other people are helping, one of them can stand well to the side, away from the scene, signalling vehicles to slow down.',
          'At night, use torches, light or reflective clothing and vehicles’ hazard lights. Whoever is signalling should never stand in the middle of the road.'
        ]
      },
      {
        heading: 'Do not move the injured or remove a helmet',
        paragraphs: [
          'An injured person may have neck or spine injuries that cannot be seen. Moving them unnecessarily can make those injuries permanently worse. So <strong>do not move an injured person</strong> unless there is immediate danger you cannot control, such as fire, risk of explosion or a vehicle about to hit them. If they must be moved, do it carefully, keeping the head, neck and back in line, with help from others.',
          'If a motorcyclist has crashed, <strong>do not remove their helmet</strong>. First-aid specialists recommend leaving it on, because taking it off can move the neck. Only a trained person should consider removing it, if that is essential to let the person breathe, and following the guidance of emergency services. If you need to see their face or talk to them, you can carefully lift the visor.',
          'Talk to the injured person calmly. Tell them your name, that help is coming and that it is best not to move. Keep them warm or in the shade, depending on the weather. Do not give them anything to eat or drink. If they are bleeding heavily and you have something to use, press a clean cloth firmly on the wound. A calm presence helps more than you might think.'
        ]
      },
      {
        heading: 'Respect, order and afterwards',
        paragraphs: [
          'Ask onlookers to stay back and leave room for the ambulance and police. Crowds get in the way, put themselves at risk and add to the injured person’s distress.',
          'Do not film or photograph victims, and do not share images of a crash on social media or in messaging groups. That person has a family who should not find out that way, and they have a right to their dignity. If you want to help others avoid the area, share only the warning, with no images of people.',
          'If you saw what happened, stay to give your information to the authorities when they arrive. What you remember may be important. And consider taking a certified first-aid course, for example with a Red Cross organisation: a few hours of practice give you the confidence to act well when it matters most.'
        ]
      }
    ],
    example: {
      title: 'A motorcycle down at dusk',
      body: [
        'Picture yourself driving at dusk. Coming round a bend, you see a motorcycle on its side and the rider sitting at the edge of the road, helmet still on. A few people have already gathered and some are taking out their phones to film.',
        'You pull over further along, off the road, with your hazard lights on. You ask a young man to stand well to the side before the bend, with his phone torch, so cars slow down. You call 911 and give the name of the community and a nearby shop as a landmark. You tell the rider not to move and not to take off the helmet, and you talk to him calmly until help arrives. You respectfully ask the people filming to put their phones away. When the police arrive, you tell them what you saw.'
      ]
    },
    mistakes: [
      'Stopping in the middle of the road and getting out without looking, because the next vehicle could hit you.',
      'Assuming someone else has already called 911, because sometimes nobody does.',
      'Giving a vague location, because the ambulance loses minutes looking for the place.',
      'Moving an injured person when there is no immediate danger, because it can worsen a spinal injury.',
      'Removing a motorcyclist’s helmet, because it can move an injured neck.',
      'Filming or sharing images of victims, because it disrespects the person and their family.'
    ],
    checklist: [
      'Park somewhere safe and switch on your hazard lights.',
      'Check for hazards before you approach.',
      'Call 911, or give someone that job, with a clear location.',
      'Warn oncoming traffic from the side of the road.',
      'Do not move the injured unless there is immediate danger.',
      'Do not remove a motorcyclist’s helmet.',
      'Do not film or share images of victims.',
      'Stay to give your information to the authorities.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-911', text: '911 is the national emergency number in Honduras.' },
      { kind: 'expert', text: 'Red Cross first-aid guidelines advise against removing an injured motorcyclist’s helmet unless a trained person judges it essential, for example to allow breathing.' },
      { kind: 'practical', text: 'Keep a reflective vest, a torch and, if possible, warning triangles and a basic first-aid kit in your vehicle.' }
    ],
    check: [
      {
        q: 'You are first to arrive at a crash on a bend. What do you do before anything else?',
        options: [
          'Run to the injured and pull them out of the vehicles.',
          'Stop in the road beside the crash so you can help faster.',
          'Park somewhere safe, switch on your hazard lights and check for hazards.'
        ],
        answer: 2,
        explain: 'If you are hit or hurt, you cannot help anyone. Making yourself and the scene safe is the first step.'
      },
      {
        q: 'An injured motorcyclist is conscious with their helmet on. What do you do about the helmet?',
        options: [
          'Take it off so they can breathe better.',
          'Leave it on and ask them not to move until help arrives.',
          'Ask them to take it off themselves.'
        ],
        answer: 1,
        explain: 'Removing the helmet can move the neck and worsen an injury. It stays on unless a trained person decides otherwise.'
      },
      {
        q: 'What is the most important information to give when you call 911?',
        options: [
          'Exactly where it is, how many are injured and whether there are hazards such as fire.',
          'Whose fault the crash was.',
          'The make of the vehicle and what it is worth.'
        ],
        answer: 0,
        explain: 'A clear location and the condition of the injured let the right help reach the right place as quickly as possible.'
      }
    ]
  }
};
