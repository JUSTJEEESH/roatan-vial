export default {
  id: 'stopping-distance',
  category: 'velocidad',
  order: 2,
  minutes: 8,
  diagram: 'stopping-distance',
  related: ['following-distance', 'rain-riding', 'pedestrian-safety', 'night-visibility'],
  sources: [
    { label: 'Organización Mundial de la Salud (OMS), Speed management: a road safety manual for decision-makers and practitioners (en inglés), 2.ª ed., 2023',
      labelEn: 'World Health Organization (WHO), Speed management: a road safety manual for decision-makers and practitioners, 2nd ed., 2023' },
    { label: 'Organización Mundial de la Salud (OMS), Informe sobre la situación mundial de la seguridad vial 2023',
      labelEn: 'World Health Organization (WHO), Global status report on road safety 2023' }
  ],
  es: {
    slug: 'velocidad-y-distancia-de-frenado',
    title: 'Velocidad y distancia de frenado',
    dek: 'Unos pocos kilómetros por hora de más parecen no cambiar nada. Pero la distancia que necesitas para detenerte y la fuerza de un choque crecen mucho más rápido que la velocidad.',
    objectives: [
      'Entender que la distancia para detenerse es la suma de la distancia de reacción y la de frenado.',
      'Saber por qué la distancia de frenado se multiplica por cuatro cuando la velocidad se duplica.',
      'Entender cómo la velocidad aumenta la energía de un choque y el riesgo para los peatones.',
      'Aplicar estas ideas para elegir una velocidad segura en calles con gente, curvas o poca visibilidad.'
    ],
    sections: [
      {
        heading: 'Dos distancias, no una',
        paragraphs: [
          'Desde el momento en que aparece un peligro hasta que tu vehículo queda detenido pasan dos cosas. Primero, la <strong>reacción</strong>: ves el peligro, entiendes que tienes que frenar y llevas el pie o la mano al freno. Durante ese tiempo no has empezado a frenar y sigues avanzando a la misma velocidad. Después viene el <strong>frenado</strong>: los frenos actúan y el vehículo va perdiendo velocidad hasta parar.',
          'La distancia total para detenerte es la suma de las dos: distancia de reacción más distancia de frenado. Mucha gente piensa solo en la segunda, como si el vehículo empezara a frenar en el mismo instante en que aparece el peligro. En la realidad, a velocidades de ciudad, la reacción suele ser la parte más grande del recorrido.'
        ]
      },
      {
        heading: 'Por qué la velocidad pesa tanto',
        paragraphs: [
          'La <strong>distancia de reacción</strong> crece en proporción directa a la velocidad. Si vas al doble de velocidad, durante el mismo segundo y medio de reacción recorres el doble de metros.',
          'La <strong>distancia de frenado</strong> crece mucho más rápido: aproximadamente con el cuadrado de la velocidad. Eso significa que si duplicas la velocidad, necesitas unas cuatro veces más distancia para frenar. Si la triplicas, unas nueve veces más. Por eso pasar de 30 a 60 km/h no “duplica” el problema: lo multiplica.',
          'Los números del diagrama son aproximados y suponen un tiempo de reacción de 1,5 segundos y una buena frenada en asfalto seco (7 m/s²). Con esas condiciones, la distancia total para detenerse es más o menos así:'
        ],
        list: [
          'A 30 km/h: unos 17 metros (unos 12 de reacción y unos 5 de frenado).',
          'A 50 km/h: unos 35 metros (unos 21 de reacción y unos 14 de frenado).',
          'A 60 km/h: unos 45 metros (unos 25 de reacción y unos 20 de frenado).',
          'A 80 km/h: unos 69 metros (unos 33 de reacción y unos 35 de frenado).'
        ]
      },
      {
        heading: 'Lo que esos números significan en la calle',
        paragraphs: [
          'Compara 30 y 60 km/h: la distancia de reacción pasa de unos 12 a unos 25 metros, y la de frenado de unos 5 a unos 20 metros, cuatro veces más. Y una comparación todavía más clara: en los 17 metros en que un vehículo a 30 km/h ya se detuvo por completo, uno que va a 50 km/h todavía no ha empezado a frenar. Sigue a toda velocidad, porque el conductor apenas está reaccionando.',
          'Estos valores son para condiciones buenas. Con calle mojada, arena o grava, llantas gastadas, frenos en mal estado, una moto cargada o un conductor cansado o distraído, la distancia real es mayor. Nunca es menor que en el diagrama solo porque tú “tienes buenos reflejos”.',
          'Piensa también en cuánto camino ves libre. En una curva cerrada, en una cuesta o en una calle con carros estacionados a la orilla, quizá solo ves 20 o 25 metros adelante. A 50 km/h necesitas unos 35 metros para detenerte en seco, así que en ese tramo no te alcanza. La velocidad segura es la que te permite parar dentro de la distancia que ves despejada, no la que marca el velocímetro del que va adelante.'
        ]
      },
      {
        heading: 'La energía del choque y los peatones',
        paragraphs: [
          'La energía que lleva un vehículo en movimiento también crece con el cuadrado de la velocidad. Al doble de velocidad, el vehículo lleva unas cuatro veces más energía, y en un choque esa energía la reciben los cuerpos de las personas. Por eso, unos pocos kilómetros por hora de diferencia pueden separar un golpe del que alguien se recupera de uno que cambia una vida.',
          'Para quien va a pie, en bicicleta o en moto, esto es todavía más serio, porque no tiene carrocería que lo proteja. La OMS, en su manual de gestión de la velocidad, explica que el riesgo de muerte de un peatón atropellado aumenta de forma muy marcada a medida que sube la velocidad del impacto. A velocidades bajas, la mayoría de los peatones sobreviven; a velocidades de carretera, la probabilidad de sobrevivir cae drásticamente.',
          'Ir más despacio tiene dos efectos a la vez: muchas veces evita el choque, porque te da tiempo de parar, y cuando el choque no se puede evitar, llegas a él con mucha menos velocidad.'
        ]
      }
    ],
    example: {
      title: 'Frente a la escuela',
      body: [
        'Imagina una calle frente a una escuela, a media mañana. Un niño sale corriendo detrás de un carro estacionado, a unos 20 metros de dos vehículos que vienen por la calle.',
        'El primero viene a 30 km/h. El conductor reacciona, frena y, según los valores aproximados del diagrama, se detiene en unos 17 metros, antes de llegar al niño. El segundo viene a 50 km/h por la misma calle. En esos mismos 20 metros, su conductor apenas ha terminado de reaccionar y ni siquiera ha empezado a frenar. Llega al punto donde está el niño casi a la misma velocidad a la que venía.',
        'La única diferencia entre los dos conductores fueron 20 km/h. No fue la habilidad, ni los reflejos, ni el vehículo.'
      ]
    },
    mistakes: [
      'Pensar que el vehículo empieza a frenar en el instante en que ves el peligro: primero recorres la distancia de reacción a toda velocidad.',
      'Creer que el doble de velocidad necesita el doble de distancia para frenar: necesita unas cuatro veces más.',
      'Confiar en tus reflejos para ir más rápido: incluso con buena reacción, la distancia de frenado sigue creciendo con el cuadrado de la velocidad.',
      'Usar las distancias en seco como referencia con lluvia: en mojado la distancia de frenado es mayor.',
      'Pensar que “solo 10 km/h más” no importa: cerca de peatones, esa diferencia puede decidir si alguien sobrevive.',
      'Manejar distraído: si tardas más en reaccionar, la distancia de reacción crece y la distancia total también.'
    ],
    checklist: [
      'Recuerda: distancia para detenerte = reacción + frenado.',
      'Respeta los límites señalizados, y ve más despacio cuando las condiciones lo pidan.',
      'Cerca de escuelas, mercados, paradas y casas, baja la velocidad.',
      'Elige una velocidad que te permita detenerte dentro de lo que ves.',
      'Con lluvia, de noche o con carga, deja aún más margen.',
      'Mantén frenos y llantas en buen estado.',
      'Nada de teléfono al manejar: cada segundo de distracción son metros sin frenar.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-velocidad', text: 'La Ley de Tránsito exige respetar los límites de velocidad indicados por la señalización, y exceder la velocidad se considera una infracción grave.' },
      { kind: 'expert', text: 'La OMS señala que la velocidad influye tanto en la probabilidad de un choque como en la gravedad de sus consecuencias, y que el riesgo para los peatones aumenta de forma muy marcada con la velocidad del impacto.' },
      { kind: 'practical', text: 'Un límite señalizado es un máximo, no una meta. En una calle con gente, curvas o poca visibilidad, la velocidad segura suele estar por debajo.' }
    ],
    check: [
      {
        q: 'Si duplicas tu velocidad, ¿qué pasa con la distancia de frenado?',
        options: [
          'Se multiplica aproximadamente por cuatro.',
          'Se duplica.',
          'Sigue casi igual si los frenos son buenos.'
        ],
        answer: 0,
        explain: 'La distancia de frenado crece aproximadamente con el cuadrado de la velocidad: al doble de velocidad, unas cuatro veces más distancia.'
      },
      {
        q: 'Con los valores aproximados del diagrama, un vehículo a 30 km/h se detiene en unos 17 metros. ¿Qué está haciendo en esos 17 metros uno que va a 50 km/h?',
        options: [
          'Ya se detuvo también.',
          'Está terminando de frenar.',
          'Todavía no ha empezado a frenar, porque el conductor sigue reaccionando.'
        ],
        answer: 2,
        explain: 'A 50 km/h, con 1,5 segundos de reacción se recorren unos 21 metros antes de empezar a frenar.'
      },
      {
        q: '¿Qué es la distancia de reacción?',
        options: [
          'Lo que recorre el vehículo desde que pisas el freno hasta parar.',
          'Lo que recorres desde que aparece el peligro hasta que empiezas a frenar.',
          'La distancia que debes dejar con el vehículo de adelante.'
        ],
        answer: 1,
        explain: 'Es el tramo que recorres a la misma velocidad mientras ves el peligro, decides y llevas el pie o la mano al freno.'
      }
    ],
    diagramCaption: 'Distancias totales aproximadas para detenerse, con 1,5 segundos de reacción y buena frenada en asfalto seco: 30 km/h ≈ 17 m, 50 km/h ≈ 35 m, 60 km/h ≈ 45 m, 80 km/h ≈ 69 m. Con lluvia, cansancio o frenos gastados, la distancia es mayor.'
  },
  en: {
    slug: 'speed-and-stopping-distance',
    title: 'Speed and stopping distance',
    dek: 'A few extra kilometres per hour seem to change nothing. But the distance you need to stop and the force of a crash grow much faster than speed does.',
    objectives: [
      'Understand that stopping distance is reaction distance plus braking distance.',
      'Know why braking distance roughly quadruples when speed doubles.',
      'Understand how speed increases crash energy and the risk to pedestrians.',
      'Use these ideas to choose a safe speed on roads with people, bends or poor visibility.'
    ],
    sections: [
      {
        heading: 'Two distances, not one',
        paragraphs: [
          'From the moment a hazard appears until your vehicle stops, two things happen. First comes <strong>reaction</strong>: you see the hazard, realise you need to brake and move your foot or hand to the brake. During that time you haven’t started braking and you keep moving at the same speed. Then comes <strong>braking</strong>: the brakes work and the vehicle loses speed until it stops.',
          'Your total stopping distance is the sum of the two: reaction distance plus braking distance. Many people think only about the second, as if the vehicle started braking the instant the hazard appeared. In reality, at town speeds, reaction is usually the larger part of the distance.'
        ]
      },
      {
        heading: 'Why speed matters so much',
        paragraphs: [
          '<strong>Reaction distance</strong> grows in direct proportion to speed. If you go twice as fast, you cover twice as many metres during the same second and a half of reaction.',
          '<strong>Braking distance</strong> grows much faster: roughly with the square of speed. That means if you double your speed, you need about four times the distance to brake. If you triple it, about nine times. That is why going from 30 to 60 km/h doesn’t “double” the problem: it multiplies it.',
          'The figures in the diagram are approximate and assume a reaction time of 1.5 seconds and good braking on dry asphalt (7 m/s²). Under those conditions, total stopping distance is roughly:'
        ],
        list: [
          'At 30 km/h: about 17 metres (about 12 reacting and about 5 braking).',
          'At 50 km/h: about 35 metres (about 21 reacting and about 14 braking).',
          'At 60 km/h: about 45 metres (about 25 reacting and about 20 braking).',
          'At 80 km/h: about 69 metres (about 33 reacting and about 35 braking).'
        ]
      },
      {
        heading: 'What those numbers mean on the road',
        paragraphs: [
          'Compare 30 and 60 km/h: reaction distance goes from about 12 to about 25 metres, and braking distance from about 5 to about 20 metres, four times as much. And an even clearer comparison: in the 17 metres in which a vehicle at 30 km/h has come to a complete stop, one travelling at 50 km/h hasn’t even started braking. It is still at full speed, because the driver is only just reacting.',
          'These values are for good conditions. On a wet road, with sand or gravel, worn tyres, poor brakes, a loaded motorcycle or a tired or distracted driver, the real distance is longer. It is never shorter than the diagram just because you “have good reflexes”.',
          'Think too about how much clear road you can see. On a tight bend, over a hill or on a street with cars parked along the side, you may only see 20 or 25 metres ahead. At 50 km/h you need about 35 metres to stop on a dry road, so on that stretch it isn’t enough. A safe speed is one that lets you stop within the distance you can see is clear, not the speed of whoever is in front of you.'
        ]
      },
      {
        heading: 'Crash energy and pedestrians',
        paragraphs: [
          'The energy a moving vehicle carries also grows with the square of speed. At twice the speed, a vehicle carries about four times the energy, and in a crash that energy is absorbed by people’s bodies. That is why a few kilometres per hour can be the difference between an injury someone recovers from and one that changes a life.',
          'For anyone on foot, on a bicycle or on a motorcycle, this is even more serious, because they have no vehicle body to protect them. WHO, in its speed management manual, explains that a pedestrian’s risk of death rises very steeply as impact speed increases. At low speeds, most pedestrians survive; at open-road speeds, the chance of survival drops dramatically.',
          'Going slower has two effects at once: it often prevents the crash, because it gives you time to stop, and when a crash can’t be avoided, you reach it at much lower speed.'
        ]
      }
    ],
    example: {
      title: 'Outside the school',
      body: [
        'Picture a road outside a school, mid-morning. A child runs out from behind a parked car, about 20 metres ahead of two vehicles coming along the road.',
        'The first is travelling at 30 km/h. The driver reacts, brakes and, using the approximate values in the diagram, stops in about 17 metres, before reaching the child. The second is travelling at 50 km/h on the same road. In those same 20 metres, the driver has only just finished reacting and hasn’t even started braking. The vehicle reaches the spot where the child is at almost the speed it was going.',
        'The only difference between the two drivers was 20 km/h. Not skill, not reflexes, not the vehicle.'
      ]
    },
    mistakes: [
      'Thinking the vehicle starts braking the instant you see the hazard: first you cover the reaction distance at full speed.',
      'Believing twice the speed needs twice the braking distance: it needs about four times as much.',
      'Relying on your reflexes to go faster: even with quick reactions, braking distance still grows with the square of speed.',
      'Using dry-road distances as your guide in the rain: on a wet road, braking distance is longer.',
      'Thinking “only 10 km/h more” doesn’t matter: near pedestrians, that difference can decide whether someone survives.',
      'Driving distracted: if you take longer to react, reaction distance grows and so does your total stopping distance.'
    ],
    checklist: [
      'Remember: stopping distance = reaction + braking.',
      'Respect posted limits, and go slower when conditions call for it.',
      'Near schools, markets, bus stops and homes, slow down.',
      'Choose a speed that lets you stop within what you can see.',
      'In rain, at night or when loaded, leave even more margin.',
      'Keep your brakes and tyres in good condition.',
      'No phone while driving: every second of distraction is metres without braking.'
    ],
    notes: [
      { kind: 'law', fact: 'hn-velocidad', text: 'The Ley de Tránsito requires drivers to respect the speed limits shown by signage, and speeding is classed as a serious infraction.' },
      { kind: 'expert', text: 'WHO notes that speed affects both the likelihood of a crash and the severity of its consequences, and that the risk to pedestrians rises very steeply with impact speed.' },
      { kind: 'practical', text: 'A posted limit is a maximum, not a target. On a road with people, bends or poor visibility, the safe speed is often lower.' }
    ],
    check: [
      {
        q: 'If you double your speed, what happens to your braking distance?',
        options: [
          'It roughly quadruples.',
          'It doubles.',
          'It stays about the same if your brakes are good.'
        ],
        answer: 0,
        explain: 'Braking distance grows roughly with the square of speed: at twice the speed, about four times the distance.'
      },
      {
        q: 'Using the diagram’s approximate values, a vehicle at 30 km/h stops in about 17 metres. What is a vehicle at 50 km/h doing in those 17 metres?',
        options: [
          'It has stopped as well.',
          'It is finishing braking.',
          'It hasn’t started braking yet, because the driver is still reacting.'
        ],
        answer: 2,
        explain: 'At 50 km/h, with 1.5 seconds of reaction time, you cover about 21 metres before you even start braking.'
      },
      {
        q: 'What is reaction distance?',
        options: [
          'The distance the vehicle travels from when you press the brake until it stops.',
          'The distance you travel from when the hazard appears until you start braking.',
          'The gap you should leave to the vehicle ahead.'
        ],
        answer: 1,
        explain: 'It is the stretch you cover at the same speed while you see the hazard, decide and move your foot or hand to the brake.'
      }
    ],
    diagramCaption: 'Approximate total stopping distances, with 1.5 seconds of reaction time and good braking on dry asphalt: 30 km/h ≈ 17 m, 50 km/h ≈ 35 m, 60 km/h ≈ 45 m, 80 km/h ≈ 69 m. In rain, when tired or with worn brakes, the distance is longer.'
  }
};
