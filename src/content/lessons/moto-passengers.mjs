export default {
  id: 'moto-passengers',
  category: 'moto',
  order: 4,
  minutes: 8,
  diagram: 'passenger-load',
  related: ['moto-load-balance', 'helmet-fit', 'seatbelts-children', 'helmet-carried'],
  sources: [
    { label: 'Organización Mundial de la Salud (OMS), Powered two- and three-wheeler safety: a road safety manual for decision-makers and practitioners (en inglés), 2017',
      labelEn: 'World Health Organization (WHO), Powered two- and three-wheeler safety: a road safety manual for decision-makers and practitioners, 2017' },
    { label: 'Organización Mundial de la Salud (OMS), Cascos: manual de seguridad vial, 2.ª ed., 2023',
      labelEn: 'World Health Organization (WHO), Helmets: a road safety manual, 2nd ed., 2023' }
  ],
  es: {
    slug: 'pasajeros-en-moto',
    title: 'Pasajeros en moto: viajar seguros los dos',
    dek: 'Llevar a alguien en la moto es parte de la vida diaria de muchas familias. Estas prácticas hacen que ese viaje sea más seguro para quien maneja y para quien va atrás.',
    objectives: [
      'Saber qué necesita un pasajero para viajar seguro: casco, pies en los reposapiés y buena postura.',
      'Aprender a subir, bajar y moverse con la moto sin desequilibrarla.',
      'Conocer las recomendaciones para llevar niños y la directiva reportada sobre menores de 12 años.',
      'Saber qué hacer cuando hay más personas que lugares en la moto.'
    ],
    sections: [
      {
        heading: 'El pasajero también necesita protección',
        paragraphs: [
          'Quien va atrás tiene el mismo riesgo de golpearse la cabeza que quien maneja, y a veces menos control sobre cómo cae. Por eso el pasajero necesita su propio casco certificado, de su talla, puesto y abrochado. No sirve compartir un solo casco, ni que el pasajero lo lleve en la mano.',
          'Ropa que cubra brazos y piernas y calzado cerrado protegen la piel y los pies. Las chancletas se salen y dejan los pies expuestos al tubo de escape, que se calienta mucho y quema con facilidad. Cuida también que nada cuelgue cerca de la rueda o la cadena: faldas largas, bufandas, cordones, bolsas o correas.'
        ]
      },
      {
        heading: 'Cómo ir de pasajero',
        paragraphs: [
          'Un buen pasajero hace que la moto sea más fácil de manejar. Uno inquieto la vuelve inestable. Estas son las reglas básicas que conviene explicarle a cualquiera que suba a tu moto.'
        ],
        list: [
          '<strong>Pies siempre en los reposapiés</strong>, también cuando la moto se detiene. Bajar los pies al suelo en un alto desequilibra la moto y puede lastimarte.',
          '<strong>Agárrate bien</strong>: de la cintura de quien maneja o de las agarraderas del asiento, con las dos manos. Nunca de los hombros ni de los brazos del conductor, porque le jalas el timón.',
          '<strong>Inclínate con la moto</strong>: en las curvas, mantente alineado con quien maneja, mirando por encima de su hombro hacia el lado de la curva. No te enderices ni te inclines al lado contrario.',
          '<strong>Quédate quieto</strong>: no te muevas de golpe, no te voltees para hablar con alguien en la calle y evita usar el teléfono.',
          '<strong>No distraigas a quien maneja</strong>: no le hables al oído en momentos difíciles, no le señales cosas de repente y no le pidas que vaya más rápido.',
          '<strong>Prepárate al frenar</strong>: aprieta un poco las rodillas contra el asiento y sostente firme con las manos para no deslizarte y empujar al conductor hacia adelante.'
        ]
      },
      {
        heading: 'Subir y bajar sin desequilibrar la moto',
        paragraphs: [
          'Muchas caídas pequeñas pasan con la moto casi detenida, justo al subir o bajar. El pasajero sube solo cuando quien maneja ya está sentado, con los dos pies firmes en el suelo, el freno apretado y le dice “sube”. Se sube por el lado contrario al tubo de escape, apoyando un pie en el reposapiés y pasando la pierna por encima del asiento con un movimiento tranquilo.',
          'Para bajar, el pasajero espera a que la moto esté completamente detenida y quien maneja esté listo, y se baja también con calma y lejos del escape. Si llevas bolsas o paquetes, entrégaselos a alguien o ponlos en la moto antes de subir, no mientras subes.'
        ]
      },
      {
        heading: 'Niños como pasajeros',
        paragraphs: [
          'Los niños pequeños son los pasajeros más vulnerables. Las guías de seguridad vial recomiendan que un niño solo viaje en moto si puede apoyar los pies en los reposapiés, tiene la fuerza y la madurez para agarrarse bien y mantenerse quieto durante todo el viaje, y lleva un casco de su propia talla. Un niño que no alcanza los reposapiés no tiene dónde apoyarse al frenar, y sus pies pueden quedar cerca de la rueda o del escape.',
          'Por la misma razón, no se recomienda llevar a un niño entre quien maneja y el timón, ni a un bebé en brazos: en una frenada fuerte nada lo sostiene, y su cuerpo queda entre el adulto y el golpe. Además, las autoridades de tránsito han restringido por directiva llevar a menores de 12 años como pasajeros (ver la nota abajo).'
        ]
      },
      {
        heading: 'Dos personas como máximo, y qué hacer si son más',
        paragraphs: [
          'La Ley de Tránsito establece como infracción llevar más de dos personas en una moto. Más allá de la multa, hay una razón de seguridad: cada persona extra cambia el equilibrio, alarga la distancia de frenado y deja a alguien sin espacio, sin reposapiés y sin forma de agarrarse bien.',
          'Muchas familias tienen una sola moto, y eso es una realidad, no una falta. La pregunta es cómo hacer el viaje sin poner a nadie en riesgo. Algunas opciones prácticas:'
        ],
        list: [
          'Hacer dos viajes: dejar primero a uno y regresar por el otro.',
          'Usar el bus o un taxi para el trayecto de uno de los pasajeros.',
          'Ponerse de acuerdo con vecinos o familiares que van al mismo lugar, como la escuela o el trabajo.',
          'Salir un poco antes para que hacer dos viajes no signifique llegar tarde.'
        ]
      }
    ],
    example: {
      title: 'Imagina esto',
      body: [
        'Imagina a un papá que todas las mañanas lleva a su hija de 14 años a la escuela y luego sigue hacia el trabajo. Antes de salir, revisa que ella tenga su casco abrochado, la mochila bien puesta en la espalda y los pies en los reposapiés. Ella se agarra de su cintura y en las curvas mira por encima de su hombro.',
        'Un día, su hijo menor también necesita ir temprano. En vez de subir a los tres en la moto, él lleva primero a la mayor, vuelve por el pequeño en un segundo viaje y salen diez minutos antes. Llegan todos a tiempo y nadie viajó sin lugar ni sin casco.'
      ]
    },
    mistakes: [
      'Que el pasajero no lleve casco o lo lleve sin abrochar: tiene el mismo riesgo de lesión en la cabeza que quien maneja.',
      'Bajar los pies de los reposapiés en los altos: desequilibra la moto y expone los pies.',
      'Agarrarse de los hombros o brazos del conductor: le jala el timón y le quita control.',
      'Enderezarse o inclinarse al lado contrario en una curva: obliga al conductor a corregir y puede sacarlo de la trayectoria.',
      'Subir cuando quien maneja no está listo: muchas caídas ocurren con la moto casi detenida.',
      'Llevar a tres o más personas en la moto: no hay espacio, ni reposapiés, ni forma segura de agarrarse, y la moto frena y gira peor.'
    ],
    checklist: [
      'Casco certificado de su talla, puesto y abrochado, para cada pasajero.',
      'Calzado cerrado y nada colgando cerca de la rueda o la cadena.',
      'Subir solo cuando quien maneja diga que está listo.',
      'Pies en los reposapiés durante todo el viaje.',
      'Agarrarse de la cintura del conductor o de las agarraderas.',
      'Inclinarse con la moto en las curvas y quedarse quieto.',
      'Nunca más de dos personas en la moto.',
      'Si son más, hacer dos viajes o buscar otro transporte.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-moto-dos-personas', text: 'La Ley de Tránsito (Art. 99, num. 21, según se ha reportado) establece como infracción llevar más de dos personas en una motocicleta.' },
      { kind: 'law', fact: 'hn-moto-menores', text: 'Las autoridades de tránsito han restringido, mediante una directiva administrativa, llevar a menores de 12 años como pasajeros de motocicleta. Se reporta como una directiva, no como una disposición de la ley, y su situación actual debe confirmarse con las autoridades.' },
      { kind: 'expert', text: 'Las guías de seguridad vial recomiendan que un niño solo viaje como pasajero si alcanza los reposapiés, puede agarrarse con firmeza y lleva un casco de su talla.' }
    ],
    check: [
      {
        q: 'La moto se detiene en un alto. ¿Qué hace el pasajero con los pies?',
        options: [
          'Los baja al suelo para ayudar a sostener la moto',
          'Los mantiene en los reposapiés',
          'Los sube sobre el asiento'
        ],
        answer: 1,
        explain: 'Quien maneja es quien sostiene la moto. Si el pasajero baja los pies, cambia el equilibrio y puede lastimarse.'
      },
      {
        q: 'En una curva, ¿cómo debe ir el pasajero?',
        options: [
          'Derecho, sin inclinarse, para compensar',
          'Inclinado al lado contrario de la curva',
          'Alineado con quien maneja, mirando por encima de su hombro hacia el lado de la curva'
        ],
        answer: 2,
        explain: 'El pasajero se inclina junto con la moto y el conductor. Enderezarse o inclinarse al lado contrario obliga a corregir y hace la moto menos estable.'
      },
      {
        q: 'Tres personas de tu familia necesitan llegar al mismo lugar y solo tienes una moto. ¿Cuál es la opción segura?',
        options: [
          'Hacer dos viajes o que alguien use el bus o un taxi',
          'Subir a los tres e ir despacio',
          'Llevar al más pequeño adelante, entre tú y el timón'
        ],
        answer: 0,
        explain: 'Más de dos personas en una moto es una infracción y quita espacio, apoyo y control. Dos viajes u otro transporte resuelven el problema sin poner a nadie en riesgo.'
      }
    ],
    diagramCaption: 'Conductor y un pasajero, ambos con casco, pies en los reposapiés y el pasajero agarrado de la cintura. Nunca más de dos personas.'
  },
  en: {
    slug: 'motorcycle-passengers',
    title: 'Motorcycle passengers: both of you riding safely',
    dek: 'Carrying someone on the motorcycle is part of daily life for many families. These habits make that trip safer for the rider and for the person behind.',
    objectives: [
      'Know what a passenger needs to ride safely: a helmet, feet on the footpegs and good posture.',
      'Learn how to get on, get off and move with the motorcycle without unbalancing it.',
      'Know the guidance on carrying children and the reported directive on under-12s.',
      'Know what to do when there are more people than places on the motorcycle.'
    ],
    sections: [
      {
        heading: 'The passenger needs protection too',
        paragraphs: [
          'The person behind faces the same risk of a head injury as the rider, and sometimes has less control over how they fall. That is why a passenger needs their own certified helmet, in their size, on and fastened. Sharing one helmet does not work, and neither does the passenger holding it in their hand.',
          'Clothing that covers arms and legs and closed shoes protect skin and feet. Flip-flops slip off and leave feet exposed to the exhaust pipe, which gets very hot and burns easily. Also make sure nothing hangs near the wheel or chain: long skirts, scarves, laces, bags or straps.'
        ]
      },
      {
        heading: 'How to ride as a passenger',
        paragraphs: [
          'A good passenger makes the motorcycle easier to handle. A restless one makes it unstable. These are the basic rules worth explaining to anyone who gets on your bike.'
        ],
        list: [
          '<strong>Feet always on the footpegs</strong>, even when the bike stops. Putting your feet down at a stop unbalances the bike and can hurt you.',
          '<strong>Hold on firmly</strong>: around the rider’s waist or to the seat grab handles, with both hands. Never by the rider’s shoulders or arms, because you pull on the handlebar.',
          '<strong>Lean with the bike</strong>: on bends, stay in line with the rider, looking over their shoulder on the side of the bend. Do not sit upright or lean the other way.',
          '<strong>Keep still</strong>: no sudden movements, do not twist round to talk to someone on the street, and avoid using your phone.',
          '<strong>Do not distract the rider</strong>: do not talk in their ear at difficult moments, do not suddenly point at things, and do not ask them to go faster.',
          '<strong>Brace when braking</strong>: grip the seat a little with your knees and hold on firmly with your hands so you do not slide forwards and push the rider.'
        ]
      },
      {
        heading: 'Getting on and off without unbalancing the bike',
        paragraphs: [
          'Many small falls happen with the motorcycle almost stopped, just as someone gets on or off. The passenger gets on only when the rider is seated, both feet firmly on the ground, the brake held, and says “get on”. Get on from the side away from the exhaust, put one foot on the footpeg and swing your leg over the seat in one calm movement.',
          'To get off, the passenger waits until the bike has completely stopped and the rider is ready, and gets off calmly and away from the exhaust. If you are carrying bags or parcels, hand them to someone or put them on the bike before you get on, not while you are climbing on.'
        ]
      },
      {
        heading: 'Children as passengers',
        paragraphs: [
          'Young children are the most vulnerable passengers. Road-safety guidance recommends that a child rides on a motorcycle only if they can rest their feet on the footpegs, have the strength and maturity to hold on firmly and keep still for the whole trip, and wear a helmet in their own size. A child who cannot reach the footpegs has nothing to brace against when braking, and their feet may end up near the wheel or exhaust.',
          'For the same reason, carrying a child between the rider and the handlebar, or a baby in someone’s arms, is not recommended: under hard braking nothing holds them, and their body is between the adult and the impact. In addition, traffic authorities have restricted carrying children under 12 as passengers by directive (see the note below).'
        ]
      },
      {
        heading: 'Two people at most, and what to do if there are more',
        paragraphs: [
          'The Ley de Tránsito makes it an infraction to carry more than two people on a motorcycle. Beyond the fine, there is a safety reason: every extra person changes the balance, lengthens the braking distance, and leaves someone without space, without footpegs and without a proper way to hold on.',
          'Many families have a single motorcycle, and that is a fact of life, not a failing. The question is how to make the trip without putting anyone at risk. Some practical options:'
        ],
        list: [
          'Make two trips: drop one person first and come back for the other.',
          'Use the bus or a taxi for one passenger’s journey.',
          'Arrange shared rides with neighbours or relatives going to the same place, such as school or work.',
          'Leave a little earlier so that two trips do not mean arriving late.'
        ]
      }
    ],
    example: {
      title: 'Picture this',
      body: [
        'Picture a father who takes his 14-year-old daughter to school every morning before going on to work. Before setting off, he checks her helmet is fastened, her backpack is on properly and her feet are on the footpegs. She holds on around his waist and, on bends, looks over his shoulder.',
        'One day his younger son also needs to go early. Instead of putting all three on the bike, he takes his daughter first, comes back for the boy on a second trip, and they leave ten minutes earlier. Everyone arrives on time, and nobody rode without a proper place or without a helmet.'
      ]
    },
    mistakes: [
      'The passenger not wearing a helmet, or wearing it unfastened: they face the same risk of head injury as the rider.',
      'Putting feet down off the footpegs at stops: it unbalances the bike and exposes the feet.',
      'Holding on to the rider’s shoulders or arms: it pulls on the handlebar and takes away control.',
      'Sitting upright or leaning the wrong way on a bend: it forces the rider to correct and can push them off their line.',
      'Getting on before the rider is ready: many falls happen with the bike almost stopped.',
      'Carrying three or more people: there is no space, no footpegs, no safe way to hold on, and the bike brakes and turns worse.'
    ],
    checklist: [
      'A certified helmet in their size, on and fastened, for every passenger.',
      'Closed shoes and nothing hanging near the wheel or chain.',
      'Get on only when the rider says they are ready.',
      'Feet on the footpegs for the whole trip.',
      'Hold on around the rider’s waist or to the grab handles.',
      'Lean with the bike on bends and keep still.',
      'Never more than two people on the motorcycle.',
      'If there are more, make two trips or find other transport.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-moto-dos-personas', text: 'The Ley de Tránsito (Art. 99, num. 21, as reported) makes it an infraction to carry more than two people on a motorcycle.' },
      { kind: 'law', fact: 'hn-moto-menores', text: 'Traffic authorities have, by administrative directive, restricted carrying children under 12 as motorcycle passengers. This is reported as a directive, not a provision of the law, and its current status should be confirmed with the authorities.' },
      { kind: 'expert', text: 'Road-safety guidance recommends that a child rides as a passenger only if they can reach the footpegs, can hold on firmly and are wearing a helmet in their own size.' }
    ],
    check: [
      {
        q: 'The motorcycle stops at a junction. What does the passenger do with their feet?',
        options: [
          'Put them on the ground to help hold the bike up',
          'Keep them on the footpegs',
          'Lift them onto the seat'
        ],
        answer: 1,
        explain: 'The rider is the one who holds the bike up. If the passenger puts their feet down, it changes the balance and they can get hurt.'
      },
      {
        q: 'On a bend, how should the passenger sit?',
        options: [
          'Upright, without leaning, to balance things out',
          'Leaning away from the bend',
          'In line with the rider, looking over their shoulder on the side of the bend'
        ],
        answer: 2,
        explain: 'The passenger leans together with the bike and the rider. Sitting upright or leaning the other way forces the rider to correct and makes the bike less stable.'
      },
      {
        q: 'Three members of your family need to get to the same place and you only have one motorcycle. What is the safe option?',
        options: [
          'Make two trips, or have someone take the bus or a taxi',
          'Put all three on and ride slowly',
          'Carry the youngest in front, between you and the handlebar'
        ],
        answer: 0,
        explain: 'More than two people on a motorcycle is an infraction and takes away space, support and control. Two trips or other transport solve the problem without putting anyone at risk.'
      }
    ],
    diagramCaption: 'Rider and one passenger, both wearing helmets, feet on the footpegs and the passenger holding the rider’s waist. Never more than two people.'
  }
};
